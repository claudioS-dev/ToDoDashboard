import React from "react";
import Card from "../Components/Card";
import Calendar from "../Components/Calendar";

const Home = () => {
  // Simulando datos de tarjetas que podrían venir de una API o estado
  const cards = [
    { title: "Tarjeta 1", progress: 5 },
    { title: "Tarjeta 2", progress: 1 },
    { title: "Tarjeta 3", progress: 4 },
    { title: "Tarjeta 4", progress: 2 },
    { title: "Tarjeta 5", progress: 3 },
    { title: "Tarjeta 6", progress: 1 },
    { title: "Tarjeta 7", progress: 3 },
    { title: "Tarjeta 8", progress: 3 },
    { title: "Tarjeta 9", progress: 3 },
    { title: "Tarjeta 10", progress: 3 },
    { title: "Tarjeta 11", progress: 3 },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div className="row-span-2 sm:col-span-2 lg:col-span-1">
          <Calendar />
        </div>
        {cards.map((card, index) => (
          <Card key={index} title={card.title} progress={card.progress} />
        ))}
      </div>
    </div>
  );
};

export default Home;
