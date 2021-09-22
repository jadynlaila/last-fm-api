import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import { MusicProvider } from "./util/context";

ReactDOM.render(
  <React.StrictMode>
    <MusicProvider>
      <Router>
        <App />
      </Router>
    </MusicProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
