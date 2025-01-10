import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Blogs from "./blogs/Blogs";
import Academics from "./academics/Academics";
import Projects from "./projects/Projects";
import WorkEx from "./Workex/Workex";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top";
import Talks from "./talks/talks";
export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Talks />
        {/* <WorkEx />
        //
        <Projects />
        <Academics /> */}
        {/* <Blogs /> */}
        <Footer />
        <Top />
      </div>
    );
  }
}
