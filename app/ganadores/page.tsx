"use client";
import React, { useEffect, useState } from "react";
import ListPublic from "./component/ListPublic";






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
    <div className="p-20 mt-12 pb-20 bg-[#f3fdff]">
      <h2 className="font-bold text-2xl flex justify-between items-center">
        Ganadores
      </h2>
      <ListPublic ganadoList={ganadoList} refreshData={GetAllStudents} />
    </div>
  );
};

export default Student;
