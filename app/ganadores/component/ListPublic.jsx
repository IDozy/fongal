"use client";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";

const ListPublic = ({ ganadoList, refreshData }) => {
  const [rowData, setRowData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const router = useRouter();

  const columns = [
    {field:"puesto", headerName:"Puesto"},
    { field: "name", headerName: "Nombre", width: 150 },
    { field: "propietario", headerName: "Propietario", width: 150 },
    { field: "nacimiento", headerName: "Nacimiento", width: 100 },
    { field: "categoria", headerName: "Categoria", width: 200 },
    { field: "diasNacida", headerName: "Dias Nacida", width: 100 },
    { field: "establo", headerName: "Establo", width: 100 },
    { field: "remate", headerName: "Remate", width: 70 },
    { field: "raza", headerName: "Raza", width: 100 },
    { field: "sexo", headerName: "Sexo", width: 100 },
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
      </div>
    </div>
  );
};

export default ListPublic;
