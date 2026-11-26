import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const root = document.getElementById("root");
if (root.hasChildNodes()) ReactDOM.hydrate(<App />, root);
else ReactDOM.render(<App />, root);

serviceWorker.unregister();
