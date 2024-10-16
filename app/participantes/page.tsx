"use client";
import React, { useEffect, useState } from "react";

import ListPublic from "./component/ListPublic";
import Sidebar from "../components/sidebar/Sidebar";

const Student = () => {
  const [ganadoList, setStudentList] = useState([]);

  useEffect(() => {
    GetAllGanado();
  }, []);

  const GetAllGanado = () => {
    const fetchGanado = async () => {
      try {
        const response = await fetch("/api/ganado/participantes", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Error fetching ganado");
        }

        const data = await response.json();
        setStudentList(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchGanado();
  };
  return (
    <div className="flex">
      <Sidebar/>
      <div className="p-10 mt-12 pb-20 bg-[#f3fdff] w-[85%]">
        <h2 className="font-bold text-2xl flex justify-between items-center">
          Ganadores
        </h2>
        <ListPublic ganadoList={ganadoList} refreshData={GetAllGanado} />
      </div>
    </div>
  );
};

export default Student;
