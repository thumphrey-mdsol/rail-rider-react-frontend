import React, { Component } from 'react'
import FavCard from '../components/FavCard'

class FavStationContainer extends Component  {

    renderFavStation = () => {
        return this.props.favStations.map(station=> <FavCard key={station.id} {...station}/>)
    }

    render () {

        return(                    
            
            <div >
                {this.renderFavStation()}
            </div> 
                
            )
        }
    
}

export default FavStationContainer;