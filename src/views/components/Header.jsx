import React, { useContext } from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Gavel from "@material-ui/icons/Gavel";
import { makeStyles } from "@material-ui/core/styles";
import LangContext from "../../utils/LangContext";

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    }
}));

export default function Header() {
    const classes = useStyles();
    const { literals } = useContext(LangContext);
    return (
        <AppBar position="relative">
            <Toolbar>
                <Gavel className={classes.icon} />
                <Typography variant="h6" color="inherit" noWrap>
                    {literals.app_name}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}


