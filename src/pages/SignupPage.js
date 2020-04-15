import React, { Component } from 'react'
import UiSignup from '../components/UiSignup'

class SignupPage extends Component  {
 
    render () {

        return(                    
            <div >
                <UiSignup {...this.props}/>
            </div> 
            )
        }
    
}

export default SignupPage;