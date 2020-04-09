import React, { Component } from 'react'
import StopCard from '../components/StopCard';
import SearchBar from '../components/SearchBar';


class StopsContainer extends Component  {
   renderStops = () => {
       return this.props.stops.map(stop=><StopCard key={stop.id} {...stop}/>)
    }

    render () {

        return(                    
            
            <div >
                <SearchBar />
                {this.renderStops()}
            </div> 
                
            )
        }
    
}

export default StopsContainer;