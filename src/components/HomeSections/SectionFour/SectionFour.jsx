import React from "react";
import "./SectionFour.css";
import truck from "../../../assets/Truck.svg";
import démenageur from "../../../assets/Demenageur.svg";
import camion from "../../../assets/camion.svg";

const SectionFour = () => {
  return (
    <div className="SectionFour">
      <div className="SubSectionOne">
        <div className="MainCard">
          <h4>Vous étes un employée?</h4>
          <div className="SubCard">
            <div className="Card">
              <div className="SubCardTitle">
                <img src={démenageur} alt="" />
                <p>Vous étes un démenageur ?</p>
              </div>
              <div className="WireFrame"></div>
              <div className="WireFrame"></div>
              <div className="WireFrame"></div>
            </div>
            <div className="Card">
              <div className="SubCardTitle">
                <img src={camion} alt="" />
                <p>Vous avez un camion?</p>
              </div>
              <div className="WireFrame"></div>
              <div className="WireFrame"></div>
              <div className="WireFrame"></div>
            </div>
          </div>
        </div>
        <div className="LogoCard">
          <img className="truck" src={truck} alt="" />
          <h1>SMOOTHMOVE</h1>
          <h3>BOUGEZ SANS STRESS</h3>
        </div>
      </div>

      <div className="SubSectionTwo">
        <h3>L'avantage du Commissionnaire de Transport</h3>
        <h1>Pourquoi choisir <span>SMOOTHMOVE</span> pour votre déménagement ?</h1>
        <p>
        <span>SMOOTHMOVE</span> est bien plus qu’un simple comparateur en ligne et se
          démarque de ses concurrents en valorisant son expertise et son
          expérience est étant un commissionnaire de transport. Cela change quoi
          pour vous ? Tout simplement que les équipes SMOOTHMOVE viennent du
          monde du déménagement et sont en mesure d’orchestrer votre
          déménagement sur-mesure et de vous accompagner sur toutes les étapes
          liées à votre déménagement. Le déménagement n’a pas de secret pour
          nous. Nous saurons donc vous proposer des partenaires fiables et
          expérimentés pour faire de votre déménagement une expérience agréable.
        </p>
      </div>
    </div>
  );
};

export default SectionFour;
