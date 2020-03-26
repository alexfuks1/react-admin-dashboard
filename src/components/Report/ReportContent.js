import React, { useState } from 'react';
import Chart from './Chart';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    grid: {
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'center',
        // border: '1px solid black',
        height:'30vh'
    },
    
    
}));
const ReportContent=()=>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
             <Grid container className={classes.grid}>
             <Chart/>
            </Grid>
        </div>
    )
}
export default ReportContent;