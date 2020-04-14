import React, { Component } from 'react'
import Trainline from './Trainline'
import { findByLabelText } from '@testing-library/react'

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
            
            <div style={{padding:10}}>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <h1> {this.props.name} </h1>
                    <button style={{maxHeight: 20, maxWidth: 100, justifyContent: "center", alignSelf: "center"}} onClick={() => this.props.deleteFav(this.props.id)} >Remove</button>
                </div>
                <div> Station: {this.state.stop.stop_name}</div>
                <div>{this.renderTrainlines()}</div>
            </div> 
                 
            )
        }
    
}

export default FavCard;