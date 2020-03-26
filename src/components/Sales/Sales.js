import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SalesContent from '../Sales/SalesContent';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        height: '36vh'
    },
}));

const Sales = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Typography variant="h5">
                    Sales
                </Typography>
                <SalesContent/>
            </Paper>
        </div>
    );
}
export default Sales;