import React from "react";
import Project from "./partials/Project";

import tenschoolImage from "../assets/projects/tenschool.png";
import lobaImage from "../assets/projects/loba.png";
import hangmanImage from "../assets/projects/hangman.png";
import pokedexImage from "../assets/projects/pokedex.png";

function Projects() {
  return (
    <div className="section container" id="project-section">
      <h2>mes projets</h2>
      <div className="project-list">
        <Project
          image={lobaImage}
          title={"Loba"}
          date={"2023"}
          description={
            "Site web pour une ONG, j'ai concu la partie back-end du site et j'ai développer le système de traduction. Le contenu du site est entièrement modifiable par les administrateurs."
          }
          technos={["symfony", "twig"]}
          link={"https://www.lobainternational.org/home/en"}
        />

        <Project
          image={tenschoolImage}
          title={"TenSchool"}
          date={"2023"}
          description={
            "Projet de validation d'un titre professionnel DWWM. Platerforme de cours en ligne permettant aux enseignant de poster des cours et des évaluations et aux élèves de les consulter."
          }
          technos={["symfony", "react", "scss"]}
          link={"/dossier_projet_DWWM.pdf"}
        />

        <Project
          image={hangmanImage}
          title={"Hangman Game"}
          date={"2023"}
          description={
            "Le jeu du pendu. J'ai concu ce site pour m'améliorer en javascript. Coder from scratch, il permet de jouer au jeu du pendu. Ne perdez pas de temps et essayez le !"
          }
          technos={["html", "css", "javascript"]}
          link={"https://ryww0.github.io/le-jeu-du-pendu/"}
        />

        <Project
          image={pokedexImage}
          title={"Pokédex"}
          date={"2022"}
          description={
            "Pokédex intéractif qui permet de trouver les pokémon grâce à une API. Retournez en enfance et essayez le !"
          }
          technos={["html", "css", "javascript"]}
          link={"https://ryww0.github.io/Pokedex/"}
        />
      </div>
    </div>
  );
}

export default Projects;
