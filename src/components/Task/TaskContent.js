import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: 'auto',
        backgroundColor: theme.palette.background.paper,

    },
    x: {
        height: '10vh',
        border:'1xp solid red',
    },
    x1: {
        display:'flex',
        flexDirection:'colunm',
        border:'1px solid black'
    },
    content: {
        marginLeft: '10px'
    },
    avatar: {
        backgroundColor: 'blue'
    },
    box:{
        display:'flex',
        flexDirection:'column',
        border:'1px solid hidden',
        width:'85%',
        height:'10vh'
    },
    box1:{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        border:'1px solid hidden',
        height:'4vh',
        marginTop:'4.5px'
    },
    box2:{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        border:'1px solid hidden',
        height:'4vh'
    },
    t:{
        fontWeight: 'bold',
        color:'black',
        marginLeft:'10px'
    },
    AccessTimeIcon:{
        fontSize:'16px',
        marginLeft:'8px'
    },
    time:{
        marginLeft:'2px'
    }
}));

const TaskContent = () => {
    const classes = useStyles();
    const [task, setTask] = useState([
        { title: "New website for Symo.co", circle: "N", time: "5 days delays" },
        { title: "Free business PSD Template", circle: "F", time: "2 days delays" },
        { title: "New logo for JCD.pl", circle: "N", time: "5 days left" },
        { title: "Free Icons Set vol.3", circle: "F", time: "10 days left" },
        // {title:"New Tamplate for React.js",circle:"N"}
    ]);
    return (
        <div component="nav" className={classes.root}>
            <Divider />
            {task.map((t, index) => {
                return <div key={index}>
                    <ListItem button className={classes.x}>
                        <Avatar className={classes.avatar}>{t.circle}</Avatar>
                            <Grid className={classes.box}>
                                <Grid className={classes.box1}>
                                    <Typography variant="h7" className={classes.t}>
                                        {t.title}
                                    </Typography>
                                </Grid>
                                <Grid className={classes.box2}>
                                    <AccessTimeIcon className={classes.AccessTimeIcon} style={{color: index === 0 || index === 1 ? "#e91e63":""}}/>
                                    <Typography variant="h7" className={classes.time} style={{color: index === 0 || index === 1 ? "#e91e63":""}}>
                                        {t.time}
                                    </Typography>
                                </Grid>
                            </Grid>
                        <MoreVertIcon/>
                    </ListItem>
                    <Divider />
                </div>
            })}
        </div>
    );
}
export default TaskContent;
{/* <ListItemText className={classes.content} primary={t.title} />
<MoreVertIcon/>
<Grid className={classes.x1}>
    <ListItemText className={classes.content} secondary={t.time} />
    <AccessTimeIcon/>
</Grid> */}
