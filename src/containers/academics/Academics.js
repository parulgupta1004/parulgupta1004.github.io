import React from "react";
import "./Academics.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { acadSection } from "../../portfolio";
import {Fade} from "react-reveal";

export default function Academics() {
  return (
    <div className="main" id="academics">
      <div className="heading acad-main-div">
        
        <Fade left duration={1000}>
        <div className="acad-text-div">
          <h1 className="acad-heading">{acadSection.title} </h1>
          <p className="subTitle acad-text-subtitle"><b>{acadSection.subTitle}</b></p>
          <div>
            <p className="subTitle acad-text">{acadSection.thunder} <b>Master of Science</b> in <b>Computer Science</b>, <b>University of Massachusetts Amherst</b></p>
            <p className="subTitle acad-text">{acadSection.thunder} <b>Bachelor of Technology</b> in <b>Computer Science & Engineering</b>, <b>Indian Institute of Technology Indore (IIT)</b>, India</p>
          </div>
          
          <br />
          <p className="subTitle acad-text-subtitle"><b>{acadSection.subTitle2}</b></p>
          <div>
            <p className="subTitle acad-text">{acadSection.thunder} <a href="https://basno.com/t2gs82bx" target="_blank"><b>CFA</b></a> (Chartered Financial Analyst) level 1 in 2019.</p>
            <p className="subTitle acad-text">{acadSection.thunder} <a href="https://github.com/parul100495/parul100495.github.io/blob/source/src/assests/files/covid.pdf" target="_blank"><b>COVID-19: Operational Planning Guidelines & COVID-19 Partners Platform to support country preparedness & response</b></a> in 2020.</p>
          </div>
          
          <br />
          <p className="subTitle acad-text-subtitle"><b>SCHOLARSHIP</b></p>
          <div>
            <p className="subTitle acad-text">{acadSection.thunder} <a href="https://ghc.anitab.org/" target="_blank"><b>GHC'20</b></a> Scholarship by Anita.org</p>
          </div>
        </div>
        </Fade>
        
        <Fade right duration={1000}>
        <div className="acad-image-div">
          <img alt="Parul Acads" src={require("../../assests/images/books.svg")}></img>
        </div>
        </Fade>
      </div>
    </div>
  );
}
