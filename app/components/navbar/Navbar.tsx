"use client"; // Esto no es necesario en Next.js. Puedes eliminar esta línea.
import React, { useState, useEffect } from "react";
import Link from "next/link"; // Importa Link de next/link
import styles from '../Navbar/Navbar.module.css'; // Ajusta la ruta según tu estructura de archivos

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

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

  const toggleNav = () => {
    setNavActive(!isNavActive);
  };

  return (
    <div>
      <div className={styles.PublicHeader}>
        <figure className={styles.PublicHeader_logo}>
          <svg fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* SVG content here */}
          </svg>
        </figure>
        <nav className={`${styles.navBar} ${isNavActive ? styles.active : ''}`}>
          <ul className={styles.menuItems}>
            <li>
              <Link href="/cursos" onClick={closeNav}>
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

        <div className={`${isNavActive ? styles.toggle : styles.hamburger}`} onClick={toggleNav}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
