/*

"use client";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/joy";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import ConfirmDeleteModal from "@/app/components/modals/ConfirmDeleteModal";

import { FaEye } from "react-icons/fa";
import EditGanadoModal from "@/app/components/modals/EditGanadoModal";

const ListPublic = ({ ganadoList, refreshData }) => {
  const [rowData, setRowData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedGanado, setSelectedGanado] = useState(null);

  const router = useRouter();

  const [columns, setColumns] = useState([
    { field: "categoria", headerName: "Categoria", width: 250 },
    { field: "establo", headerName: "Establo", width: 250 },
    { field: "name", headerName: "Nombre", width: 300 },
    { field: "puntaje", headerName: "Mérito", width: 80 },
    { field: "raza", headerName: "Raza", width: 150 },
    { field: "propietario", headerName: "Criador", width: 150 },
    { field: "sexo", headerName: "N° Registro", width: 100 },
    /* { field: "descripcion", headerName: "Expositor", width: 150 },
    { field: "nacimiento", headerName: "Nacimiento", width: 100 },
    { field: "diasNacida", headerName: "Dias De Nacida", width: 150 },
    { field: "remate", headerName: "Remate", width: 70 },*/ /*
  ]);

  useEffect(() => {
    ganadoList && setRowData(ganadoList);
  }, [ganadoList]);

  const handleSearch = (searchValue) => {
    setSearchInput(searchValue);
    const filteredData = ganadoList.filter((ganado) =>
      Object.values(ganado)
        .join(" ")
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    );
    setRowData(filteredData);
  };

  return (
    <div className="my-7">
      <div style={{ height: "65vh", width: "100%" }}>
        <div className="p-2 rounded-lg border shadow-sm flex gap-2 mb-4 max-w-sm bg-white">
          <input
            type="text"
            placeholder="Buscar..."
            className="outline-none w-full"
            onChange={(event) => handleSearch(event.target.value)}
          />
        </div>
        <DataGrid
          style={{ background: "#fff" }}
          rows={rowData}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[20, 25, 50, 100]}
          pagination
          sx={{
            // Eliminar bordes entre columnas y filas
            "& .MuiDataGrid-cell, & .MuiDataGrid-row": {
              borderRight: "none",
              borderBottomColor: "#ddd",
              borderBottomWidth: ".7px",
            },

            // Eliminar el borde externo del DataGrid
            "&.MuiDataGrid-root": {
              border: "none",
            },
            // Eliminar borde inferior de los encabezados
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: "none",
            },
            // Eliminar bordes específicos aplicados por 'withBorderColor'
            "& .MuiDataGrid-withBorderColor": {
              border: "none",
            },
           
          }}
        />
      </div>
    </div>
  );
};

export default ListPublic;
*/

"use client";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import { useRouter } from "next/navigation";

// Componente personalizado de paginación centrada
const CustomPagination = ({ page, pageSize, rowCount, onPageChange }) => {
  const handleChange = (event, value) => {
    onPageChange(value - 1); // DataGrid usa indexación desde 0
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
      <Pagination
        count={Math.ceil(rowCount / pageSize)}
        page={page + 1}
        onChange={handleChange}
        color="primary"
      />
    </div>
  );
};

const ListPublic = ({ ganadoList, refreshData }) => {
  const [rowData, setRowData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  const columns = [
    { field: "categoria", headerName: "Categoria", width: 250 },
    { field: "establo", headerName: "Establo", width: 250 },
    { field: "name", headerName: "Nombre", width: 300 },
    { field: "puntaje", headerName: "Mérito", width: 80 },
    { field: "raza", headerName: "Raza", width: 150 },
    { field: "propietario", headerName: "Criador", width: 150 },
    { field: "sexo", headerName: "N° Registro", width: 100 },
  ];

  useEffect(() => {
    ganadoList && setRowData(ganadoList);
  }, [ganadoList]);

  
  const handleSearch = (searchValue) => {
    setSearchInput(searchValue);
    const filteredData = ganadoList.filter((ganado) =>
      Object.values(ganado)
        .join("")
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    );
    setRowData(filteredData);
  };


  return (
    <div className="my-7">
      <div style={{ height: "65vh", width: "100%" }}>
        <div className="p-2 rounded-lg border shadow-sm flex gap-2 mb-4 max-w-sm bg-white">
          <input
            type="text"
            placeholder="Buscar..."
            className="outline-none w-full"
            onChange={(event) => handleSearch(event.target.value)}
          />
        </div>
        <DataGrid
          style={{ background: "#fff" }}
          rows={rowData}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[20, 25, 50, 100]}
          pagination
          disableSelectionOnClick
          components={{
            Pagination: CustomPagination, 
          }}
          sx={{
            "& .MuiDataGrid-cell, & .MuiDataGrid-row": {
              borderRight: "none",
              borderBottomColor: "#ddd",
              borderBottomWidth: ".7px",
            },
            "&.MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: "none",
            },
           
            "& .MuiDataGrid-footerContainer": {
              justifyContent: "center", 
            },

            "& .css-1b9e9gy": {
              height: "0",
            },
          }}
        />
      </div>
    </div>
  );
};

export default ListPublic;
