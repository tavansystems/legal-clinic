import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import MainLayout from "../layouts/MainLayout";
import HeroUnit from "../components/HeroUnit";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));


export default function NotFound() {
  const classes = useStyles();
  return (
    <MainLayout>
      <HeroUnit />
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
            Page Not Found
        </Grid>
      </Container>
    </MainLayout>
  );
}
