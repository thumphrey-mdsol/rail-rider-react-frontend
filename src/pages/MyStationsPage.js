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
            
            <div style={{verticalMargin: 20, flex:1}}>
                <button onClick={this.routeForm}> Add Favorite </button>
                <FavStationContainer {...this.props}/>
            </div> 
                
            )
        }
    
}

export default MyStationsPage;