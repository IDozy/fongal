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

const GanadoListTable = ({ ganadoList, refreshData }) => {
  const [rowData, setRowData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedGanado, setSelectedGanado] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const router = useRouter();

  const openEditModal = (ganado) => {
    setSelectedGanado(ganado);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedGanado(null);
  };

  const openDeleteModal = (ganado) => {
    setSelectedGanado(ganado);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedGanado(null);
  };

  const deleteGanado = async () => {
    try {
      await axios.delete("/api/ganado", { data: { id: selectedGanado.id } });
      toast.success("Ganado eliminado correctamente");
      refreshData();
      closeDeleteModal();
    } catch (error) {
      toast.error("Error al eliminar el Ganado");
    }
  };

  const [columns, setColumns] = useState([
    { field: "name", headerName: "Nombre", width: 150 },
    { field: "propietario", headerName: "Criador", width: 150 },
    { field: "nacimiento", headerName: "nacimiento", width: 100 },
    { field: "descripcion", headerName: "Expositor", width: 150 },
    { field: "categoria", headerName: "categoria", width: 200 },
    { field: "diasNacida", headerName: "diasNacida", width: 100 },
    { field: "establo", headerName: "establo", width: 100 },
    { field: "remate", headerName: "remate", width: 70 },
    { field: "raza", headerName: "raza", width: 100 },
    { field: "sexo", headerName: "N° Registro", width: 100 },
    { field: "Mérito", headerName: "Mérito", width: 100 },
    {
      field: "action",
      headerName: "Acción",
      width: 250,
      renderCell: (params) => (
        <div className="flex gap-2 pt-2">
          <Button size="sm" onClick={() => openEditModal(params.row)}>
            Editar
          </Button>
          <Button
            color="danger"
            size="sm"
            onClick={() => openDeleteModal(params.row)}
          >
            Eliminar
          </Button>
        </div>
      ),
    },
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
      {isEditModalOpen && selectedGanado && (
        <EditGanadoModal
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          ganado={selectedGanado}
          refreshData={refreshData}
        />
      )}
      {isDeleteModalOpen && selectedGanado && (
        <ConfirmDeleteModal
          isOpen={isDeleteModalOpen}
          onClose={closeDeleteModal}
          onConfirm={deleteGanado}
        />
      )}
    </div>
  );
};

export default GanadoListTable;
