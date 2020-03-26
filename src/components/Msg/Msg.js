import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import MsgContent from './MsgContent';
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

const Msg = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container className={classes.header}>
                    <Grid item xs>
                        <Typography className={classes.h6} variant="h6">Messages</Typography>
                    </Grid>
                    <Grid className={classes.points}>
                        <Avatar className={classes.bluePoint}>2</Avatar>
                    </Grid>
                </Grid>
                <MsgContent/>
            </Paper>
        </div>
    );
}
export default Msg;

// import React, { useState } from 'react';
// import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import Avatar from '@material-ui/core/Avatar';
// import Grid from '@material-ui/core/Grid';
// import MsgContent from './MsgContent';

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
// const Msg = () => {
//     const classes = useStyles();

//     return (
//         <div className={classes.root}>
//             <Paper className={classes.paper}>
//                 <Typography variant="h6" className={classes.header}>
//                     <Grid xs={9} spacing={1} className={classes.points}>
//                         Messages
//                     </Grid>
//                     <Grid  xs={2} spacing={1} className={classes.x}>
//                         <Avatar className={classes.bluePoint}>2</Avatar>
//                     </Grid>
//                 </Typography>
//                 <MsgContent/>
//             </Paper>
//         </div>
//     );

// }
// export default Msg;