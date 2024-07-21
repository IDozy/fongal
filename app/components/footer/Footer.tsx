"use client"
import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";
interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Footer: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <a
          href="https://www.facebook.com/profile.php?id=100094125785842"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/fongalcajamarca_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        {/* <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </a> */}
        <UserMenu currentUser={currentUser} />
      </div>
      <div className={styles.copyright}>&copy; 2024 Quipu</div>
    </footer>
  );
};

export default Footer;
