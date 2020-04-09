import React, { Component } from 'react'

class SearchBar extends Component  {
   

    render () {

        return(                    
            
            <div >
                <label>
                    Search Stations: 
                    <input value={this.props.searchValue} onChange={this.props.onChangeSearch}/>
                </label>
                <button>Search</button>
            </div> 
                
            )
        }
    
}

export default SearchBar;