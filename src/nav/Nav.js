import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link, NavLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


export default function ButtonAppBar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Link to="/favorites" >
                            Rail Rider
                        </Link>
                    </IconButton>
                    <Typography edge="start" variant="7" className={classes.title}>
                        <NavLink to="/all_stops" >
                            All Stops
                        </NavLink>
                    </Typography>
                    <Typography edge="start" variant="7" className={classes.title}>
                        <NavLink to="/stops_near_me" >
                            Nearby Stops
                        </NavLink>
                    </Typography>
                    <Button color="inherit" >{ 
                        props.user? 
                            <NavLink to="/Logout" >
                                Logout
                            </NavLink> :
                             <NavLink to="/Login" >
                             Login
                            </NavLink>
                             }
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}