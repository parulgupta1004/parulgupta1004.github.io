import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";

export default function Greeting() {
  return (
    <section className="greet-main" id="greeting" aria-labelledby="greeting-title">
      <div className="greeting-main">

        <div className="greeting-image-div">
          <img alt="Parul Gupta speaking on stage" src={require("../../assests/parul_gupta_website.jpg")} width="1304" height="888" />
        </div>

        <div className="greeting-text-div">
            <h1 className="greeting-text" id="greeting-title">
              {greeting.title}
            </h1>
            <div className="greeting-roles">
              <p className="greeting-text-p">{greeting.subTitle}</p>
              <p className="greeting-text-p2">
                <a href={greeting.fairlearnUrl} target="_blank" rel="noopener noreferrer">{greeting.subTitle3}</a>
              </p>
              <p className="greeting-text-p2">
                <a href={greeting.fairSeldonianUrl} target="_blank" rel="noopener noreferrer">{greeting.subTitle4}</a>
              </p>
            </div>
            <p className="greeting-summary">{greeting.subTitle2}</p>
            <SocialMedia />
        </div>

      </div>
    </section>
  );
}
