import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";


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
const supportedLangs = [en, fr]

export default function Navigator() {
    const classes = useStyles();
    const [lang, setLang] = useState(en)
    const [module, setModule] = useState({})
    const [options, setOptions] = useState([])

    useEffect(() => {
        parsePath();
    }, []);

    const parsePath = () => {
        let pathname = window.location.pathname
        let pathlist = pathname.split("/")
        pathlist.shift()

        for (let lang in supportedLangs) {
            if (lang === pathlist[0]) {
                setLang(lang)
            }
        }

        let options = supportedLangs
        let currentModule = supportedLangs
        for (let slug of pathlist) {
            for (let module of options) {
                if (module.slug === slug) {
                    options = module.options
                    currentModule = module
                }
            }
        }
        setOptions(options)
        setModule(currentModule)
    }

    const Content = () => {
        if(module.content){
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
        <LangContext.Provider value={lang}>
            <MainLayout>
                <HeroUnit title={module.title} />
                <Cards options={options} />
                <Content />
            </MainLayout>
        </LangContext.Provider>
    )
}