import React, { Component } from 'react'
import FavStationContainer from '../containers/FavStationContainer';

class MyStationsPage extends Component  {
    state = {
        status: []
    }
    
    refreshStatus = () => {
        
    }
    componentDidMount(){
        console.log("need to refresh the status here")
    }

    render () {
        return(                    
            
            <div >
                <FavStationContainer />
            </div> 
                
            )
        }
    
}

export default MyStationsPage;