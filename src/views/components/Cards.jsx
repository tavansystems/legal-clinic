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
import Link from "@material-ui/core/Link";

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

export default function Cards({ options }) {
  //   const [checked, setChecked] = useState(true)
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
      {options.map((option, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {option.title}
                </Typography>
                {/* <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography> */}
              </CardContent>
              <CardActions>
                <Link href={window.location.pathname + "/" + option.slug}>
                  <Button size="small" color="primary">
                    Choose
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
      ))}
      </Grid>
    </Container>
  );
}
