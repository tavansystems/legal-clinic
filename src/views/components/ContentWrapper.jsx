import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ContentCard from "../components/ContentCard";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6)
    },
}));

function ContentWrapper({ sidebar, main }) {
    const classes = useStyles();

    if(!main){
        return (<></>)
    }

    return (
        <Container className={classes.cardGrid} maxWidth="lg">
            <Grid container className={classes.cardGrid} spacing={5}>
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