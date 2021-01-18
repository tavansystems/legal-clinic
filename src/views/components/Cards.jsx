import React, { useContext, useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";

import Card from "@material-ui/core/Card";
import Grow from '@material-ui/core/Grow';
import Container from "@material-ui/core/Container";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import LangContext from "../../utils/LangContext";

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
        textDecoration: "none",
    }
}));

function Cards({ options, location }) {
    const classes = useStyles();
    const [checked, setChecked] = useState(false)
    const { literals } = useContext(LangContext);

    useEffect(() => {
        setChecked(true)
    }, [setChecked])

    if (options.length === 0) {
        return <></>;
    }

    return (
        <Container
            key={location.pathname}
            className={classes.cardGrid}
            maxWidth="md"
        >
            <Grid container spacing={4}>
                {Object.entries(options).map(([key, option], index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Grow in={checked} timeout={1000}>
                            <CardActionArea className={classes.link} to={location.pathname + "/" + key} component={Link}>
                                <Card className={classes.card}>
                                    {/* <CardMedia
                                        className={classes.cardMedia}
                                        image="https://via.placeholder.com/265x150.webp"
                                        title="Image title"
                                    /> */}
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {option.title}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Typography color="primary" className={classes.choose} component="p">
                                            {literals.choose}
                                        </Typography>
                                    </CardActions>
                                </Card>
                            </CardActionArea>
                        </Grow>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

Cards.defaultProps = {
    options: [],
};

export default withRouter(Cards);
