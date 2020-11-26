import React, { useEffect, useState, useContext } from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grow from '@material-ui/core/Grow';

import LangContext from "../../utils/LangContext"

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 9),
  },
  welcome: {
    marginBottom: "0px",
    fontSize: "3.75rem",
  },
  chooseLang: {
    fontSize: "1.5rem"
  }
}));

export default function LandingHeroUnit({ title, breadCrumbs }) {
  const classes = useStyles();
  const [checked, setChecked] = useState(false)
  const { literals } = useContext(LangContext)

  useEffect(() => {
    setChecked(true)
  }, [setChecked])

  return (
    <Grow in={checked} timeout={1000}>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            className={classes.welcome}
            component="h1"
            variant="h1"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {literals.welcome}
          </Typography>
          <Typography
            className={classes.chooseLang}
            component="h2"
            variant="h2"
            align="center"
            color="textSecondary"
            gutterBottom
          >
            {literals.choose_lang}
          </Typography>
        </Container>
      </div>
    </Grow>
  );
}
