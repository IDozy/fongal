/*"use client";

import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";

const ListPublic = ({ ganadoList, refreshData }) => {
  const [rowData, setRowData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const router = useRouter();

  const columns = [
    { field: "puesto", headerName: "Puesto" },
    { field: "sexo", headerName: "N° Registro", width: 100 },
    { field: "name", headerName: "Nombre", width: 150 },
    { field: "propietario", headerName: "Criador", width: 150 },
    { field: "descripcion", headerName: "Expositor", with: 150 },
    { field: "nacimiento", headerName: "Nacimiento", width: 100 },
    { field: "categoria", headerName: "Categoria", width: 200 },
    { field: "diasNacida", headerName: "Dias Nacida", width: 100 },
    { field: "establo", headerName: "Establo", width: 100 },
    { field: "remate", headerName: "Remate", width: 70 },
    { field: "raza", headerName: "Raza", width: 100 },

    { field: "puntaje", headerName: "Puntaje", width: 100 },
  ];

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
        {rowData.length > 0 ? (
          <DataGrid
            style={{ background: "#fff" }}
            rows={rowData}
            columns={columns}
            pagination={false} // Desactivar paginación
            disableColumnFilter // Desactivar filtro de columna
            disableColumnMenu // Desactivar menú de columna
            disableColumnSelector // Desactivar selector de columna
            disableDensitySelector // Desactivar selector de densidad
            hideFooterPagination // Ocultar paginación en el pie
            disableSelectionOnClick // Desactivar selección al hacer clic
            disableColumnReorder // Desactivar reordenamiento de columnas
            sx={{
              "& .MuiDataGrid-cell": {
                borderRight: "1px solid rgba(224, 224, 224, 1)",
              },
              "& .MuiDataGrid-columnHeaders": {
                borderBottom: "1px solid rgba(224, 224, 224, 1)",
              },
            }}
          />
        ) : (
          <div className="text-center text-gray-500">
            Aún no existen registros
          </div>
        )}
      </div>
    </div>
  );
};

export default ListPublic;

*/

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
    { field: "puntaje", headerName: "Puntaje", width: 80 },
    { field: "raza", headerName: "Raza", width: 150 },
    { field: "propietario", headerName: "Criador", width: 150 },
    { field: "sexo", headerName: "N° Registro", width: 100 },
    { field: "descripcion", headerName: "Expositor", width: 150 },
    { field: "nacimiento", headerName: "Nacimiento", width: 100 },
    { field: "diasNacida", headerName: "Dias De Nacida", width: 150 },
    { field: "remate", headerName: "Remate", width: 70 },
   
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
            "& .MuiDataGrid-cell": {
              borderRight: "1px solid rgba(224, 224, 224, 1)",
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: "1px solid rgba(224, 224, 224, 1)",
            },
          }}
        />
      </div>
    </div>
  );
};

export default ListPublic;
