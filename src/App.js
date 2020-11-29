// import logo from "./logo.svg";
import "./App.css";
import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <Header/>
      <div className="app-test">
        <div className="sub-app">
          <div className="content">
            <LandingPage/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
