import React, { Component } from 'react'
import StopCard from '../components/StopCard';
import SearchBar from '../components/SearchBar';


class StopsContainer extends Component  {
   state = {
       search: '',
   }

   onChangeSearch = (e) => {
        e.persist()
        this.setState({search: e.target.value})
   }
   
    renderStops = () => {
       return this.props.stops.filter(stop=> stop.stop_name.includes(this.state.search)).map(stop=><StopCard key={stop.id} {...stop}/>)
    }

    render () {

        return(                    
            
            <div >
                <SearchBar onChangeSearch={this.onChangeSearch} searchValue={this.state.search}/>
                {this.renderStops()}
            </div> 
                
            )
        }
    
}

export default StopsContainer;



