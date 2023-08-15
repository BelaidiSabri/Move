import React from "react";
import GreenCircle from "../../../assets/GreenCircle.svg";
import CenterImageDesktop from "../../../assets/desktop/CentreImage.svg";
import CenterImageMobile from "../../../assets/mobile/CenterImage.svg";
import logoWide from "../../../assets/desktop/LogoWide.svg";
import "./SectionOne.css";

import Box from "../../../assets/box.png";

const SectionOne = () => {
  return (
    <div>
      <div className="circles">
        <img className="C1" src={GreenCircle} alt="" />
        <img className="C2" src={GreenCircle} alt="" />
        <img className="C3" src={GreenCircle} alt="" />
        <img className="C4" src={GreenCircle} alt="" />
        <img className="C5" src={GreenCircle} alt="" />
        <img className="C6" src={GreenCircle} alt="" />
      </div>
      <div className="boxes">
        <img className="B1" src={Box} alt="" />
        <img className="B2" src={Box} alt="" />
        <img className="B3" src={Box} alt="" />
      </div>
      <article className="main">
        <div className="desktop">
          <div>
            <h1>
              MOVE OUT <br /> ASAP ! <br /> IT IS NOT A <br /> PROBLEM :)
            </h1>
          </div>
          <div className="section_right">
            <img className="logoWide" src={logoWide} alt="" />
            <img
              className="CenterImageDesktop"
              src={CenterImageDesktop}
              alt=""
            />
          </div>
        </div>
        <div className="mobile">
          <img className="CenterImageMobile" src={CenterImageMobile} alt="" />
          <div className="text">
            <h1 className="title">
              YOU NEED TO MOVE OUT
              <br /> FROM YOUR CRIB
            </h1>
            <p className="paragraph">
              ty hasylo el chi besh ifodhehelkom mesh normal <br />
              faaaaaaaafafafafafafafafafafaf
            </p>
          </div>
          <button className="button">DOWNLOAD APP</button>
        </div>
      </article>
    </div>
  );
};

export default SectionOne;
