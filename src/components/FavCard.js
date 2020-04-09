import React, { Component } from 'react'

class FavCard extends Component  {
   state= {
       stop:{}
   }

   getStop = () => {
        return this.props.stops.filter(stop=> stop.id === this.props.stop_id)
   }

    componentDidMount(){
        this.setState({stop: this.getStop()})  
    }

    render () {

        return(                    
            
            <div style={{verticalMargin: 20, flex: 1}}>
                <title> {this.props.name} </title>
                <div> {this.state.stop.name} </div>
            </div> 
                
            )
        }
    
}

export default FavCard;