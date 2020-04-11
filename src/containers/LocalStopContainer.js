import React, { Component } from 'react' 
import ClosestStationsCard from '../components/ClosestStationsCard'

class LocalStopContainer extends Component  {
    state = {
        closest: [],
    }

    // when component mounts get lat/long
    componentDidMount(){
        navigator.geolocation.getCurrentPosition((position)=> this.displayLocationInfo(position))
    }

    // get lat/long and set them to state, also get the distances from me to stations
    displayLocationInfo=(position)=> {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        this.findDistances(lat, lon)
    }
    // find didstances from me to stations and then find the closest 4
    findDistances = (lat, lon) => {
        let arr = []
        if (lat&&lon){
            this.props.stops.map(stop=> arr.push([Math.sqrt((stop.stop_lat-lat)**2 + (Math.abs(stop.stop_lon)-Math.abs(lon))**2), stop.id]))
        }
        this.setState({closest: arr.sort().slice(0,4)})
    }
    // find the closest 4 stations and render them
    findClosest = () =>{
        if(this.state.closest){
            return this.state.closest.map(innerArr => {
                let thing = this.props.stops.filter(stop=>stop.id===innerArr[1])[0]
                return <ClosestStationsCard statuses={this.props.statuses} key={innerArr[1]} name={thing.stop_name} id={thing.id}/>
            })
        }
    }

    render () {

        return(                    
            <div >
                <div >
                    <div>
                        {this.findClosest()}
                    </div>
                </div>
            </div> 
            )
        }
    
}

export default LocalStopContainer;