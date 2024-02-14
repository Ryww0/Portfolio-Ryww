import HardSkill from "./partials/HardSkill";

import htmlLogo from "../assets/skills/html.png";
import cssLogo from "../assets/skills/css.png";
import sassLogo from "../assets/skills/sass.png";
import javascriptLogo from "../assets/skills/javascript.png";
import reactLogo from "../assets/skills/react.png";
import phpLogo from "../assets/skills/php.png";
import symfonyLogo from "../assets/skills/symfony.png";
import figmaLogo from "../assets/skills/figma.png";
import SoftSkill from "./partials/SoftSkill";

function Skills() {
  return (
    <>
      <div className="container" id="skill-section">
        <div className="section">
          <h2>mes compétences</h2>
          <div className="section-content">
            <div className="skill-list hard-skills">
              <HardSkill logo={htmlLogo} name={"html"} />
              <HardSkill logo={cssLogo} name={"css"} />
              <HardSkill logo={sassLogo} name={"sass"} />
              <HardSkill logo={javascriptLogo} name={"javascript"} />
              <HardSkill logo={reactLogo} name={"react"} />
              <HardSkill logo={phpLogo} name={"php"} />
              <HardSkill logo={symfonyLogo} name={"symfony"} />
              <HardSkill logo={figmaLogo} name={"figma"} />
            </div>
            <div className="skill-list soft-skills">
              <SoftSkill
                name={"Curiosité"}
                content={
                  "Mon envie de toujours apprendre m'a permis de découvrir des solutions techniques et technologiques me permettant d'exploiter ma curiosité"
                }
              />
              <SoftSkill
                name={"esprit d'équipe"}
                content={
                  "Au travers de mon parcours j'ai eu l'occasion de travailler souvent en équipe. Aujourd'hui je suis en mesure d'être à l'écoute et d'être force de proposition."
                }
              />
              <SoftSkill
                name={"Autonomie"}
                content={
                  "J'ai pour habitude de trouver les solutions à mes problèmes de manière autonome. Aucun problème ne pourrait me résister, je trouverais toujours une solution."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
