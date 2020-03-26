import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: 'auto',
        backgroundColor: theme.palette.background.paper,
        // backgroundColor: 'green'

    },
    x: {
        height: '10vh',
        // border: '1px solid black'
    },
    content: {
        marginLeft: '10px'
    },
    avatar: {
        backgroundColor: 'blue',
        marginLeft: '-20px'
    },
    Divider: {
        backgroundColor:'white'
    },
    box: {
        width: '3vh',
        height: '10.2vh',
        borderColor: 'f5f5f5',
    },
    name: {
        color: 'black',
        fontWeight: 'bold'
    },
    contentBox: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid hidden',
        height:'10vh'
    },
    contentBox1: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        border: '1px solid hidden',
        height:'5vh',
        margin: '7.5px 6px'
    },
    contentBox2: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        border: '1px solid hidden',
        height:'5vh',
        margin: '-15px 5px'
    },
    title: {
        color: 'black',
        marginLeft: '5px',
        fontSize:'13px'
    },
    body:{
        color: 'black',
        fontSize:'13px',
        marginLeft: '5px',
        fontWeight: 'bold'
    },
    AccessTimeIcon:{
        fontSize:'16px'
    }
}));
const ActivityContent = () => {
    const classes = useStyles();
    const [active, setActive] = useState([
        { name: "Nina Jones", title: "added a new project", body: "Free Ui Kit", time: "Just now", line: 0 },
        { name: "James Smith", title: "comment project", body: "PSD Template", time: "40 minutes ago", line: 1 },
        { name: "Alex Clooney", title: "completed task", body: "Symu Website", time: "1 hour ago" },
        { name: "Alex Clooney", title: "completed task", body: "Symu Website", time: "1 hour ago" }
    ])
    return (
        <div component="nav" className={classes.root}>
            <Divider />
            {active.map((a, index) => {
                return <div key={index}>
                    <ListItem button className={classes.x}>
                        <Box borderRight={1} className={classes.box} />
                        <Avatar className={classes.avatar}></Avatar>
                        <Grid className={classes.contentBox}>
                            <Grid className={classes.contentBox1}>
                            <Typography variant="h7" className={classes.name}>
                                {a.name}
                            </Typography>
                            <Typography variant="h7" className={classes.title}>
                                {a.title}
                            </Typography>
                            <Typography variant="h7" className={classes.body}>
                                {a.body}
                            </Typography> 
                            </Grid>
                            <Grid className={classes.contentBox2}>
                                <AccessTimeIcon className={classes.AccessTimeIcon}/>
                                {a.time}
                            </Grid>
                        </Grid>
                    </ListItem>
                    <Divider className={classes.Divider} />
                </div>
            })}
        </div>
    );
}
export default ActivityContent;
{/* <Typography variant="h7" className={classes.name}>
                                {a.name}
                            </Typography>
                            <Typography variant="h7" className={classes.title}>
                                {a.title}
                            </Typography>
                            <Typography variant="h7" className={classes.body}>
                                {a.body}
                            </Typography> */}
