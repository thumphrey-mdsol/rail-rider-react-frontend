import React, { Component } from 'react'
import FavCard from '../components/FavCard'

class FavStationContainer extends Component  {
    
    renderFavStation = () => {
        return this.props.favStations.map(station=> <FavCard key={station.id} {...station} stops={this.props.stops}/>)
    }

    render () {

        return(                    
            
            <div style={{verticalMargin: 20, flex:1}}>
                {/* Add Favorites button */}
                {this.renderFavStation()}
            </div> 
                
            )
        }
    
}

export default FavStationContainer;