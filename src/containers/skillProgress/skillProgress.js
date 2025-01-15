import React from "react";
import "../academics/Academics.css";
import { Fade } from "react-reveal";

export default function StackProgress() {
    return (
        <div className="main" id="skills">
        <h1 className="acad-heading">Skills</h1>
          <div className="heading acad-main-div">
            <Fade left duration={1000}>
                <div className="acad-image-div1">
                  <img alt="Parul Skills" src={require("../../assests/images/skills.svg")}></img>
                </div>
            </Fade>
            
            <Fade right duration={1000}>
            <div className="acad-text-div">
              <p className="subTitle acad-text"><b>Programming Languages</b>: Python, Java, C/C++, R</p>
              <p className="subTitle acad-text"><b>Tools</b>: PyTorch, Keras, scikit-learn, Huggingface, Fairlearn, AWS, Google Cloud, Git</p>
              <p className="subTitle acad-text"><b>Database</b>: SQL, NoSQL</p>
              <p className="subTitle acad-text"><b>OS</b>: Linux, OSX</p>
              <p className="subTitle acad-text"><b>Web Dev</b>: Angular JS, React, HTML/CSS</p>
            </div>
            </Fade>
        </div>
    </div>
    
    );
    }
