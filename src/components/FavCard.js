import React, { Component } from 'react'
import Trainline from './Trainline'

class FavCard extends Component  {
   state= {
       stop: {}
   }

    componentDidMount(){
        fetch(`http://localhost:3000/stops/${this.props.stop_id}`)
        .then(resp=> resp.json())
        .then(stop=> this.setState({stop}))
    }
    renderTrainlines = () => {
        if(this.state.stop.trainlines){
            return this.state.stop.trainlines.map((trainline, index)=>
                <Trainline key={index} statuses={this.props.statuses} {...trainline}/>
            )
        }
    }

    render () {

        return(                    
            
            <div style={{verticalMargin: 20, flex: 1}}>
                <div>
                    <h1> {this.props.name} </h1>
                    <button onClick={() => this.props.deleteFav(this.props.id)}>Remove</button>
                </div>
                <div> Station: {this.state.stop.stop_name}</div>
                <div>{this.renderTrainlines()}</div>
            </div> 
                 
            )
        }
    
}

export default FavCard;