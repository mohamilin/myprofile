import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import "./StylePages.css";
// import asset
import imgProgram from "../assets/undraw_programming_2svr.svg";
import imgProject from "../assets/undraw_project_completed_w0oq.svg";
import imgArticle from "../assets/undraw_task_31wc.svg";
import html from "../assets/html.png";
import css from "../assets/css.webp"
import js from "../assets/js.png"
import react from "../assets/react-js.png"
import node from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import exprees from "../assets/expressks.png";


const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: -10,
  },
  imgProject: {
    width: "60%",
    marginBottom: -10,
  },
  gridHero: {
    textAlign: "center",
  },
  imgProgram: {
    width: "90%",
  },
  imageSkill: {
    width: "90%",
    height: "90%"
  },
}));

function Homepage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        {/* start hero section */}
        <Grid container spacing={3}>
          <Grid item sm={6} xs={12} className={classes.gridTitle}>
            <div>
              <h3 className={classes.title}>
                Hi, I'm Amilin a Front End Web Developer
              </h3>
              <p>Currently looking for a new opportunity. Hire me ?</p>
              <Grid
                container
                spacing={3}
                style={{ width: "60%", marginTop: 30, marginLeft: 50 }}
              >
                <Grid item sm={6} xs={12}>
                  <img
                    className={classes.imgProject}
                    src={imgProject}
                    alt="img Project"
                  />
                  <p style={{ width: 90, marginLeft: 5 }}>4 Projects</p>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <img
                    className={classes.imgProject}
                    src={imgArticle}
                    alt="img Project"
                  />
                  <p style={{ width: 90, marginLeft: 5, marginTop: 26 }}>3 Articles</p>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item sm={6} xs={12} className={classes.gridHero}>
            <img className={classes.imgProgram} src={imgProgram} alt="img" />
          </Grid>
        </Grid>
        {/* end hero section */}

        {/* start content */}
        <div>
          <h4>Skills</h4>
          <div style={{ textAlign: "center", marginLeft: 20, marginRight: 20 }}>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={2}>
                <img
                className={classes.imageSkill}
                src={html}
                alt="html img"
                />
              </Grid>
              <Grid item xs={6} sm={2}>
                <img
                className={classes.imageSkill}
                src={css}
                alt="css"
                />
              </Grid>
              <Grid item xs={6} sm={2}>
                <img
                className={classes.imageSkill}
                src={js}
                alt="js"
                />
              </Grid>
              <Grid item xs={6} sm={2}>
                <img
                className={classes.imageSkill}
                src={react}
                alt="react"
                />
              </Grid>
              <Grid item xs={6} sm={2}>
                <img
                className={classes.imageSkill}
                src={node}
                alt="node"
                />
              </Grid>
              <Grid item xs={6} sm={2}>
                <img
                className={classes.imageSkill}
                src={exprees}
                alt="exprees"
                />
              </Grid>
              <Grid item xs={6} sm={2}>
                <img
                className={classes.imageSkill}
                src={mongodb}
                alt="mongodb"
                />
              </Grid>
            </Grid>
          </div>
        </div>
        {/* end content */}
      </div>
      <br /> <br /> <br />
    </>
  );
}

export default Homepage;
