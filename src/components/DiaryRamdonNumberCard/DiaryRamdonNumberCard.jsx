import React from "react";
import "./styles.css";
const DiaryRamdonNumberCard = ({ ramdonNumber, date }) => {
  let daysOfweek = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  let createdAt = new Date(date);
  let thisday = new Date().getDate();

  return (
    <section>
      <div className="card">
        <h3 className="winner-text">
          El número ganador de{" "}
          {thisday === createdAt.getDate() ? "hoy es" : "ayer fue"}
        </h3>
        <h2 className="ramdon-number">{ramdonNumber}</h2>
        <p className="day-of-week">{daysOfweek[createdAt.getDay()]}</p>
        <p className="create-at">{createdAt.toLocaleDateString()}</p>
      </div>
    </section>
  );
};

export default DiaryRamdonNumberCard;
