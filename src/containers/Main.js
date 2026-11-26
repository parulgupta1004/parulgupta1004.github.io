import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top";
import Talks from "./talks/talks";
import Community from "./community/community";
import Gallery from "./gallery/gallery";

import "./Main.css";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Greeting />
          <section aria-label="Talks">
            <Talks />
          </section>
          <section aria-label="Community">
            <Community />
          </section>
          <section >
            <Gallery/>
          </section>
        </main>
        <Footer />
        <Top />
      </div>
    );
  }
}
