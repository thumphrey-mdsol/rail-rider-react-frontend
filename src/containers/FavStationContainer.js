import React, { Component } from 'react'
import FavCard from '../components/FavCard'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    }
})
const FavStationContainer = (props) =>  {
    const classes = useStyles(props)
    
    const renderFavStation = () => {
        return props.favStations.map(station=> 
            <Grid item md={6}>
                <Paper elevation={3}>
                    <FavCard key={station.id} {...station} statuses={props.statuses} deleteFav={props.deleteFav} user={props.user}/>
                </Paper>
            </Grid>
        )
    }

  

        return(                    
            
            <Grid container className={classes.root} spacing={3} >
                {renderFavStation()}
            </Grid> 
                
        )
    
}

export default FavStationContainer;