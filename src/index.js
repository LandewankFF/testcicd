import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/style.css";
import App from "./App";
import "aos/dist/aos.css";
import { LanguageProvider } from "./utils/LanguageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LanguageProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </LanguageProvider>
);
