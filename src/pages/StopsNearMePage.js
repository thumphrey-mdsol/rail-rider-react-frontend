import React, { Component } from 'react'
import LocalStopContainer from '../containers/LocalStopContainer';

class StopsNearMePage extends Component  {
 
    render () {

        return(                    
            <div >
                <LocalStopContainer stops={this.props.stops}/>
            </div> 
            )
        }
    
}

export default StopsNearMePage;