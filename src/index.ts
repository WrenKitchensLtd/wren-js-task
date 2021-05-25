import "bootstrap/dist/css/bootstrap.css";

import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App/App";

function main() {
  ReactDOM.render(React.createElement(App), document.getElementById("app"));
}

main();
