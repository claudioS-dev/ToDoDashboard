import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const EditCardModal = ({ isOpen, onClose, onSave, card }) => {
  const [editedCard, setEditedCard] = useState({
    id: "",
    title: "",
    description: "",
    progress: 0,
    start_date: "",
  });

  useEffect(() => {
    if (card) {
      setEditedCard({
        ...card,
        start_date: new Date(card.start_date).toISOString().split("T")[0], // Formatear la fecha
      });
    }
  }, [card]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCard((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Crear una fecha ISO completa
    const dateWithTime = new Date(editedCard.start_date);
    const isoDate = dateWithTime.toISOString();

    onSave({
      ...editedCard,
      start_date: isoDate,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Editar Tarjeta</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Título
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={editedCard.title}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              value={editedCard.description}
              onChange={handleChange}
              rows="3"
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="start_date"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Fecha de inicio
            </label>
            <input
              type="date"
              id="start_date"
              name="start_date"
              value={editedCard.start_date}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="progress"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Progreso: {editedCard.progress}
            </label>
            <input
              type="range"
              id="progress"
              name="progress"
              min="0"
              max="10"
              value={editedCard.progress}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCardModal;
