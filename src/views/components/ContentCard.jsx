import React, { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';

import Grow from '@material-ui/core/Grow';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(5),
        margin: theme.spacing(0, 0, 5, 0),
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2),
        },
    }
}));

export default function ContentCard({ content }) {
    const classes = useStyles();
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        setChecked(true)
    }, [setChecked])

    return (
        <Grow in={checked} timeout={1000}>
            <Paper elevation={1} className={classes.paper}>
                <Typography
                    variant="h5"
                    color="textSecondary"
                >
                    <ReactMarkdown>{content}</ReactMarkdown>
                </Typography>
            </Paper>
        </Grow>
    )
}
