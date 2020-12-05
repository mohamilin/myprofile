import React from "react";
import goTest from "../assets/go-test.jpeg";
import wearel from "../assets/wearel.png";
function Portofolio() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <img className={classes.goTest} src={goTest} alt="img gotest" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <img className={classes.goTest} src={wearel} alt="img gotest" />
        </Grid>
      </Grid>
    </>
  );
}

export default Portofolio;
