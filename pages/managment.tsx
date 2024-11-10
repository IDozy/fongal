"use client";
import React, { useEffect, useState } from "react";


import AddNewGanado from "../app/managment/_components/AddNewGanado";
import GanadoListTable from "../app/managment/_components/GanadoListTable";

const Student = () => {
  const [ganadoList, setStudentList] = useState([]);

  useEffect(() => {
    GetAllStudents();
  }, []);

  const GetAllStudents = () => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("/api/ganado   ", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Error fetching ganado");
        }

        const data = await response.json();
        setStudentList(data)
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchStudents();
  };
  return (
    <div className="p-10 mt-12 pb-20 bg-[#f3fdff]">
      <h2 className="font-bold text-2xl flex justify-between items-center">
        Ganado
        <AddNewGanado refreshData={GetAllStudents}  />
      </h2>
      <GanadoListTable ganadoList={ganadoList} refreshData={GetAllStudents} />
    </div>
  );
};

export default Student;
