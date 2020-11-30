import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import { blue } from '@material-ui/core/colors';
import HomeIcon from "@material-ui/icons/Home";
import CodeIcon from "@material-ui/icons/Code";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import BookIcon from "@material-ui/icons/Book";

import "./StylePages.css";


import Carousel from "../parts/Carousel";

function LandingPage() {

  return (
    <>
      <div style={{ textAlign: "center", padding: 30 }}>
        <Paper className="paper">
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <HomeIcon  style={{ color: blue[800] }} fontSize="large" />
              <p className="menu">Home</p>
            </Grid>
            <Grid item xs={3}>
              <CodeIcon  style={{ color: blue[800] }} fontSize="large" />
              <p className="menu">Portofolio</p>
            </Grid>
            <Grid item xs={3}>
              <PhoneAndroidIcon  style={{ color: blue[800] }} fontSize="large" />
              <p className="menu">Contact</p>
            </Grid>
            <Grid item xs={3}>
              <BookIcon  style={{ color: blue[800] }} fontSize="large" />
              <p className="menu">Blog</p>
            </Grid>
          </Grid>
        </Paper>
      </div>
      {/* content */}
      <div className="container-landing">
        <Carousel/>
      </div>
    </>
  );
}

export default LandingPage;
