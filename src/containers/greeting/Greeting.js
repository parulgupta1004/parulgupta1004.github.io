import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import {Fade} from "react-reveal";

export default function Greeting() {
  return (
    <Fade bottom duration={1000} distance="40px">
    <div className="greet-main" id="greeting">
      <div className="greeting-main">

        <div className="greeting-image-div">
          <img alt="parul on stage" src={require("../../assests/parul_gupta_website.jpg")}></img>
        </div>

        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">

              {greeting.title}
            </h1>
            <p className="greeting-text-p"><b>{greeting.subTitle}</b></p>
            <p className="greeting-text-p2 subTitle"><b>{greeting.subTitle2}</b></p>
            {/* <p className="greeting-text-p2 subTitle"><b>{greeting.paragraph2_emp}</b>{greeting.paragraph2}</p>
            <p className="greeting-text-p2 subTitle"><b>{greeting.paragraph3_emp}</b>{greeting.paragraph3}</p> */}
            <SocialMedia />
          </div>
        </div>

      </div>
    </div>
    </Fade>
  );
}
