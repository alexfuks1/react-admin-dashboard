import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import ActivityContent from './ActivityContent';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(0),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '8vh',
        border: '1px solid hidden'
    },
    points: {
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid black',
        marginLeft: 'auto',
        marginRight: '10px',
        border: '1px solid hidden'
    },
    bluePoint: {
        backgroundColor: 'blue',
        height: '5vh',
        width: '5vh',
        // marginRight: '10px'
    },
    x: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        border: '1px solid black',
    },
    h6:{
        color:'black',
        marginLeft:'10px'
    },
    h: {
        border: '1px solid black',
        width: 'auto',
    }
}));

const Activity = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container className={classes.header}>
                    <Grid item xs>
                        <Typography className={classes.h6} variant="h6">Activity</Typography>
                    </Grid>
                    <Grid className={classes.points}>
                        <Avatar className={classes.bluePoint}>10</Avatar>
                    </Grid>
                </Grid>
                <ActivityContent/>
            </Paper>
        </div>
    );
}
export default Activity;
// import React, { useState } from 'react';
// import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import ActivityContent from './ActivityConten';
// import Avatar from '@material-ui/core/Avatar';
// import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles(theme => ({
//     root: {
//         flexGrow: 1,
//     },
//     paper: {
//         padding: theme.spacing(0),
//         textAlign: 'left',
//         color: theme.palette.text.secondary,
//     },
//     header: {
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',
//         height: '8vh',
//         marginLeft: '15px',
//         border:'1px solid hidden'
//     },
//     points: {
//         display: 'flex',
//         flexDirection: 'row',
//         // border: '1px solid black',
//     },
//     pinkPoint: {
//         float: 'right',
//         backgroundColor: '#e91e63',
//         height: '5vh',
//         width: '5vh',
//         marginRight: '15px',
//     },
//     bluePoint: {
//         backgroundColor: 'blue',
//         height: '5vh',
//         width: '5vh',
//     },
//     x: {
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'flex-end',
//         border:'1px solid black',
//     }
// }));

// const Activity = () => {
//     const classes = useStyles();
//     return (
//         <div className={classes.root}>
//             <Paper className={classes.paper}>
//                 <Typography variant="h6" className={classes.header}>
//                     <Grid xs={9} spacing={1} className={classes.points}>
//                         Activity
//                     </Grid>
//                     <Grid  xs={2} spacing={1} className={classes.x}>
//                         <Avatar className={classes.pinkPoint}></Avatar>
//                         <Avatar className={classes.bluePoint}></Avatar>
//                     </Grid>
//                 </Typography>
//                 <ActivityContent />
//             </Paper>
//         </div>
//     );
// }
// export default Activity;