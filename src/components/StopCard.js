import React, { Component } from 'react'

class StopCard extends Component  {
   

    render () {

        return(                    
            
            <div >
                <div> {this.props.stop_name} </div>
                <div>{this.props.stop_lat}, {this.props.stop_lon}</div>
            </div> 
                
            )
        }
    
}

export default StopCard;