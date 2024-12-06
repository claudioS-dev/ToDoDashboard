import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import Calendar from "../Components/Calendar";
import AddCard from "../Components/AddCard";
import EditCardModal from "../Components/EditCardModal";
import AddCardModal from "../Components/AddCardModal";
import axios from "axios";

const api = axios.create({
  baseURL: "https://flavio02.matyplop.cl/apitest8000/",
  headers: {
    "Content-Type": "application/json",
  },
});

const Home = () => {
  const [cards, setCards] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await api.get("/api/cards/");
      setCards(response.data);
    } catch (error) {
      console.error("Error fetching cards", error);
    }
  };

  const handleDeleteCard = async (id) => {
    try {
      await api.delete(`/api/cards/${id}/`);
      setCards(cards.filter((card) => card.id !== id));
      fetchCards(); // Refrescar la lista después de eliminar
    } catch (error) {
      console.error("Error deleting card", error);
    }
  };

  const handleEditCard = (id) => {
    const cardToEdit = cards.find((card) => card.id === id);
    setEditingCard(cardToEdit);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = async (editedCard) => {
    try {
      const response = await api.put(
        `/api/cards/${editedCard.id}/`,
        editedCard
      );
      setCards(
        cards.map((card) => (card.id === editedCard.id ? response.data : card))
      );
      setIsEditModalOpen(false);
      setEditingCard(null);
      fetchCards(); // Refrescar la lista después de editar
    } catch (error) {
      console.error("Error updating the card", error);
    }
  };

  const handleAddCard = async (newCard) => {
    try {
      const response = await api.post("/api/cards/", newCard);
      setCards([...cards, response.data]);
      setIsAddModalOpen(false);
      setSelectedDate(null);
      fetchCards(); // Refrescar la lista después de añadir
    } catch (error) {
      console.error("Error adding new card", error);
    }
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setIsAddModalOpen(true);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div className="row-span-2 sm:col-span-2 lg:col-span-1">
          <Calendar onDateSelect={handleDateSelect} />
        </div>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            progress={card.progress}
            date={new Date(card.start_date).toLocaleDateString()}
            onDelete={handleDeleteCard}
            onEdit={handleEditCard}
          />
        ))}
        <AddCard onAdd={() => setIsAddModalOpen(true)} />
      </div>
      <EditCardModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setEditingCard(null);
        }}
        onSave={handleSaveEdit}
        card={editingCard}
      />
      <AddCardModal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false);
          setSelectedDate(null);
        }}
        onAdd={handleAddCard}
        initialDate={selectedDate}
      />
    </div>
  );
};

export default Home;
