import React from "react";
import { Trash2, Edit } from "lucide-react";

function Card({
  id,
  image,
  title = "Sin Titulo",
  description = "Sin descripción",
  date = "12 Nov 2022",
  progress = 3,
  onDelete,
  onEdit,
}) {
  const safeProgress = Math.min(Math.max(0, progress), 10);

  const handleDelete = (e) => {
    e.stopPropagation();
    if (window.confirm("¿Estás seguro de que quieres eliminar esta tarjeta?")) {
      onDelete(id);
    }
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    onEdit(id);
  };

  return (
    <article
      onClick={() => onEdit(id)}
      className="bg-gray-900 bg-opacity-70 text-white p-4 rounded-lg w-full max-w-sm mx-auto flex flex-col h-full backdrop-blur-sm transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg relative cursor-pointer"
    >
      <div className="absolute top-2 right-2 flex space-x-2">
        <button
          onClick={handleEdit}
          className="text-gray-300 hover:text-blue-500 transition-colors duration-200"
          aria-label="Editar tarjeta"
        >
          <Edit size={20} />
        </button>
        <button
          onClick={handleDelete}
          className="text-gray-300 hover:text-red-500 transition-colors duration-200"
          aria-label="Eliminar tarjeta"
        >
          <Trash2 size={20} />
        </button>
      </div>
      <header className="flex-grow">
        {image && (
          <figure className="relative mb-4">
            <div
              className="absolute inset-0 bg-black opacity-30 rounded-lg"
              aria-hidden="true"
            ></div>
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover rounded-lg"
            />
          </figure>
        )}
        <h2 className="text-xl font-semibold break-words">{title}</h2>
        <p className="text-gray-300 text-sm mt-1 break-words">{description}</p>
      </header>
      <footer className="mt-auto pt-4">
        <div className="flex flex-col space-y-4">
          <div>
            <h3 className="text-sm text-gray-300">Progreso</h3>
            <div
              className="mt-1 bg-gray-700 bg-opacity-50 rounded-full h-2"
              role="progressbar"
              aria-valuenow={safeProgress}
              aria-valuemin="0"
              aria-valuemax="10"
            >
              <div
                className="h-2 rounded-full"
                style={{
                  width: `${(safeProgress / 10) * 100}%`,
                  background:
                    "linear-gradient(90deg, #FF6B6B 0%, #FFD93D 100%)",
                }}
              ></div>
            </div>
            <p className="mt-1 text-sm text-right">{safeProgress}/10</p>
          </div>
          <div className="flex justify-start items-center">
            <time className="text-xs sm:text-sm bg-gray-800 bg-opacity-50 px-2 py-1 rounded-full inline-block">
              {date}
            </time>
          </div>
        </div>
      </footer>
    </article>
  );
}

export default Card;
