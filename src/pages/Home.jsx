import React, { useState, useEffect } from "react";

import Card from "../Components/Card";

import Calendar from "../Components/Calendar";

import AddCard from "../Components/AddCard";
import EditCardModal from "../Components/EditCardModal";
import axios from "axios";

const api = axios.create({
  baseURL: "https://flavio02.matyplop.cl/api2",
});

const Home = () => {
  const [cards, setCards] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingCard, setEditingCard] = useState(null);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await api.get("/api/cards");
      setCards(response.data);
    } catch (error) {
      console.error("Error fetching cards", error);
    }
  };

  const handleDeleteCard = async (id) => {
    try {
      await api.delete(`/api/cards/${id}`);

      setCards(cards.filter((card) => card._id !== id));
    } catch (error) {
      console.error("Error deleting card", error);
    }
  };

  const handleEditCard = (id) => {
    const cardToEdit = cards.find((card) => card._id === id);

    setEditingCard(cardToEdit);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = async (editedCard) => {
    try {
      const response = await api.put(
        `/api/cards/${editedCard._id}`,
        editedCard
      );

      setCards(
        cards.map((card) =>
          card._id === editedCard._id ? response.data : card
        )
      );

      setIsEditModalOpen(false);
      setEditingCard(null);
    } catch (error) {
      console.error("Error actualizando la carta", error);
    }
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div className="row-span-2 sm:col-span-2 lg:col-span-1">
          <Calendar />
        </div>

        {cards.map((card) => (
          <Card
            key={card._id}
            id={card._id}
            title={card.title}
            description={card.description}
            progress={card.progress}
            onDelete={handleDeleteCard}
            onEdit={handleEditCard}
          />
        ))}

        <AddCard onAdd={() => handleEditCard(null)} />
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
    </div>
  );
};

export default Home;
