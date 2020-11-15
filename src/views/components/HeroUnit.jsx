import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import BreadCrumbs from "./BreadCrumbs";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 9),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function HeroUnit({ title }) {
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
          <Grid container spacing={2} justify="center">
            <BreadCrumbs />
          </Grid>
        </div>
      </Container>
    </div>
  );
}
