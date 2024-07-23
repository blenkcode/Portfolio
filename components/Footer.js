import styles from "../styles/foot.module.css";
import React, { useState, useEffect } from "react";

function Footer() {
  return (
    <div className={styles.container}>
      <div style={{ marginBottom: "20px" }}>
        <a
          href="mailto:youremail@example.com"
          style={{ color: "#fff", marginRight: "15px" }}
        >
          Email
        </a>
        <a
          href="tel:+1234567890"
          style={{ color: "#fff", marginRight: "15px" }}
        >
          Téléphone
        </a>
        <a
          href="https://www.linkedin.com/in/yourprofile"
          style={{ color: "#fff", marginRight: "15px" }}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/yourprofile"
          style={{ color: "#fff", marginRight: "15px" }}
        >
          GitHub
        </a>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <a href="#home" style={{ color: "#fff", marginRight: "15px" }}>
          Accueil
        </a>
        <a href="#projects" style={{ color: "#fff", marginRight: "15px" }}>
          Projets
        </a>
        <a href="#skills" style={{ color: "#fff", marginRight: "15px" }}>
          Compétences
        </a>
        <a href="#about" style={{ color: "#fff", marginRight: "15px" }}>
          À propos de moi
        </a>
        <a href="#contact" style={{ color: "#fff", marginRight: "15px" }}>
          Contact
        </a>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <a
          href="/privacy-policy"
          style={{ color: "#fff", marginRight: "15px" }}
        >
          Politique de confidentialité
        </a>
        <a href="/terms-of-use" style={{ color: "#fff", marginRight: "15px" }}>
          Conditions d'utilisation
        </a>
        <span style={{ color: "#fff" }}>© 2024 Votre Nom</span>
      </div>
      <div>
        <span>
          "Code is like humor. When you have to explain it, it’s bad." - Cory
          House
        </span>
      </div>
    </div>
  );
}

export default Footer;
