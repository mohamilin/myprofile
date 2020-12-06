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
        <p style={{marginTop: -18}} >The case studies that I build for develop my abilities</p>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} style={{ marginBottom: 0 }}>
          <Card className={classes.rootCard}>
            <img src={goTest} className={classes.portofolio} alt="img gotest" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} style={{ marginBottom: 0 }}>
          <Card className={classes.rootCard}>
            <img src={wearel} className={classes.portofolio} alt="img wearel" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} style={{ marginBottom: 40 }}>
          <Card className={classes.rootCard}>
            <img
              src={promeet}
              className={classes.portofolio}
              alt="img promeet"
            />
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Portofolio;
