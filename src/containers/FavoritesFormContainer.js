import React, { Component } from 'react'

class FavoritesFormContainer extends Component {

    state = {
        name: "",
        station: 1796
    }

    createOptions = () => {
        return this.props.stops.sort(function(a, b) {
            var textA = a.stop_name.toUpperCase();
            var textB = b.stop_name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        }).map(stop=> <option key={stop.id} value={stop.id}>{stop.stop_name}</option>)
    }

    handleNameChange = (e) => {
        e.persist()
        this.setState({ name: e.target.value })
    }

    handleStationChange = (e) => {
        e.persist()
        this.setState({station: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let favorite = {user_id: this.props.user.id, name: this.state.name, stop_id: this.state.station}
        fetch("http://localhost:3000/favorites",{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(favorite)
        })
        .then(resp=> resp.json())
        .then(fav => this.props.addFav(fav), this.props.history.push('/'))
    }

    render() {

        return (

            <div >
                <form onSubmit={this.handleSubmit}>
                    <div>
                        Add Favorite:
                    </div>
                    <div>
                        <label>
                            Name:
                        </label>
                        <input value={this.state.name} onChange={this.handleNameChange} />
                    </div>
                    <div>
                        <label>
                            Stations:
                        </label>
                        <select onChange={this.handleStationChange}>
                            {this.createOptions()}
                        </select>
                    </div>
                    <input value="Submit" type="submit"/>
                </form>
            </div>

        )
    }

}

export default FavoritesFormContainer;