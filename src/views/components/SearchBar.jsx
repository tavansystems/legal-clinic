

import React, { useContext, useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import LangContext from "../../utils/LangContext";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import SearchResultList from './SearchResultList';

import NavigatorOptions from '../../utils/NavigatorOptions';

const useStyles = makeStyles((theme) => ({
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function Header() {
    const classes = useStyles();
    const [searchValue, setSearchValue] = useState("")
    const { literals } = useContext(LangContext);

    const optionsFilter = option => {
        const searchValLowerCase = searchValue.toLowerCase()
        if(option.content !== null) return option.content.toLowerCase().includes(searchValLowerCase)
        return option.title.toLowerCase().includes(searchValLowerCase)
    }

    return (
        <div>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder={literals.search + "…"}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
            {
                searchValue.length > 0
                    ? <SearchResultList results={NavigatorOptions.filter(optionsFilter)} />
                    : <></>
            }
        </div>
    )
}


