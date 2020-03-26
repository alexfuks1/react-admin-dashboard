import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ReplyIcon from '@material-ui/icons/Reply';
import Grid from '@material-ui/core/Grid';
import SettingsIcon from '@material-ui/icons/Settings';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: 'auto',
        backgroundColor: theme.palette.background.paper,
    },
    x: {
        height: '10vh'
    },
    content: {
        marginLeft: '10px',
    },
    contentBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // border: '1px solid black'
    },
    avatar: {
        backgroundColor: 'blue'
    },
    name: {
        color: 'black',
        fontWeight:'bold'
    },
    time: {
        marginLeft: '10px'
    },
    title: {
        color: 'black',
        fontSize:'13px'
    },
    x2: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    ReplyIcon:{
        fontSize:'15px'
    },
    SettingsIcon:{
        fontSize:'15px'
    }
}));

const MsgContent = () => {
    const classes = useStyles();
    const [message, setMessage] = useState([
        { name: "Nina Jones", time: "5 minutes ago", title: "Hey you! it's me again" },
        { name: "Nina Jones", time: "About 20 hours ago", title: "Hey! i attached some new PSD" },
        { name: "James Smith", time: "2 days ago", title: "Good morning, you are fired!" },
        { name: "James Smith", time: "2 days ago", title: "Good morning, you are fired!" }
    ])
    return (
        <div component="nav" className={classes.root}>
            <Divider />
            {message.map((m, index) => {
                return <div key={index}>
                    <ListItem button className={classes.x} style={{backgroundColor: index === 0 || index === 1 ? "#f5f5f5":""}}>
                        <Avatar className={classes.avatar}></Avatar>
                        <Grid className={classes.x3}>
                            <Grid container className={classes.content}>
                                <Grid className={classes.contentBox}>
                                    <Typography variant="h7" className={classes.name}>
                                        {m.name}
                                    </Typography>
                                    <Typography variant="h7" className={classes.time}>
                                        {m.time}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container className={classes.content}>
                                <Grid className={classes.contentBox}>
                                    <Typography variant="h7" className={classes.title}>
                                        {m.title}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container className={classes.content}>
                                <Grid className={classes.contentBox}>
                                    <ReplyIcon className={classes.ReplyIcon}/>
                                    <SettingsIcon className={classes.SettingsIcon}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* <MoreVertIcon/> */}
                    </ListItem>
                    <Divider />
                </div>
            })}
        </div>
    );
}
export default MsgContent;
