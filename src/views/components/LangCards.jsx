import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import Grow from "@material-ui/core/Grow";
import Container from "@material-ui/core/Container";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import en from "../../lang/en.json";

import LangContext from "../../utils/LangContext";

const supportedLangs = [en]

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
    link: {
        textDecoration: "none"
    }
}));

export default function LangCards() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        setChecked(true)
    }, [setChecked])

    return (
        <LangContext.Provider value={en}>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {supportedLangs.map((lang, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Grow in={checked} timeout={1000}>
                                <CardActionArea className={classes.link} to={"/" + lang.slug} component={Link}>
                                    <Card className={classes.card}>
                                        {/* <CardMedia
                                            className={classes.cardMedia}
                                            image="https://via.placeholder.com/265x150.webp"
                                            title="Image title"
                                        /> */}
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {lang.title}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Typography color="primary" component="p">
                                                {lang.literals.choose}
                                            </Typography>
                                        </CardActions>
                                    </Card>

                                </CardActionArea>
                            </Grow>

                        </Grid>
                    ))}
                </Grid>
            </Container>
        </LangContext.Provider>
    );
}
