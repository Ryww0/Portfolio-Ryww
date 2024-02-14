import React, { useState } from "react";
import Interview from "./partials/Interview";

function Contact() {
  const email = "laurent.chaitas@gmail.com";
  const [isCopied, setIsCopied] = useState(false);

  const copy = () => {
    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
      if (result.state === "granted" || result.state === "prompt") {
        navigator.clipboard.writeText(email).then(() => {
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 2000);
        });
      }
    });
  };
  return (
    <div className="section container" id="contact-section">
      <h2>Me contacter</h2>
      <p>Cliquer sur l'adresse mail pour la copier</p>
      <span id="info-copy">{isCopied && "copié dans le press papier !"}</span>
      <span onClick={copy}>{email}</span>
      <br />
      <p>Vous pouvez aussi programmer un entretien avec moi:</p>
      <Interview />
    </div>
  );
}

export default Contact;
