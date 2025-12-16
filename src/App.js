import React from "react";
import "./App.css";
import Main from "./containers/Main";
import ReactGA from 'react-ga';
import JsonLd from './jsonld.js';

function App() {
    // setup google analytics
    ReactGA.initialize('G-ZKFQ0EFNKY');
    ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <>
    <JsonLd />
    <div>
      <Main />
    </div>
    </>
  );
}

export default App;
