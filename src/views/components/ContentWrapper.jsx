import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import SideBarLinks from "./SideBarLinks"
import ContentCard from "./ContentCard";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6)
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: "none"
    },
    sidebar: {
        width: "100%"
    }
}));

function ContentWrapper({ sideBarList, main }) {
    const classes = useStyles();

    if (!main) {
        return (<></>)
    }

    return (
        <Container className={classes.cardGrid} maxWidth="lg">
            <Grid container className={classes.cardGrid}>
                <Grid item md={9}>
                    <ContentCard className={classes.column} content={main} />
                </Grid>
                <Grid item md={3} className={classes.sidebar}>
                    <SideBarLinks links={sideBarList} /> 
                </Grid>
            </Grid>
        </Container>
    )
}

export default ContentWrapper