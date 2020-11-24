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
    column: {
        width: "100%"
    }
}));

function ContentWrapper({ sidebar, main }) {
    const classes = useStyles();

    if(!main){
        return (<></>)
    }

    return (
        <Container className={classes.cardGrid} maxWidth="xl">
            <Grid container className={classes.cardGrid} spacing={8}>
                <Grid item md={3}>
                    <ContentCard content={sidebar} />
                </Grid>
                <Grid item md={9}>
                    <ContentCard className={classes.column}  content={main} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default ContentWrapper