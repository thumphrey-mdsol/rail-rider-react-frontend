import React, { Component } from 'react'

class StopCard extends Component  {
    state = {
        showForm: false,
        favoriteName: '',
    }

    handleClick = (e) => {
        e.persist()
        this.setState(prevState => ({showForm: !prevState.showForm}))
    }

    handleSubmit = (e) => {
        let favorite = {user_id: this.props.user.id, name: this.state.favoriteName, stop_id: this.props.id}
        fetch("http://localhost:3000/favorites",{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(favorite)
        })
        .then(resp=> resp.json())
        .then(this.props.route())
    }

    handleChange = (e) => {
        e.persist()
        this.setState({ favoriteName: e.target.value })
    }

    render () {

        return(                    
            
            <div >
                <div> {this.props.stop_name} </div>
                <div>{this.props.stop_lat}, {this.props.stop_lon}</div>
                <div>
                    {this.state.showForm? 
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            Add To Favorites:
                            <label>
                                <input value={this.state.favoriteName} placeholder="Favorite's Name" onChange={this.handleChange}/>
                                <input type="submit" value="submit" />
                            </label>
                        </form>
                    </div>
                    : null}
                    <button onClick={this.handleClick}>{this.state.showForm? "Cancel" : "Add to Favorites!"}</button>
                </div>

            </div> 
                
            )
        }
    
}

export default StopCard;