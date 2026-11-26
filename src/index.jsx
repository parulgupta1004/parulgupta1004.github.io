import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const root = document.getElementById("root");
if (root.hasChildNodes()) hydrateRoot(root, <App />);
else createRoot(root).render(<App />);

serviceWorker.unregister();
