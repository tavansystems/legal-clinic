import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import en from "../../lang/en.json";
import fr from "../../lang/fr.json";
import LangContext from "../../utils/LangContext";

const supportedLangs = [en, fr]

const useStyles = makeStyles((theme) => ({
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

export default function LangCards() {
  //   const [checked, setChecked] = useState(true)
  const classes = useStyles();

  return (
    <LangContext.Provider value={en}>
      <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
      {supportedLangs.map((lang, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {lang.title}
                </Typography>
                <Typography>
                  Description if there is one 
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={"/" + lang.slug}>
                  <Button size="small" color="primary">
                    {lang.literals.choose}
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
      ))}
      </Grid>
    </Container>
    </LangContext.Provider>
  );
}
