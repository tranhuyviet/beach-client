import React from 'react';
import { useStyles } from './Footer.style';
import { Paper, Typography } from '@material-ui/core';

const Footer = () => {
    const classes = useStyles();
    return (
        <Paper elevation={0} square className={classes.footer}>
            <Typography className={classes.text}>
                {' '}
                &copy; {new Date().getFullYear()} by Green Apples
            </Typography>
        </Paper>
    );
};

export default Footer;
