import React from "react";
import "./styles.css";
const DiaryRamdonNumberCard = ({ ramdonNumber, date }) => {
  let daysOfweek = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  let createdAt = new Date(date - 3600000);

  return (
    <section>
      <div className="card">
        <h2 className="ramdon-number">{ramdonNumber}</h2>
        <p className="day-of-week">{daysOfweek[createdAt.getDay()]}</p>
        <p className="create-at" >{createdAt.toLocaleDateString()}</p>
      </div>
    </section>
  );
};

export default DiaryRamdonNumberCard;
