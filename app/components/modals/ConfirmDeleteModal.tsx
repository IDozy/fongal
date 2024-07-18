"use client";
import React from "react";

import { Button } from "@mui/joy";
import Modal from "./Modal";

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Confirmar Eliminación"
      actionLabel="Eliminar"
      onSubmit={onConfirm}
      secondaryActionLabel="Cancelar"
      secondaryAction={onClose}
      body={
        <div>
          <p>¿Estás seguro de que quieres eliminar este Concursante?</p>
        </div>
      }
    />
  );
};

export default ConfirmDeleteModal;
