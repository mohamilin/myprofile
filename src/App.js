// import logo from "./logo.svg";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
// import { Paper, Grid } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import Homepage from "./pages/Homepage";
import Portofolio from "./pages/Portofolio";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <>
      <Router>
      <HeaderComponent />
        <div className="app-test">
          <div className="sub-app">
            <div className="content">
                <Switch>
                  <Route exact path="/">
                    <Homepage />
                  </Route>
                  <Route component={Portofolio} path="/portofolio"/>
                  <Route component={Blogs} path="/blog"/>
                </Switch>
            </div>
          </div>
        </div>
      <FooterComponent />
      </Router>
    </>
  );
}

export default App;
