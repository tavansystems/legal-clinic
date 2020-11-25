import React from 'react';
import ReactMarkdown from 'react-markdown'

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    paper: {
        padding: theme.spacing(5),
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

export default function ContentCard({ content }) {
    const classes = useStyles();

    return (
        <Paper elevation={1} className={classes.paper}>
            <Typography
                variant="h5"
                color="textSecondary"
            >
                <ReactMarkdown>{content}</ReactMarkdown>
            </Typography>
        </Paper>
    )
}
