import React from "react";
import { useRamdonNumber } from "../hooks/useRamdonNumber";
import { DiaryRamdonNumberCard } from "./DiaryRamdonNumberCard";

const View = () => {
  const data = useRamdonNumber();

  console.log(data.ramdonNumber[0]?.ramdonNumber);

  return (
    <main>
      {data.ramdonNumber.length > 0 ? (
        <DiaryRamdonNumberCard
          ramdonNumber={data.ramdonNumber[0]?.ramdonNumber}
          date={data.ramdonNumber[0]?.date}
        />
      ) : (
        "Cargando numero"
      )}
      {/* <div>
        {data.ramdonNumber.length > 0 ? (
          data.ramdonNumber.map((number) => {
            let date = new Date(number.date);
            return (
              <div key={number.id}>
                <p>{number.ramdonNumber}</p>
                <p>{`${date}`}</p>
              </div>
            );
          })
        ) : (
          <h3>Cargando...</h3>
        )}
      </div> */}
    </main>
  );
};

export default View;
