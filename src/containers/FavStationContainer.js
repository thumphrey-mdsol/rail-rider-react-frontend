import React, { Component } from 'react'
import FavCard from '../components/FavCard'

class FavStationContainer extends Component  {
    
    renderFavStation = () => {
        return this.props.favStations.map(station=> <FavCard key={station.id} {...station} user={this.props.user}/>)
    }

    render () {

        return(                    
            
            <div style={{verticalMargin: 20, flex:1}}>
                {this.renderFavStation()}
            </div> 
                
            )
        }
    
}

export default FavStationContainer;