import React from "react";
import imageOne from "../../../assets/ImageOne.svg";
import imageTwo from "../../../assets/ImageTwo.svg";
import imageThree from "../../../assets/ImageThree.svg";
import imageFour from "../../../assets/ImageFour.svg";
import "./SectionThree.css";

const SectionThree = () => {
  return (
    <div className="SectionThree">
      <p className="title">Une démarche claire pour un déménagement serein</p>
      <div className="container">
        <div>
          <div className="SubSection">
            <p className="imageNumber">1</p>
            <img className="image" src={imageOne} alt="" />
          </div>
          <p className="imageText">
            Contactez smoothmove et recevez une offre adaptée à votre besoin.
          </p>
        </div>
        <div>
          <div className="SubSection">
            <p className="imageNumber">2</p>
            <img className="image" src={imageTwo} alt="" />
          </div>
          <p className="imageText">
            Choisissez votre formule et estimez le volume de vos meubles.
          </p>
          <p className="imageSubText">
            Accompagné par un commercial demeco dédié ou guidé par notre
            plateforme de réservation, vous trouverez à coup sûr l'offre qui
            vous correspond.
          </p>
        </div>
        <div>
          <div className="SubSection">
            <p className="imageNumber">3</p>
            <img className="image" src={imageThree} alt="" />
          </div>
          <p className="imageText">
          Déménagez en toute tranquillité à la date de votre choix.
          </p>
          <p className="imageSubText">
          Les équipes demeco vous accompagnent tout au long de votre projet, avant, pendant et après la date de déménagement.
          </p>
        </div>
        <div>
          <div className="SubSection">
            <p className="imageNumber">4</p>
            <img className="image" src={imageFour} alt="" />
          </div>
          <p className="imageText">
            Contactez smoothmove et recevez une offre adaptée à votre besoin.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
