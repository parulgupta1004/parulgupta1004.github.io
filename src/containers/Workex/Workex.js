import React from "react";
import "./Workex.css";
import "../projects/Projects.css";
import { Workex } from "../../portfolio";
import { Fade } from "react-reveal";

export default function WorkEx() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="workex">
      <div>
        <h1 className="skills-heading">{Workex.title}</h1>
        <p className="subTitle project-subtitle">{Workex.subtitle}</p>
        <div className="startup-projects-main">
          <div className="project-cards-div">
          <Fade left duration={1000}>
            <div className="certificate-card1">
              <div className="certificate-image-div">
                <img alt="Facebook" className="card-image1" src={require("../../assests/images/meta_logo.png")}></img>
              </div>
              <div className="certificate-detail-div">
                <h5 className="card-title1"><b>Meta</b></h5>
              </div>
            </div>
            </Fade>

            <Fade left duration={1000}>
            <div className="certificate-card1">
              <div className="certificate-image-div">
                <img alt="Arcesium" className="card-image1" src={require("../../assests/images/arcesium.png")}></img>
              </div>
              <div className="certificate-detail-div">
                <h5 className="card-title1"><b>Arcesium LLC</b></h5>
              </div>
            </div>
            </Fade>

            <Fade left duration={1000}>
            <div className="certificate-card1">
              <div className="certificate-image-div">
                <img alt="UHG" className="card-image1" src={require("../../assests/images/optum.png")}></img>
              </div>
              <div className="certificate-detail-div">
                <h5 className="card-title1"><b>United Health Group</b></h5>
              </div>
            </div>
            </Fade>

            <Fade left duration={1000}>
             <div className="certificate-card1">
               <div className="certificate-image-div">
                 <img alt="WQ" className="card-image1" src={require("../../assests/images/worldquant.png")}></img>
               </div>
               <div className="certificate-detail-div">
                 <h5 className="card-title1"><b>WorldQuant LLC</b></h5>
               </div>
             </div>
             </Fade>

             <Fade left duration={1000}>
             <div className="certificate-card1">
               <div className="certificate-image-div">
                 <img alt="WQ" className="card-image1" src={require("../../assests/images/brainpan.png")}></img>
               </div>
               <div className="certificate-detail-div">
                 <h5 className="card-title1"><b>Brainpan Innovations Pvt Ltd</b></h5>
               </div>
             </div>
             </Fade>
          </div>

        </div>
      </div>
    </div>
    </Fade>
  );
}
