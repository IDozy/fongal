"use client";

import { useState } from "react";
import useGanadoModal from "../../hooks/useGanadoModal";
import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import ImageUpload from "../inputs/ImageUpload";
import Input from "../inputs/Input";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface CreateStudentModalProps {
  refreshData: () => void;
}

const GanadoModal: React.FC<CreateStudentModalProps> = ({
  refreshData,
})  => {
  const router = useRouter();
  const createModal = useGanadoModal()
  const ganadoModal = useGanadoModal();
  
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      propietario: "",
      nacimiento: "",
      categoria: "",
      establo: "",
      remate: "no", // default to "No"
      descripcion: "",
      raza: "",
      sexo: "",
      imageSrc: "",
    },
  });

  const imageSrc = watch("imageSrc");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // Transform remate to boolean
    console.log(data.remate);
    const transformedData = {
      ...data,
      remate: data.remate === "si",
    };

    setIsLoading(true);
    axios
      .post("./api/ganado", transformedData)
      .then(() => {
        toast.success("Nuevo Ganado agregado");
        createModal.onClose(refreshData)
        router.refresh();
        reset();
       // ganadoModal.onClose();
      })
      .catch(() => {
        toast.error("Ha ocurrido un error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <Modal
      disabled={isLoading}
        isOpen={ganadoModal.isOpen}
        onClose={()=> createModal.onClose(refreshData)}
        onSubmit={handleSubmit(onSubmit)}
        actionLabel="Crear"
        title="Crear"
        body={
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <Input
                id="name"
                label="Nombre"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
              <Input
                id="propietario"
                label="Criador"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
            </div>
            <div className="flex gap-4">
              <Input
                id="nacimiento"
                label="Fecha de nacimiento"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
              <Input
                id="categoria"
                label="Categoría"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
            </div>
            <div className="flex gap-4">
              <Input
                id="establo"
                label="Establo"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
              <div className="flex flex-col">
                <label htmlFor="remate" className="text-sm font-medium">
                  Remate
                </label>
                <select
                  id="remate"
                  {...register("remate", { required: true })}
                  disabled={isLoading}
                  className="border p-2 rounded-md"
                >
                  <option value="no">No</option>
                  <option value="si">Sí</option>
                </select>
                {errors.remate && (
                  <span className="text-red-500 text-sm">Este campo es requerido</span>
                )}
              </div>
            </div>
            <div className="flex gap-4">
              <Input
                id="descripcion"
                label="Expositor"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
              <Input
                id="raza"
                label="Raza"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
            </div>
            <div className="flex gap-4">
            <Input
              id="sexo"
              label="N° Registro"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
            <Input
                id="puntaje"
                label="Puntaje"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
              </div>
            <ImageUpload
              value={imageSrc}
              onChange={(value) => setCustomValue("imageSrc", value)}
            />
          </div>
        }
      />
    </div>
  );
};

export default GanadoModal;
