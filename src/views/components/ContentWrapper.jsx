import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import SideBarLinks from "./SideBarLinks"
import ContentCard from "./ContentCard";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: "none"
    },
    sidebar: {
        width: "100%",
        padding: theme.spacing(1), 
    },
    column: {
        padding: theme.spacing(1), 
    }
}));

function ContentWrapper({ sideBarList, main }) {
    const classes = useStyles();

    if (!main) {
        return (<></>)
    }

    return (
        <Container className={classes.cardGrid} maxWidth="lg">
            <Grid container>
                <Grid item md={9} className={classes.column}>
                    <ContentCard content={main} />
                </Grid>
                <Grid item md={3} className={classes.sidebar}>
                    <SideBarLinks links={sideBarList} /> 
                </Grid>
            </Grid>
        </Container>
    )
}

export default ContentWrapper