import React, { Component } from 'react'
import FavStationContainer from '../containers/FavStationContainer';

class MyStationsPage extends Component  {
    state = {
        status: []
    }
    
    refreshStatus = () => {
        
    }
    routeForm = () => {
        this.props.history.push('/favorites_form')
    }

    componentDidMount(){
        console.log("need to refresh the status here")
    }

    render () {
        return(                    
            
            <div style={{margin:15}}>
                <button onClick={this.routeForm} style={{justifyContent: "end"}}> Add Favorite </button>
                <FavStationContainer {...this.props}/>
            </div> 
                
            )
        }
    
}

export default MyStationsPage;




