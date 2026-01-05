import React from "react";
import "./App.css";
import Main from "./containers/Main";
import ReactGA from 'react-ga4';
import JsonLd from './jsonld.js';

function App() {
    // setup google analytics
    ReactGA.initialize('G-ZKFQ0EFNKY');
    
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
