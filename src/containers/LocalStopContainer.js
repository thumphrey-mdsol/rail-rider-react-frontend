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

    const [position, setPosition] = useState({});
    const [error, setError] = useState(null);
  
    const onChange = ({coords}) => {
        setPosition({
        latitude: coords.latitude,
        longitude: coords.longitude,
        });
    };
    const onError = (error) => {
        setError(error.message);
    };
    const findDistances = () => {
        let arr = []
        let lat = position.latitude
        let lon = position.longitude
        if ( position ){
            props.stops.map(stop=> arr.push([Math.sqrt((stop.stop_lat-lat)**2 + (Math.abs(stop.stop_lon)-Math.abs(lon))**2), stop.id]))
        }
        return findClosest(arr.sort().slice(0,4))
    }

    useEffect(() => {
        const geo = navigator.geolocation;
        if (!geo) {
        setError('Geolocation is not supported');
        return;
        }
        let watcher = geo.watchPosition(onChange, onError);
        return () => geo.clearWatch(watcher);
    }, []);

    const findClosest = (arr) =>{
        console.log(position, error, arr)
        if(arr){
            return arr.map(innerArr => {
                let station = props.stops.filter(stop=>stop.id===innerArr[1])[0]
                return (
                    <Grid key={innerArr[1]} item md={6}>
                        <Paper elevation={3}>
                            <ClosestStationsCard statuses={props.statuses} key={innerArr[1]} name={station.stop_name} id={station.id}/>
                        </Paper>
                    </Grid>
                )
            })
        }
    }

    return(                    
        <Grid container className={classes.root} spacing={3}>
            {findDistances()}
        </Grid> 
        )
}

export default LocalStopContainer;