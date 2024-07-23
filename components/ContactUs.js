import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/ContactUs.module.css";
import Button from "./Button"; // Assurez-vous du chemin correct vers votre composant Button

export const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const text = "Merci pour votre intérêt! 🙏";

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_n86uem2",
        "template_suqi9iv",
        templateParams,
        "t7LDK8Dgu2YzQXdAh"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          // Clear form fields if needed
          setName("");
          setEmail("");
          setMessage("");
          setSuccess(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form className={styles.form} onSubmit={sendEmail}>
      {success && <p className={styles.success}>{text}</p>}
      <div className={styles.titre}>Contact</div>
      <div className={styles.inputContainer}>
        <div>
          {" "}
          <input
            className={styles.input}
            type="text"
            name="from_name"
            placeholder="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          {" "}
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            name="from_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.messageContainer}>
        {" "}
        <textarea
          placeholder="Message"
          className={styles.textarea}
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <Button onClick={sendEmail} />
    </form>
  );
};
