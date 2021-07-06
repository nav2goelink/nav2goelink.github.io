import { useState } from "react";
import React from "react";
import "../../Style.css";
import Logo from "../Logo/Logo.js";
import ButtonUmfrage from "../Button/ButtonUmfrage.js";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "../UI/Seiten.module.css";

const Ende = () => {

  // Button Click Handler einfügen

  
  return (
    <Card className={classes.input}>
      <form>
        <header className="Startseite-header">
          <Logo></Logo> {/*Einbindung des Logos Nav2Gö*/}
          <p> Danke für die Teilnahme! </p>
          <p> Klicke jetzt bitte auf den Button, um zur Umfrage zu gelangen </p>
        </header>
        <ButtonUmfrage />
      </form>
    </Card>
  );
};

export default Ende;
