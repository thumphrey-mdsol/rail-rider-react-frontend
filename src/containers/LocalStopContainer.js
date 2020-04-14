import React, { useState, useEffect } from 'react' 
import ClosestStationsCard from '../components/ClosestStationsCard'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    }
})

const LocalStopContainer = (props) => {
    const classes = useStyles(props)
    const [closest, setClosest] = useState([])

    // when component mounts get lat/long
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=> displayLocationInfo(position))
    }, [closest])

    // get lat/long and set them to state, also get the distances from me to stations
    const displayLocationInfo=(position)=> {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        findDistances(lat, lon)
    }
    // find didstances from me to stations and then find the closest 4
    const findDistances = (lat, lon) => {
        let arr = []
        if (lat&&lon){
            props.stops.map(stop=> arr.push([Math.sqrt((stop.stop_lat-lat)**2 + (Math.abs(stop.stop_lon)-Math.abs(lon))**2), stop.id]))
        }
        setClosest(arr.sort().slice(0,4))
    }
    // find the closest 4 stations and render them
    const findClosest = () =>{
        if(closest){
            return closest.map(innerArr => {
                let thing = props.stops.filter(stop=>stop.id===innerArr[1])[0]
                return (
                    <Grid item md={6}>
                        <Paper elevation={3}>
                            <ClosestStationsCard statuses={props.statuses} key={innerArr[1]} name={thing.stop_name} id={thing.id}/>
                        </Paper>
                    </Grid>
                )
            })
        }
    }
        return(                    
            <Grid container className={classes.root} spacing={3}>
                {findClosest()}
            </Grid> 
            )
}

export default LocalStopContainer;