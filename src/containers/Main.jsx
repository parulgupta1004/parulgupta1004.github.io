import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Greeting from "./greeting/Greeting";
import OpenSource from "./opensource/OpenSource";
import Talks from "./talks/talks";
import Community from "./community/community";
import Gallery from "./gallery/gallery";
import "./Main.css";

export default function Main() {
  return (
    <div>
      <Header />
      <main id="main-content" tabIndex="-1">
        <Greeting />
        <OpenSource />
        <Talks />
        <Community />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
