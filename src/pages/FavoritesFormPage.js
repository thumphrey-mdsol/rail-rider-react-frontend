import React, { Component } from 'react'
import FavoritesFormContainer from '../containers/FavoritesFormContainer';

class FavoritesFormPage extends Component  {
 
    render () {

        return(                    
            <div >
                <FavoritesFormContainer user={this.props.user} stops={this.props.stops} history={this.props.history} addFav={this.props.addFav}/>
            </div> 
            )
        }
    
}

export default FavoritesFormPage;