import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Home from '../pages/Home';
import WorkFlow from '../pages/WorkFlow';
import HomeIcon from '@material-ui/icons/Home';
import DnsIcon from '@material-ui/icons/Dns';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import SettingsIcon from '@material-ui/icons/Settings';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AdjustIcon from '@material-ui/icons/Adjust';
const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(3),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: '#0C154A'
    },
    drawerHeader: {
      padding: theme.spacing(0, 0),
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(1.5),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    Link: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      height: '10vh',
      textDecoration: 'none',
      outline: 'none',
      color: 'white'
    },
    NavLinkActive: {
      borderLeft:'7px solid #537EFF',
      backgroundColor:'#021373',
      transition: '0.5s'
    },
    iconLink:{
      color:'#0C59F2',
      marginLeft:'20px'
    },
    titleLink:{
      marginLeft:'10px',
      fontWeight:'bold'
    },
    HeaderBox:{
      display:'flex',
      flexDirection:'row',
      // justifyContent:'center',
      alignItems:'center',
      width:'100%',
      height:'100%',
    },
    titleHeader:{
      color:'white',
      letterSpacing:'2px',
      fontWeight:'bold',
      marginLeft:'40px'
    },
    ChevronLeftIcon:{
      color:'white',
      // marginLeft:'30px',
    }
  }),
);

const Sidebar = ({ open, setOpen }) => {
  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <HashRouter basename='/'>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
         <Grid className={classes.HeaderBox}>
            <Typography variant="h6" className={classes.titleHeader}>
              DASHBOARD
            </Typography>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon className={classes.ChevronLeftIcon} /> :null}
            </IconButton>
         </Grid>
        </div>
        <Divider />
        <NavLink exact to="/" className={classes.Link} activeClassName={classes.NavLinkActive}>
          <HomeIcon className={classes.iconLink} />
          <Typography variant="h7" display="block" className={classes.titleLink}>
            Home
          </Typography>
        </NavLink>
        <Divider/>
        <NavLink to="/workflow" className={classes.Link} activeClassName={classes.NavLinkActive}>
          <DnsIcon className={classes.iconLink}/>
          <Typography variant="h7" display="block" className={classes.titleLink}>
            WorkFlow
          </Typography>
        </NavLink>
        <Divider/>
        <NavLink to="/statistics" className={classes.Link} activeClassName={classes.NavLinkActive}>
          <ShowChartIcon className={classes.iconLink}/>
          <Typography variant="h7" display="block" className={classes.titleLink}>
            Statistics
          </Typography>
        </NavLink>
        <Divider/>
        <NavLink to="/calendar" className={classes.Link} activeClassName={classes.NavLinkActive}>
          <DateRangeIcon className={classes.iconLink}/>
          <Typography variant="h7" display="block" className={classes.titleLink}>
            Calendar
          </Typography>
        </NavLink>
        <Divider/>
        <NavLink to="/users" className={classes.Link} activeClassName={classes.NavLinkActive}>
          <PermIdentityIcon className={classes.iconLink}/>
          <Typography variant="h7" display="block" className={classes.titleLink}>
            Users
          </Typography>
        </NavLink>
        <Divider/>
        <NavLink to="/settings" className={classes.Link} activeClassName={classes.NavLinkActive}>
          <SettingsIcon className={classes.iconLink}/>
          <Typography variant="h7" display="block" className={classes.titleLink}>
            Settings
          </Typography>
        </NavLink>
        <Divider/>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/workflow">
            <WorkFlow />
          </Route>
        </Switch>
      </main>
    </HashRouter>
  )
}
export default Sidebar;