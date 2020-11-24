import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 9),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function LandingHeroUnit({ title, breadCrumbs }) {
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          DESC. PLACEHOLDER
        </Typography>
        <div className={classes.heroButtons}>

        </div>
      </Container>
    </div>
  );
}
