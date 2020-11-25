import React, { useContext } from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

import LangContext from "../../utils/LangContext"

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6)
    }
}));

export default function Footer() {
    const classes = useStyles();
    const { literals } = useContext(LangContext);

    return (
        <footer className={classes.footer}>
            <Grid container>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Typography variant="h6" align="center" gutterBottom>
                        {literals.app_name}
                    </Typography>
                    <Typography spacing="10" align="center" color="textSecondary" component="p">
                        {literals.disclaimer}
                    </Typography>
                    <br />
                    <Typography variant="body2" color="textSecondary" align="center">
                        {literals.copyright} ©
                        <Link color="inherit" target="_BLANK" href="https://mfso.ca">
                            {' '}{literals.mfso}
                        </Link>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        </footer>
    )
}