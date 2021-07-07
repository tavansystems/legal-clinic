import React, { useContext } from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { fade, makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

import LanguageSelector from "./LanguageSelector";
import LangContext from "../../utils/LangContext";

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    langSelector: {
        backgroundColor: fade("#eee", 0.65),
        borderRadius: theme.shape.borderRadius,
        margin: "20px auto 0",
        width: "fit-content",
        padding: theme.spacing(0, 1),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
    },
}));

export default function Footer() {
    const classes = useStyles();
    const { literals } = useContext(LangContext);

    return (
        <footer className={classes.footer}>
            <Grid container>
                <Grid item xs={12} md={4}></Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" align="center" gutterBottom>
                        {literals.app_name}
                    </Typography>
                    <Typography
                        spacing="10"
                        align="center"
                        color="textSecondary"
                        component="p"
                    >
                        {literals.disclaimer}
                    </Typography>
                    <div className={classes.langSelector}>
                        <LanguageSelector />
                    </div>
                    <br />
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        align="center"
                    >
                        {literals.copyright} ©{" "}
                        <Link
                            color="inherit"
                            target="_BLANK"
                            href={literals.app_org_link}
                        >
                            {literals.org_name}
                        </Link>{" "}
                        {new Date().getFullYear()}
                        {". "}
                        {literals.developed_by}{" "}
                        <Link
                            href="https://tavansystems.com"
                            target="_BLANK"
                            rel="noreferrer"
                        >
                            Tavan Systems Inc.
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}></Grid>
            </Grid>
        </footer>
    );
}
