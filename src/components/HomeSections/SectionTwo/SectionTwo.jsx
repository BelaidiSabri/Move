import React from "react";
import renseignez from "../../../assets/Renseignez.svg";
import investez from "../../../assets/Investez.svg";
import reservez from "../../../assets/reservez.svg";
import "./SectionTwo.css";

const SectionTwo = () => {
  return (
    <div className="SectionTwo">
      <div className="left-section">
        <div className="titles">
          <h2>Comment ça marche ?</h2>
          <h3>Rien de plus simple !</h3>
        </div>
        <div className="images">
          <div className="image">
            <img src={renseignez} alt="" />
            <p>Renseignez</p>
          </div>
          <div className="image">
            <img src={investez} alt="" />
            <p>Investez</p>
          </div>
          <div className="image imposter">
            <img src={reservez} alt="" />
            <p>Reservez</p>
          </div>
        </div>
      </div>
      <div className="right-section">
        <h5>
          <span>MOVEOUT</span> vous accompagne dans toutes les étapes de l’organisation de
          votre déménagement
        </h5>
        <h6>Simple, fluide, presque ludique !</h6>
        <p>
          <span>MOVEOUT</span> vous accompagne dans toutes les étapes de l’organisation de
          votre déménagement. En quelques clics, avec le meilleur de la
          technologique et l’engagement des équipes pour trouver la solution
          adaptée à votre situation. Emoovz, plateforme officielle du ministère
          des armées depuis 2023, vous aide à trouver la solution la plus
          adaptée pour votre déménagement. Trouvez un déménageur professionnel
          et obtenez les meilleurs tarifs pour votre déménagement ! Grâce à
          Emoovz, vous avez la certitude de trouver des devis de déménagement au
          tarif les plus compétitifs, et de déménager en toute sérénité. Emoovz
          vous invite à profiter d'un service professionnel de déménagement.
        </p>
      </div>
    </div>
  );
};

export default SectionTwo;
