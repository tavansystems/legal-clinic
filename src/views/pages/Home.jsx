import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import MainLayout from "../layouts/MainLayout";
import LandingHeroUnit from "../components/LandingHeroUnit";
import LangCards from "../components/LangCards";

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

export default function Home() {
    const classes = useStyles();

    document.title = "MFSO Legal Clinic";
    document.description =
        "The multilingual online legal clinic is an online initiative commissioned and organized by Muslim Family Services of Ottawa, developed and integrated by Tavan Systems Inc. and supported by The Law Foundation of Ontario. This online multilingual legal resource hub will be an invaluable resource for the Ottawa community, due to the ongoing lack of linguistically appropriate materials on everyday legal matters.".slice(
            0,
            100
        );

    return (
        <MainLayout>
            <LandingHeroUnit />
            <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    <LangCards />
                </Grid>
            </Container>
        </MainLayout>
    );
}
