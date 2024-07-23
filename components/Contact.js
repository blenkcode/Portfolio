import styles from "../styles/Contact.module.css";
import React, { useState, useEffect } from "react";
import { ContactUs } from "./ContactUs";

function Contact() {
  return (
    <div className={styles.main}>
      <div className={styles.titlework}></div>
      <div className={styles.content}>
        <ContactUs></ContactUs>
      </div>
      <div className={styles.infos}>
        Vous pouvez prendre contact directement ici via ce formulaire ou je
        serai également très heureux de communiquer avec vous par téléphone au{" "}
        <b className={styles.important}>0631817232</b>
        <br></br>
        <br></br>
        et par mail à l'adresse suivante :{" "}
        <b className={styles.important}>valentinmor.pro@gmail.com</b>
        <br></br>
        <br></br> Merci de votre visite et à bientôt!
      </div>
    </div>
  );
}

export default Contact;
