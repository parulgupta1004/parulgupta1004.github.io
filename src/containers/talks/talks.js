import React from "react";
import "../projects/Projects.css";
import "./talks.css";
import { Fade } from "react-reveal";
import { acadSection } from "../../portfolio";
export default function Talks() {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <Fade bottom duration={1000}>
      <div className="main" id="talks">
        <div className="project-main-div">
          <div className="project-header">
            <h1 className="heading project-heading">Top Talks</h1>
            <div>
            <p><b>Nov 2024</b>: <a target="_blank" href="https://gdg.community.dev/events/details/google-gdg-silicon-valley-presents-responsible-ai-conference-devfest-silicon-valley/" className="no_decor">Speaker</a> @ Responsible AI Conference, Google Devfest Silicon Valley 2024 - '50 Shades Of Fairness: Into The World Of Constraints'</p>
            <p><b>Sep 2024</b>: <a target="_blank" href="https://2024.pybay.org/speaking/" className="no_decor">Speaker</a> @ PyBay 2024 - '<a target="_blank" href="https://www.youtube.com/watch?v=RgFe5tc-3TQ&t=43s" className="no_decor">Accelerating ML Prototyping: The Pythonic Way</a>'</p>
            <p><b>Apr 2024</b>: <a target="_blank" href="https://www.womentech.net/speaker/all/all/101702" className="no_decor">Speaker</a> @ Women In Tech Global Conference 2024 - 'Early Career Branding: How I Built My Niche'</p>
            <p><b>May 2023</b>: <a target="_blank" href="https://cfp.jupytercon.com/2023/speaker/AWYZRF/" className="no_decor">Speaker</a> @ JupyterCon 2023 - '<a target="_blank" href="https://cfp.jupytercon.com/2023/talk/7X3G8H/"  className="no_decor">A tale of notebook recovery: session reconnects, execution recoveries and more</a>'</p>
            <p><b>May 2023</b>: <a target="_blank" href="https://www.womentech.net/speaker/all/all/79305" className="no_decor">Speaker</a> @ Women In Tech Global Conference 2023 - 'Early Career Mentorship: My Journey From Mentee To Mentor'</p>
            <p><b>Jun 2020</b>: <a target="_blank" href="https://www.womentech.net/speaker/Parul/Gupta/23931" className="no_decor">Speaker</a> @ Women In Tech Global Conference 2020 - '<a target="_blank" href="https://www.youtube.com/watch?v=eMd8GHFy_zw&t=16s" className="no_decor">(Un)Fair Machine Learning</a>'' (<a target="_blank" href="https://github.com/parul100495/parul100495.github.io/blob/source/src/assests/files/Certificate-nominee--womentech.pdf" className="no_decor" >Nominated - WomenTech Global Awards</a>)</p>
            {/* <p className="subTitle acad-text">{acadSection.thunder} <b>Master of Science</b> in <b>Computer Science</b>, <b>University of Massachusetts Amherst</b></p>
            <p className="subTitle acad-text">{acadSection.thunder} <b>Bachelor of Technology</b> in <b>Computer Science & Engineering</b>, <b>Indian Institute of Technology Indore (IIT)</b>, India</p> */}
          </div>
              {/* <div className="certificate-card">
                <div className="certificate-image-div">
                <a href="https://www.womentech.net/speaker/Parul/Gupta" target="_blank"><img alt="WomenTech Global Conference" className="card-image2" src={require("../../assests/images/speaker2.png")}></img></a>
                </div>
                <div className="certificate-card-footer">
                  <p onClick={() => openUrlInNewTab("https://www.womentech.net")}><b>Event - WomenTech Global Conference 2020</b></p>
                </div>
                <div className="certificate-card-footer">
                  <p onClick={() => openUrlInNewTab("https://docs.google.com/presentation/d/1wg0EgARBM9KzH3hJb3-kgnH7lbBYe2HCdL_eJuN5PQk/edit?usp=sharing")}>Slides</p>
                <p onClick={() => openUrlInNewTab("https://www.womentech.net/speaker/Parul/Gupta")}>Speaker Page</p>
                <p onClick={() => openUrlInNewTab("https://github.com/parul100495/parul100495.github.io/blob/source/src/assests/files/Certificate-speaker--womentech.pdf")}>Certificate</p>

                </div> */}
            {/* </div> */}
            </div>
          </div>
      </div>
    </Fade>
  );
}
