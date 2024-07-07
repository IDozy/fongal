"use client";
import React from "react";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "../../hooks/useRegisterModal";
import useLoginModal from "../../hooks/useLoginModal";
import Modal from "./Modal";
import Heading from "../navbar/Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import Button from "../navbar/Button";
import { signIn } from "next-auth/react";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsloading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsloading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success('Hecho!')
        loginModal.onOpen();
        registerModal.onClose();
      })
      .catch((error) => {
        toast.error("algo salio mal");
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  
  const toggle = useCallback(() => {
    
    registerModal.onClose();
    loginModal.onOpen();
  }, [loginModal, registerModal]);



  const bodyContent = (
    <div
      className="
    flex
    flex-col
    gap-4"
    >
      <Heading
        title="Bienvenido a Guía Pateperro"
        subtitle="Crea una cuenta!"
        center
      />
      <Input
        id="email"
        label="Correo"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Nombre"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        type="password"
        label="Contraseña"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continuar con Google"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      />
      {/*<Button
        outline
        label="Continuar con Github"
        icon={AiFillGithub}
        onClick={() => {}}
  />*/}
      <div
        className="
      text-neutral-500
      text-center
      mt-4
      font-light
      "
      >
        <div
          className="
          justify-center
          flex flex-row items-center gap-2"
        >
          <div>Ya tienes cuenta?</div>
          <div
            onClick={toggle}
            className="
          text-neutral-800
          cursor-pointer
          hover:underline"
          >
            acceso
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Registrarse"
      actionLabel="Continuar"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
