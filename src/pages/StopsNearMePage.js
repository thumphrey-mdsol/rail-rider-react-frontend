import React, { Component } from 'react'
import LocalStopContainer from '../containers/LocalStopContainer';

class StopsNearMePage extends Component  {
    render () {
        console.log(1)

        return(                    
            <div style={{margin:15}}>
                <LocalStopContainer statuses={this.props.statuses} stops={this.props.stops}/>
            </div> 
            )
        }
    
}

export default StopsNearMePage;