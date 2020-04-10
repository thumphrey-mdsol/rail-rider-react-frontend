import React, { Component } from 'react' 
import ClosestStationsCard from '../components/ClosestStationsCard'

class LocalStopContainer extends Component  {
    state = {
        lat: null,
        lon: null,
        distances: [],
    }
    
    componentDidMount(){
        navigator.geolocation.getCurrentPosition((position)=> this.displayLocationInfo(position))
        this.findDistances()
        
    //     fetch('https://immense-journey-06214.herokuapp.com/schedule?stopIds=[635,101]').then(response => response.json()).then(console.log) 
    }

    displayLocationInfo=(position)=> {
        const lon = position.coords.longitude;
        const lat = position.coords.latitude;
        this.setState({lon, lat})
        console.log(position)
    }

    findDistances = () => {
        if(this.state.lat && this.state.lon){
            this.props.stops.map(stop=> this.setState(prevState => ({distances: [...prevState.distances, [Math.sqrt((stop.stop_lat-this.state.lat)**2 + (Math.abs(stop.stop_lon)-Math.abs(this.state.lon))**2), stop.id]]})))
        }
    }

    findClosest = () =>{
        return this.state.distances.sort().slice(0,4).map(arr => <ClosestStationsCard key={arr[1]} {...this.props.stops.filter(stop=>stop.id===arr[1])}/> )
    }

    render () {

        return(                    
            <div >
                <div >
                    {}
                    <div>
                        <button onClick={this.findDistances}>Find Distances</button>
                        {this.state.distances? this.findClosest():null}
                        Lat:{this.state.lat}, Lon {this.state.lon}
                        Distances:{this.state.distances.sort()}
                    </div>
                </div>

            </div> 
            )
        }
    
}

export default LocalStopContainer;