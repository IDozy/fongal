"use client";

import React, { useEffect } from "react";
import Modal from "./Modal"; // Asegúrate de que este sea tu componente modal
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Input from "../inputs/Input";
import Button from "../Button";
import axios from "axios";
import toast from "react-hot-toast";

interface EditGanadoModalProps {
  isOpen: boolean;
  onClose: () => void;
  ganado: any;
  refreshData: () => void;
}

const EditGanadoModal: React.FC<EditGanadoModalProps> = ({
  isOpen,
  onClose,
  ganado,
  refreshData,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: ganado,
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const remateBoolean = data.remate === "si";

      const response = await axios.put(`/api/ganado`, {
        id: ganado.id,
        ...data,
        remate: remateBoolean,
      });
      toast.success("Ganado actualizado correctamente");
      onClose();
      refreshData();
    } catch (error) {
      toast.error("Error al actualizar el Ganado");
    }
  };

  useEffect(() => {
    reset(ganado);
  }, [ganado, reset]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <Input
          id="name"
          label="Nombre"
          register={register}
          errors={errors}
          required
        />
        <Input
          id="propietario"
          label="Criador"
          register={register}
          errors={errors}
          required
        />
      </div>
      <div className="flex flex-row gap-4">
        <Input
          id="nacimiento"
          label="Fecha Nacimiento"
          register={register}
          errors={errors}
          required
        />
        <Input
          id="categoria"
          label="Categoria"
          register={register}
          errors={errors}
          required
        />
      </div>
      <div className="flex flex-row gap-4">
        <Input
          id="diasNacida"
          label="Dias Nacido"
          register={register}
          errors={errors}
          required
        />
        <Input
          id="establo"
          label="Establo"
          register={register}
          errors={errors}
          required
        />
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col">
          <label htmlFor="remate" className="text-sm font-medium">
            Remate
          </label>
          <select
            id="remate"
            {...register("remate", { required: true })}
            className="border p-2 rounded-md"
          >
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
          {errors.remate && (
            <span className="text-red-500 text-sm">
              Este campo es requerido
            </span>
          )}
        </div>
        <Input
          id="raza"
          label="Raza"
          register={register}
          errors={errors}
          required
        />
      </div>
      <div className="flex flex-row gap-4">
        <Input
          id="sexo"
          label="N° Registro"
          register={register}
          errors={errors}
          required
        />
        <Input
          id="puntaje"
          label="Puntaje"
          register={register}
          errors={errors}
          required
        />
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Editar Concursante"
      actionLabel="Guardar Cambios"
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default EditGanadoModal;
