import React from "react";
import { useRamdonNumber } from "../../hooks/useRamdonNumber";
import DiaryRamdonNumberCard from "../DiaryRamdonNumberCard/DiaryRamdonNumberCard";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import RamdonNumberList from "../RamdonNumberList/RamdonNumberList";
import "./styles.css"
const Main = () => {
  const data = useRamdonNumber();

  return (
    <main>
      <Header />
      {data.ramdonNumber.length > 0 ? (
        <>
          <DiaryRamdonNumberCard
            ramdonNumber={data.ramdonNumber[0]?.ramdonNumber}
            date={data.ramdonNumber[0]?.date}
          />
          <RamdonNumberList data={data.ramdonNumber} />
        </>
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default Main;
