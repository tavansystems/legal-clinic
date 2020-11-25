import React, { useContext} from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import LangContext from '../../utils/LangContext';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  link: {
    textDecoration: "none"
  }
}));


export default function BreadCrumbs({path}) {
  const classes = useStyles();
  const {literals} = useContext(LangContext)
  const currentTitle = path[path.length - 1] ? path[path.length - 1]['title'] : "Not Found"

  return (
    <div className={classes.root}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link className={classes.link} color="inherit" to="/">
          {literals.home}
        </Link>
        {path.slice(0, path.length -1).map(link => (
          <Link className={classes.link} key={link.path} to={link.path} color="inherit">
            {link.title}
          </Link>)
        )}
        <Typography color="textPrimary">{currentTitle}</Typography>
      </Breadcrumbs>
    </div>
  );
}

BreadCrumbs.defaultProps = {
  path: [{}]
};