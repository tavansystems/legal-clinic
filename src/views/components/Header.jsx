import React, { useContext } from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Gavel from "@material-ui/icons/Gavel";
import { fade, makeStyles } from "@material-ui/core/styles";
import LangContext from "../../utils/LangContext";
import SearchBar from './SearchBar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        minWidth: '200px',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }
}));

export default function Header() {
    const classes = useStyles();
    const { literals } = useContext(LangContext);

    return (
        <AppBar position="relative">
            <Toolbar>
                <Gavel className={classes.icon} />
                <Typography className={classes.title} variant="h6" noWrap>
                    {literals.app_name}
                </Typography>
                <div className={classes.search}>
                    <SearchBar />
                </div>
            </Toolbar>
        </AppBar>
    )
}


