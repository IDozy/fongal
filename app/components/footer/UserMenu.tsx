"use client";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "../../hooks/useRegisterModal";
import useLoginModal from "../../hooks/useLoginModal";
import useGanadoModal from "../../hooks/useGanadoModal";

import { signOut } from "next-auth/react";
import { SafeUser } from "../../types";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}
const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const handleSignOut = () => {
    // Limpia el localStorage
    localStorage.clear();
    sessionStorage.clear();
    // Llama a la función de cierre de sesión
    signOut();
    localStorage.clear();
  };

  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const ganadoModal = useGanadoModal();

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onGanado = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    ganadoModal.onOpen();
  }, [currentUser, loginModal, ganadoModal]);

  return (
    <div className="relative">
      <div
        className="flex flex-row items-center gap-3">
        <div
          onClick={onGanado}
          className=" hidden md:block text-sm font-semibold transition">
          ‎ 
        </div>
        <div
          onClick={toggleOpen}
          className="
       
       
       
       
        flex
        flex-row
        items-center
        gap-3
        
       
        transition"
        >
        ‎ 
         
          <div className="hidden md:block">
           
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="absolute
        rounded-xl
        shadow-md
        w-[40vw]
        md:w-3/4
        bg-white
        overflow-hidden
        right-0 
        top-12
        text-sm"
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  onClick={() => router.push("/managment")}
                  label="Panel"
                />
                
                <hr />
                <MenuItem onClick={handleSignOut} label="Cerrar Sesión" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Login" />
                <MenuItem onClick={registerModal.onOpen} label="Sign up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
