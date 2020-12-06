import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import CopyrightIcon from "@material-ui/icons/Copyright";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import { blue } from '@material-ui/core/colors';

import "./StylesComponents.css";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
function FooterComponent() {
  const classes = useStyles();

  return (
    <>
      <footer className="container-footer">
        <div className={classes.root}>
          <Badge style={{ marginRight: -5 }}>
            <CopyrightIcon style={{ color: blue[500] }} />
          </Badge>
          <Badge color="secondary">
            <Typography>2020 - Moh Amilin</Typography>
          </Badge>
          <br />
          <div style={{ marginTop: 0 }}>
            <Badge >
              <a target="_blank" href="https://www.instagram.com/cakmilin">
                <InstagramIcon color="primary" />
              </a>
            </Badge>
            <Badge color="secondary">
              <a target="_blank" href="https://www.linkedin.com/in/moh-amilin-6a5015128">
                <LinkedInIcon color="primary" />
              </a>
            </Badge>
            <Badge color="secondary">
              <a target="_blank" href="https://t.me/mohamilin">
                <TelegramIcon color="primary" />
              </a>
            </Badge>
          </div>
          <br /> <br />
        </div>
      </footer>
    </>
  );
}

export default FooterComponent;
