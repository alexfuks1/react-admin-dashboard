import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PieChar from './PieChar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

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
        width: '100%',
        height: '28vh',
        border: '1px solid hidden'
    },
    pie: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        height: 'auto',
        border: '1px solid hidden'
    },
    data: {
        display: 'flex',
        flexDirection: 'row',
        width: '40%',
        height: '100%',
        border: '1px solid hidden'
    },
    dataPoints: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        border: '1px solid hideen'
    },
    dataBox: {
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid hidden',
        margin: '7.5px 0px'
    },
    Avatar: {
        width: '3vh',
        height: '3vh'
    },
    h7: {
        marginLeft: '10px',
        color: 'black'
    },
    pieTitle:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position:'relative',
        left:'185px'
    },
    h7num:{
        fontSize:'20px',
        fontWeight:'bold',
        color:'#0F57CF'
    },
    h7title:{
        fontSize:'15px',
        fontWeight:'bold',
        color:'black'
    }
}));

const SalesContent = () => {
    const classes = useStyles();
    const [points, setPoints] = useState([
        { id: "#0531C5", title: "Websites" },
        { id: "#0C59F2", title: "Logo" },
        { id: "#0F57CF", title: "Social Media" },
        { id: "#1B5BB2", title: "Adwords" },
        { id: "#1B5BB2", title: "E-commerce" }
    ])
    return (
        <div className={classes.root}>
            <Grid container className={classes.grid}>
                <Grid item className={classes.pie}>
                    <Grid className={classes.pieTitle}>
                        <Typography variant="h7" className={classes.h7num}>1,560</Typography>
                        <Typography variant="h7" className={classes.h7title}>Sales</Typography>
                    </Grid>
                   <PieChar/>
                </Grid>
                <Grid item className={classes.data}>
                    <Grid item className={classes.dataPoints}>
                        {points.map((p, index) => {
                            return <Grid key={index} className={classes.dataBox}>
                                <Avatar className={classes.Avatar} style={{ backgroundColor: p.id }}></Avatar>
                                <Typography variant="h7" className={classes.h7}>{p.title}</Typography>
                            </Grid>
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
export default SalesContent;
