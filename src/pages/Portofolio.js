import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

import goTest from "../assets/go-test.jpeg";
import wearel from "../assets/wearel.png";
import promeet from "../assets/promeet.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rootCard: {
    height: 300,
  },
  portofolio: {
    width: "100%",
    height: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    height: 280,
    
    color: theme.palette.text.secondary,
  },
  gotest: {
    width: "100%",
  },
}));

function Portofolio() {
  const classes = useStyles();

  return (
    <>
      <div>
        <h4>My Portofolio ...</h4>
        <p style={{marginTop: -10, marginBottom: 50}} >The case studies that I build for develop my abilities
        <br/>
        I am currently building two web-based applications, namely websites
            such as todo lists for programmers and e-commerce. I hope this will be of great use.
        </p>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} style={{ marginBottom: 0 }}>
          <Card className={classes.rootCard}>
            <img src={goTest} className={classes.portofolio} alt="img gotest" />
          </Card>
          <h3>Go Test <span> :</span> <a target="_blank" href="https://go-test.netlify.app/" rel="noreferrer">www.go-test.netlify.app</a> </h3>
        </Grid>
        <Grid item xs={12} sm={6} style={{ marginBottom: 0 }}>
          <Card className={classes.rootCard}>
            <img src={wearel} className={classes.portofolio} alt="img wearel" />
          </Card>
          <h3>Wearel <span> :</span> <a target="_blank" href="http://wearel.netlify.app" rel="noreferrer">www.wearel.netlify.app</a> </h3>
        </Grid>
        <Grid item xs={12} sm={6} style={{ marginBottom: 40 }}>
          <Card className={classes.rootCard}>
            <img
              src={promeet}
              className={classes.portofolio}
              alt="img promeet"
            />
          </Card>
          <h3>Promeet <span> :</span> <a target="_blank" href="https://promeet.netlify.app/" rel="noreferrer">www.promeet.netlify.app</a> </h3>
        </Grid>
      </Grid>
    </>
  );
}

export default Portofolio;
