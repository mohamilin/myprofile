import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

import "./StylesComponent.css";
import logo from "../logo.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 37,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    float: "right",
    marginRight: '15%',
    marginTop: 5
  },
  appBar: {
    height: 60,
    width: "100%",
    backgroundColor: '#004d40'
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <div className="sub-app-header">
          <div className="cont-toolbar">
            <div>
              <img
                className="App-logo"
                src={logo}
                alt="logo"
              />
             
              <Typography variant="h6" className={classes.title}>
               amilin's website
              </Typography>
            </div>
          </div>
        </div>
      </AppBar>
    </div>
  );
}
