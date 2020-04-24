import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/About_styles.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const About = () => {
  let whitePage, name, titleSubDesc, windDesc;
  whitePage = name = titleSubDesc = windDesc = useRef(null);
  useEffect(() => {
    //css: { display: "block" }
    // gsap.to(whitePage, 2, { y: "-100vh", delay: 1, ease: "power1.inOut" });
    // gsap.to([name, windDesc, titleSubDesc], 2, {
    //   color: "black",
    //   y: "-62.5vh",
    //   delay: 1.5,
    //   ease: "power1.inOut",
    // });
  }, []);
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
  const classes = useStyles();
  return (
    <div className="about">
      <h5 className="backToMain">Back to Main</h5>
      <img src="gorilla.jpg" className="centerImage"></img>
      <p className="sideText">0x1</p>
      <div className="centerBody">
        <div className="whitePage" ref={(el) => (whitePage = el)}>
          <img src="closeup.jpg" className="closeUp" />
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>xs=12</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
          </Grid>
        </div>
        <h1 className="name" ref={(el) => (name = el)}>
          Ashan
        </h1>
        <p className="titleSubDesc" ref={(el) => (titleSubDesc = el)}>
          SWE
        </p>
        <p className="windDesc" ref={(el) => (windDesc = el)}>
          Wind is something that believes in dancing on every leaf and filling
          every pore of your skin with its intangible presence.
        </p>
        <svg className="bottomLine">
          <line x1="0" y1="0" x2="100%" y2="0" />
        </svg>
      </div>
    </div>
  );
};

export default About;
