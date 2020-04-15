import React from 'react';
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
    title1:{
        marginRight: 10
    }
}));


export default function ButtonAppBar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Link id="inactive" activeId="activeLink" to="/favorites" >
                            Rail Rider
                        </Link>
                    </IconButton>
                    <Typography edge="start" variant="7" className={classes.title1}>
                        <NavLink id="inactive" activeId="activeLink" to="/all_stops" >
                            All Stops
                        </NavLink>
                    </Typography>
                    <Typography edge="start" variant="7" className={classes.title}>
                        <NavLink id="inactive" activeId="activeLink" to="/stops_near_me" >
                            Nearby Stops
                        </NavLink>
                    </Typography>
                    <Button color="inherit" >{ 
                             <NavLink id="inactive" activeId="activeLink" to="/Login" >
                             Login/Signup
                            </NavLink>
                             }
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}