import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import LinkIcon from "@material-ui/icons/Link";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    link: {
        color: theme.palette.primary.main,
        textDecoration: "none",
    },
    listItemText: { textAlign: "start", fontSize: "1.2rem" },
}));

function SideBarLinks({ links }) {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, [setChecked]);

    return (
        <Grow in={checked} timeout={1000}>
            <Paper elevation={1}>
                <List>
                    {links.map((item) => (
                        <Link
                            className={classes.link}
                            to={item.href}
                            key={item.href}
                        >
                            <ListItem button>
                                <ListItemAvatar>
                                    <Avatar>
                                        <LinkIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className={classes.listItemText}
                                    primary={item.title}
                                    disableTypography={true}
                                />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Paper>
        </Grow>
    );
}

export default SideBarLinks;
