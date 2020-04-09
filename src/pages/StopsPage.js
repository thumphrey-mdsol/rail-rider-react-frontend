import React, { Component } from 'react'
import StopsContainer from '../containers/StopsContainer';

class StopsPage extends Component  {
 
    render () {

        return(                    
            <div >
                <StopsContainer {...this.props}/>
            </div> 
            )
        }
    
}

export default StopsPage;