import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { returnStatement } from "@babel/types";
import Routes from "./Routes";

class App extends React.Component {
  render() {
    return <Routes />;
  }
}

export default App;
