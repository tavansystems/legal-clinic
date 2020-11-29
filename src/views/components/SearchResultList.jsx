

import React from 'react'
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import { makeStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    title: {
        color: "black"
    },
    listRoot: {
        position: 'absolute',
        width: '100%',
        maxWidth: '70ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    link: {
        textDecoration: "none"
    }
}));

export default function SearchResultList({ results }) {
    const classes = useStyles();

    if (results.length === 0) {
        return (<></>)
    }

    return (
        <List className={classes.listRoot}>
            {results.map((result) => (
                <Link className={classes.link} key={result.path} to={result.path}>
                    <ListItem alignItems="flex-start">

                        <ListItemAvatar>
                            <Avatar alt={result.title} src="https://via.placeholder.com/265x150.webp" />
                        </ListItemAvatar>
                        <ListItemText
                            className={classes.title}
                            primary={result.title}
                            secondary={
                                <ReactMarkdown>
                                   {result.content !== null ? result.content.slice(0, 100)+ "..." : ""}
                                </ReactMarkdown>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </Link>

            ))}
        </List>
    )
}

SearchResultList.defaultProps = {
    results: []
};