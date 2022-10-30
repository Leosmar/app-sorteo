import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, orderBy } from "firebase/firestore";

export const useRamdonNumber = () => {
  const [ramdonNumber, setRamdonNumber] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const getRamdonNumber = async () => {
    try {
      const data = [];

      setIsloading(true);

      const querySnapshot = await getDocs(
        collection(db, "diary-ramdon-number"),
        orderBy("date", "asc")
      );

      querySnapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          ramdonNumber: doc.data()["ramdonNumber"],
          date: doc.data().date,
        });
      });
      data.sort((a, b) => b.date - a.date);
      setRamdonNumber(data);
    } catch (e) {
      setError("Ocurrio un error" + e);
      console.error("Error reading document: ", e);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    getRamdonNumber();
  }, []);

  return { isloading, error, ramdonNumber };
};
