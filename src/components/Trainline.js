import React, { Component } from 'react'

class Trainline extends Component  {
   state= {
       status: "",
       description: "",
       showMore: false,
   }

   handleClick = () => {
       this.setState(prevState=> ({showMore: !prevState.showMore}) )
   }

    getStatus = () => {
        if(this.props.statuses){
            let s =  this.props.statuses.filter(lineGroup=> lineGroup.name.includes(this.props.name))[0]
            return (
                <div>
                    <div>
                        <b>Status:</b> {s.status}
                        <button onClick={this.handleClick}>{this.state.showMore? "See less..." : "See more..." }</button>
                    </div>
                    {this.state.showMore && <div><b>Description:</b> {s.text}</div>}
                    <br/>
                    <div>
                        <b> Departures: </b> 
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