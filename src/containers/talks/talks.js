import React from "react";
import "../projects/Projects.css";
import "./talks.css";
import { Fade } from "react-reveal";

export default function Talks() {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="talks">
        <div className="project-main-div">
          <div className="project-header">
            <h1 className="heading project-heading">Talks</h1>
            <p className="subTitle project-subtitle">SHARE AND SPREAD AWARENESS ON MACHINE LEARNING AND OTHER COOL TECH...</p>
            <div className="project-cards-div">
              <div className="certificate-card1">
                <div className="certificate-image-div">
                <a href="https://www.womentech.net/speaker/Parul/Gupta" target="_blank"><img alt="Fairlearn" className="card-image2" src={require("../../assests/images/speaker2.png")}></img></a>
                </div>
                <div className="certificate-detail-div">
                <h4 onClick={() => openUrlInNewTab("https://www.womentech.net/speaker/Parul/Gupta")} className="card-title">WomenTech Global Conference 2020</h4>
                <p onClick={() => openUrlInNewTab("https://www.womentech.net/speaker/Parul/Gupta")} className="card-subtitle3"><b>Topic</b>: The (Un)Fair Machine Learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}