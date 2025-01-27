import React from "react";
import "./App.css";
import Main from "./containers/Main";

function App() {
    // setup google analytics
    var _gaq = _gaq || [];
    _gaq.push(['parulgupta_website._setAccount', 'G-ZKFQ0EFNKY']);
    _gaq.push(['parulgupta_website._trackPageview']);

    (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = 'https://www.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
