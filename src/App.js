// import logo from "./logo.svg";
import React from "react";

import "./App.css";
// import { Paper, Grid } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

import HeaderComponent from "./components/HeaderComponent";
import Homepage from "./pages/Homepage";



function App() {


  return (
    <>
      <HeaderComponent/>
      <div className="app-test">
        <div className="sub-app">
          <div className="content">
            <Homepage/>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default App;
