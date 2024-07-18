"use client"; // Esto no es necesario en Next.js. Puedes eliminar esta línea.
import React, { useState, useEffect } from "react";
import Link from "next/link"; // Importa Link de next/link
import styles from './navbar/Navbar.module.css'; // Ajusta la ruta según tu estructura de archivos
import UserMenu from "../footer/UserMenu";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const [isNavActive, setNavActive] = useState(false);

  const closeNav = () => {
    setNavActive(false);
  };

  const navGanadores = () =>{
    setNavActive(false);
   router.push("/ganadores")
  }

  const toggleNav = () => {
    setNavActive(!isNavActive);
  };

  return (
    <div className={`${styles.PublicHeader} ${visible ? '' : styles.hidden}`}>
      <figure className={styles.PublicHeader_logo}>
      <img className={styles.logoImage} src="/images/FONGAL.png" alt="FONGAL 2024" />

        <svg fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* SVG content here */}
        </svg>
      </figure>
      <nav className={`${styles.navBar} ${isNavActive ? styles.active : ''}`}>
        <ul className={styles.menuItems}>
          <li>
            <Link href="/ganadores" onClick={navGanadores}>
              Explorar
            </Link>
          </li>
          <li>
            <Link href="/nosotros" onClick={closeNav}>
              Nosotros
            </Link>
          </li>
          <li>
            <Link href="/comunidad" onClick={closeNav}>
              Comunidad
            </Link>
          </li>
          <li>
            <Link href="/informes" onClick={closeNav}>
              Informes
            </Link>
          </li>
        
        </ul>
      </nav>
      <div className={`${styles.hamburger} ${isNavActive ? styles.toggle : ''}`} onClick={toggleNav}>
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>
    </div>
  );
};

export default NavBar;
