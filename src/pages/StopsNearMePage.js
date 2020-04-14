import React, { Component } from 'react'
import LocalStopContainer from '../containers/LocalStopContainer';

class StopsNearMePage extends Component  {
 
    render () {

        return(                    
            <div style={{margin:15}}>
                <LocalStopContainer statuses={this.props.statuses} stops={this.props.stops}/>
            </div> 
            )
        }
    
}

export default StopsNearMePage;