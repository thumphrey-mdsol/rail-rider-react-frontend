import React, { Component } from 'react'
import Trainline from './Trainline'


class ClosestStationsCard extends Component  {
    state= {
        stop:null
    }

    componentDidMount(){
        fetch(`http://localhost:3000/stops/${this.props.id}`)
        .then(resp=> resp.json())
        .then(stop=> this.setState({stop}))
    }

    renderTrainlines = () => {
        if(this.state.stop){
            return this.state.stop.trainlines.map((trainline, index)=>
                <Trainline statuses={this.props.statuses} key={index} {...trainline}/>
            )
        }
    }

    render () {
        console.log("InsideStation")
        return(                    
            
            <div style={{padding: 10, flex: 1}}>
                <div style={{}}>
                    <h1>{this.props.name}</h1>
                </div>
                <div>{this.renderTrainlines()}</div>
            </div> 
                 
            )
        }
    
}

export default ClosestStationsCard;