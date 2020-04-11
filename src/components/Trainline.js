import React, { Component } from 'react'

class Trainline extends Component  {
   state= {
       status: "",
       description: "",
   }

    getStatus = () => {
        if(this.props.statuses){
            let s =  this.props.statuses.filter(lineGroup=> lineGroup.name.includes(this.props.name))[0]
            // need to parse status better
            
            return (
                <div>
                    <div>
                        Status: {s.status}
                    </div>
                    <div>
                        Description: {s.text}
                    </div>
                </div>
            )
        }
    }

    render () {

        return(                    
            
            <div style={{verticalMargin: 20, flex: 1}}>
                <h3>
                    Line: {this.props.name}
                </h3>
                {this.getStatus()}
            </div> 
                 
            )
        }
    
}

export default Trainline;