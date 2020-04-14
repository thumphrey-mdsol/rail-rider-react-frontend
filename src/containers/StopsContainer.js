import React, { useState } from 'react'
import StopCard from '../components/StopCard';
import SearchBar from '../components/SearchBar';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    }
})

const StopsContainer = (props)  => {
   const [search, setSearch] = useState('')
   const classes = useStyles(props)

   const onChangeSearch = (e) => {
        e.persist()
        setSearch(e.target.value.toLowerCase())
   }
   
    const renderStops = () => {
       return props.stops.filter(stop=> stop.stop_name.toLowerCase().includes(search)).map(stop=>
        <Grid key={stop.id} item md={3}>
            <Paper>
                <StopCard key={stop.id} {...stop}user={props.user} addFav={props.addFav} route={sendToFavorites} />
            </Paper>
        </Grid>
       )
    }

    const sendToFavorites = () => {
        props.history.push('/favorites')
    
    }
    return(                    
        
        <div >
            <SearchBar onChangeSearch={onChangeSearch} searchValue={search}/>
            <Grid container spacing={2}>
                {renderStops()}
            </Grid>
        </div> 
            
        )
}

export default StopsContainer;



