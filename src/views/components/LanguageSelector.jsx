import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import PublicIcon from '@material-ui/icons/Public';

import SupportedLanguages from '../../utils/SupportedLanguages';
import LangContext from "../../utils/LangContext";
import PathContext from "../../utils/PathContext";


const useStyles = makeStyles((theme) => ({
    langIcon: {
        fontSize: "16px",
        marginRight: "10px",
    },
    selectOption: {
        display: "inline",
    },
    select: {
        '&:focus': {
            background: "inherit"
        },
    },
    inputInput: {
        padding: theme.spacing(0, 1),
        border: "none",
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '50ch'
            }
        }
    }
}));

function LanguageSelector() {
    const classes = useStyles()
    const { slug } = useContext(LangContext)
    const { lang, path } = useContext(PathContext)

    return (
        <Select
            labelId="lang-selector"
            id="lang-selector"
            value={lang === "/" ? "None" : slug}
            label="Language"
            classes={{ nativeInput: classes.inputInput, select: classes.select}}
            disableUnderline
        >
            <MenuItem value="None" disabled default>
                <PublicIcon className={classes.langIcon} />
                <Typography className={classes.selectOption}>
                    Select Your Language
                </Typography>    
            </MenuItem>
            {Object.keys(SupportedLanguages).map(lang => (
                <MenuItem to={"/" + SupportedLanguages[lang].slug + "/" + path} component={Link} key={SupportedLanguages[lang].slug} value={SupportedLanguages[lang].slug}>
                    <PublicIcon className={classes.langIcon} />
                    <Typography className={classes.selectOption}>
                        {SupportedLanguages[lang].title}
                    </Typography>
                </MenuItem>
            ))}
        </Select>
    )
}

export default LanguageSelector


