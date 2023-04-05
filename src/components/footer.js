import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: `${theme.spacing(2)}px 0`,
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    color: theme.palette.primary.contrastText,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body1" className={classes.text}>
        Made by Junseok Shim - Source Code : 
        <Link href="https://github.com/example" target="_blank" rel="noopener" className={classes.link}>
          GitHub Link
        </Link>
      </Typography>
    </div>
  );
}

export default Footer;