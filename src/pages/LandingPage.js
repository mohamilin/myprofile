import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import CodeIcon from "@material-ui/icons/Code";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import BookIcon from "@material-ui/icons/Book";

import "./StylePages.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: "#01579b",
    backgroundColor: "#f9fbe7",
  },
}));

function LandingPage() {
  const classes = useStyles();

  return (
    <>
      <div style={{ textAlign: "center", width: '100%' }}>
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <HomeIcon fontSize="large" />
              <p className="menu">Home</p>
            </Grid>
            <Grid item xs={3}>
              <CodeIcon fontSize="large" />
              <p className="menu">Portofolio</p>
            </Grid>
            <Grid item xs={3}>
              <PhoneAndroidIcon fontSize="large" />
              <p className="menu">Contact</p>
            </Grid>
            <Grid item xs={3}>
              <BookIcon fontSize="large" />
              <p className="menu">Blog</p>
            </Grid>
          </Grid>
    
        </Paper>
      </div>
      <div>
        <p>Halaman Landing</p>
      </div>
    </>
  );
}

export default LandingPage;
