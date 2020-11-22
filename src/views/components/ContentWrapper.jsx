import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ContentCard from "../components/ContentCard";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        backgroundColor: "#3f51b5"
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    }
}));

function ContentWrapper({ sidebar, main }) {
    const classes = useStyles();

    if(!main){
        return (<></>)
    }

    return (
        <Container className={classes.cardGrid} maxWidth="xl">
            <Grid container className={classes.cardGrid} spacing={2}>
                <Grid item xs={3}>
                    <ContentCard content={sidebar} />
                </Grid>
                <Grid item xs={9}>
                    <ContentCard content={main} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default ContentWrapper