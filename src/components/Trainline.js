import React, { Component } from 'react'

class Trainline extends Component  {
   state= {
       statuses: null,
       status: "",
       description: "",
   }

    componentDidMount(){
        this.getFetch()
    }

    getFetch = async() => {
        await fetch(`http://localhost:3000/get_status`)
        .then(resp=> resp.json())
        .then(console.log)
        await this.getStatus()
    }
    // get => this.setState({statuses: get.service.subway.line})
    getStatus = async() => {
        if(this.state.statuses){
            let s =  this.state.statuses.filter(group=> group.name.includes(this.props.name))[0]
            // need to parse status better
            this.setState({status: s.status, description: s.text})
        }
    }

    render () {

        return(                    
            
            <div style={{verticalMargin: 20, flex: 1}}>
                <div>
                    Line: {this.props.name}
                </div>
                <div>Status: {this.state.status}</div>
                <div>
                    Description: {this.state.description}
                </div>
            </div> 
                 
            )
        }
    
}

export default Trainline;