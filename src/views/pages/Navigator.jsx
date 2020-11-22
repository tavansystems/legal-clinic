import React, { useState, useEffect, useCallback } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { withRouter, Redirect, Switch } from 'react-router-dom';

import LangContext from "../../utils/LangContext";
import MainLayout from '../layouts/MainLayout';
import HeroUnit from "../components/HeroUnit"
import en from "../../lang/en.json"
import fr from "../../lang/fr.json"
import Cards from "../components/Cards"
import ContentWrapper from "../components/ContentWrapper";

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
    },
    cardMedia: {
        paddingTop: "56.25%", // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));
const supportedLangs = {
    options: {
        en: en,
        fr: fr
    }
}

function Navigator({ location, match }) {
    const classes = useStyles();
    const [module, setModule] = useState({})

    const { path, lang } = match.params
    const selectedLang = supportedLangs.options[lang]

    const parsePath = useCallback(
        () => {
            let pathlist = path ? path.split("/") : []
            let currentModule = selectedLang
            for (let slug of pathlist) {
                if (currentModule.options[slug]) {
                    currentModule = currentModule.options[slug]
                } else {
                    return (
                        <Switch>
                            <Redirect path="*" to='/users/profile/:id' />
                        </Switch>
                    )
                }
            }
            setModule(currentModule)
        },
        [path, selectedLang],
    );

    useEffect(() => {
        parsePath();
    }, [location.pathname, parsePath]);

    const Content = () => {
        if (module.content) {
            return (
                <Container className={classes.cardGrid} maxWidth="xl">
                    <Grid container className={classes.cardGrid} spacing={2}>
                        <Grid item xs={3}>
                            <ContentWrapper content="SOME SIDEBAR" />
                        </Grid>
                        <Grid item xs={9}>
                            <ContentWrapper content={module.content} />
                        </Grid>
                    </Grid>
                </Container>
            )
        } else {
            return (<></>)
        }

    }

    return (
        <LangContext.Provider value={selectedLang}>
            <MainLayout key={location.pathname}>
                <HeroUnit title={module.title} />
                <Cards options={module.options} />
                <Content />
            </MainLayout>
        </LangContext.Provider>
    )
}

export default withRouter(Navigator)