import React, { useContext } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";

import LangContext from "../../utils/LangContext";
import SearchBar from "./SearchBar";
import LanguageSelector from "./LanguageSelector";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        margin: theme.spacing(0, 2),
        flexGrow: 1,
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    langSelector: {
        backgroundColor: fade(theme.palette.common.white, 0.15),
        borderRadius: theme.shape.borderRadius,
        marginLeft: 0,
        padding: theme.spacing(0, 1),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    search: {
        position: "relative",
        marginRight: "10px",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        minWidth: "200px",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto",
        },
    },
}));

export default function Header() {
    const classes = useStyles();
    const { literals } = useContext(LangContext);

    return (
        <AppBar position="relative">
            <Toolbar className={classes.toolbar}>
                <img src="/logo.jpeg" style={{width: '150px', margin: '10px', borderRadius: '20px', }} alt="MFSO logo" />
                <Typography
                    className={classes.title}
                    variant="h6"
                    noWrap
                    component="h1"
                >
                    {literals.app_name}
                </Typography>
                <div className={classes.search}>
                    <SearchBar />
                </div>
                <div className={classes.langSelector}>
                    <LanguageSelector />
                </div>
            </Toolbar>
        </AppBar>
    );
}
