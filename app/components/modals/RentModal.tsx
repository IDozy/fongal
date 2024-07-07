"use client";

import { useMemo, useState } from "react";
import useRentModal from "../../hooks/useRentModal";
import Modal from "./Modal";
import Heading from "../navbar/Heading";

import CategoryInput from "../inputs/CategoryInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import dynamic from "next/dynamic";

import Counter from "../inputs/Counter";
import ImageUpload from "../inputs/ImageUpload";
import Input from "../inputs/Input";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { TbMountain } from "react-icons/tb";
import { GiForestCamp, GiShop } from "react-icons/gi";

enum STEPS {
  TYPE = 0,
  CATEGORY = 1,
  LOCATION = 2,
  INFO = 3,
  IMAGES = 4,
  DESCRIPTION = 5,
  PRICE = 6,
}
const RentModal = () => {
  const router = useRouter();
  const rentModal = useRentModal();
  const [step, setStep] = useState(STEPS.TYPE);
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
      category: "",
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: "",
      title: "",
      description: "",
      price: 1,
    },
  });

  const type = watch("type")
  const category = watch("category");
  const location = watch("location");
  const guestCount = watch("guestCount");
  const roomCount = watch("roomCount");
  const bathroomCount = watch("bathroomCount");
  const imageSrc = watch("imageSrc");

  


  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onBack = () => {
    setStep((value) => value - 1);
  };
  const onNext = () => {
    setStep((value) => value + 1);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.PRICE) {
      return onNext();
    }
    setIsLoading(true);
    axios
      .post("./api/listings", data)
      .then(() => {
        toast.success("Nuevo Negocio creado");
        router.refresh();
        reset();
        setStep(STEPS.CATEGORY);
        rentModal.onClose();
      })
      .catch(() => {
        toast.error("A ocurrido un error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return "Create";
    }
    return "Continuar";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.TYPE) {
      return undefined;
    }
    return "Back";
  }, [step]);

  let bodyContent = (
    <div
      className="
  flex flex-col gap-8"
    >
      <Heading
        title="¿Que quieres crear?"
        subtitle="Selecciona una categoria"
      />
      <div
        className="
      grid
      grid-cols-1
      md:grid-cols-3
      gap-3
      max-h-[50vh]
      overflow-y-auto"
      >
       <CategoryInput
          onClick={() => setCustomValue("type", "turistica")}
          selected={type === "turistica"}
          label="Lugar Turístico"
          icon={TbMountain}
        />
        <CategoryInput
          onClick={() => setCustomValue("type", "negocio")}
          selected={type === "negocio"}
          label="Negocio"
          icon={GiShop}
        />
        <CategoryInput
          onClick={() => setCustomValue("type", "evento")}
          selected={type === "evento"}
          label="Evento"
          icon={GiForestCamp}
        />
      </div>
    </div>
  );

  if (step === STEPS.CATEGORY) {
    bodyContent = (
      <div
        className="
    flex flex-col gap-8"
      >
        <Heading
          title="Como describes tu lugar"
          subtitle="Selecciona una categoria"
        />
        <div
          className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-3
        max-h-[50vh]
        overflow-y-auto"
        >
          
        </div>
      </div>
    );
  }

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div
        className="
      flex flex-col gap-8"
      >
        <Heading
          title="¿Donde te encontramos?"
          subtitle="Tu direccion nos ayuda a encontrarte"
        />

       
      </div>
    );
  }

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Agrega algo más"
          subtitle="Cuentas con ?"
        />
        <Counter
          title="Numero de mesas"
          subtitle="N°"
          value={guestCount}
          onChange={(value) => setCustomValue("guestCount", value)}
        />
        <hr />

        <Counter
          title="Cantidad total de personas"
          subtitle="N°"
          value={roomCount}
          onChange={(value) => setCustomValue("roomCount", value)}
        />
        <hr />
        <Counter
          title="Total de baños"
          subtitle="N°"
          value={bathroomCount}
          onChange={(value) => setCustomValue("bathroomCount", value)}
        />
      </div>
    );
  }
  if (step === STEPS.IMAGES) {
    bodyContent = (
      <div className=" flex flex-col gap-8">
        <Heading
          title="Agrega una foto"
          subtitle="show guests what your place looks like!"
        />
        <ImageUpload
          value={imageSrc}
          onChange={(value) => setCustomValue("imageSrc", value)}
        />
      </div>
    );
  }

  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Agrega un titulo y una descripcion"
          subtitle="describir tu lugar ayudara a conocerte mejor"
        />
        <Input
          id="title"
          label="Titulo"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <hr />
        <Input
          id="description"
          label="Descripción"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    );
  }

  if (step === STEPS.PRICE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Asigna un precio."
          subtitle="Asigna tu precio en soles"
        />
        <Input
          id="price"
          label="Precio"
          formatPrice
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    );
  }

  return (
    <div>
      <Modal
        isOpen={rentModal.isOpen}
        onClose={rentModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        actionLabel={actionLabel}
        secondaryActionLabel={secondaryActionLabel}
        secondaryAction={step === STEPS.TYPE ? undefined : onBack}
        title="Crear"
        body={bodyContent}
      />
    </div>
  );
};

export default RentModal;
