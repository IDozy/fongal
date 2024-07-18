
"use client";

import Button from "@/app/components/Button";

import GanadoModal from "@/app/components/modals/GanadoModal";

import useGanadoModal from "@/app/hooks/useGanadoModal";
import React, { useCallback, useState } from "react";
import { FcGoogle } from "react-icons/fc";


interface AddNewGanadoProps {
  refreshData: () => void;
}

const AddNewGanado: React.FC<AddNewGanadoProps> = ({ refreshData }) => {
  const { isOpen, onOpen, onClose } = useGanadoModal();

  const handleButtonClick = useCallback(() => {
    onOpen();
  }, [onOpen]);

  return (
    <div className="flex flex-row items-center gap-4 w-[15%]">
      <Button
        label=" Agregar Concursante "
        medium
        onClick={handleButtonClick}
      />
      {isOpen && <GanadoModal refreshData={refreshData} />}
    </div>
  );
};

export default AddNewGanado;
