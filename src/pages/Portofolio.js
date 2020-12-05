import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import goTest from "../assets/go-test.jpeg";
import wearel from "../assets/wearel.png";
import promeet from "../assets/promeet.jpeg";

const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
    },
    portofolio : {
        width: '100%',
        height: '110%',
    },
  }));

function Portofolio() {
      const classes = useStyles();

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} style={{marginBottom: 40}}>
          <img  src={goTest} className={classes.portofolio} alt="img gotest" />
        </Grid>
        <Grid item xs={12} sm={6} style={{marginBottom: 40}}>
          <img  src={wearel} className={classes.portofolio}  alt="img wearel" />
        </Grid>
        <Grid item xs={12} sm={6} style={{marginBottom: 40}}>
          <img  src={promeet} className={classes.portofolio}  alt="img promeet" />
        </Grid>
       
      </Grid>
    </>
  );
}

export default Portofolio;
