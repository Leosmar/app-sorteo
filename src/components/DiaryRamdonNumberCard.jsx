import React from "react";

export const DiaryRamdonNumberCard = ({ ramdonNumber, date }) => {
  let createdAt = new Date(date - 3600000);

  let dayOfweek = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  createdAt.toLocaleDateString();

  return (
    <section>
      <div>
        <h2>{ramdonNumber}</h2>
        <p>{`${dayOfweek[createdAt.getDay()]} `}</p>
        <p>{`${createdAt.toLocaleDateString()} `}</p>
      </div>
    </section>
  );
};
