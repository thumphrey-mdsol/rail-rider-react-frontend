import React from 'react';
import {
  Route, 
  Switch
} from 'react-router-dom';
import './App.css'
import MyStationsPage from './pages/MyStationsPage'
import StopsPage from './pages/StopsPage'
import FavoritesFormPage from './pages/FavoritesFormPage'
import StopsNearMePage from './pages/StopsNearMePage'
import Nav from './nav/Nav'


class App extends React.Component {
  state ={
    user_id: 30,
    user: {},
    stops: [],
    favorites: [],
    statuses: [],
  }

  componentDidMount(){
    // get the user
    fetch(`http://localhost:3000/users/${this.state.user_id}`)
    .then(resp=>resp.json())
    .then(user => this.setState({user}))
    // get the stops
    fetch(`http://localhost:3000/stops`)
    .then(resp=>resp.json())
    .then(stops => this.setState({stops}) )
    // get favstops
    fetch(`http://localhost:3000/favorites`)
    .then(resp=>resp.json())
    .then(favorites => this.setState({favorites}))
    fetch(`http://localhost:3000/get_status`)
    .then(resp=> resp.json())
    .then(statuses => this.setState({statuses: statuses}))
  }
  componentDidUpdate(){
  }

  addFav = (fav) => {
    this.setState(prevState=> ({favorites: [...prevState.favorites, fav]}))
  }

  deleteFav = (id) => {
    fetch(`http://localhost:3000/favorites/${id}`, { method: "DELETE" })
    .then(resp=>resp.json())
    .then(fave => 
      {let arr = this.state.favorites.filter(fav => fav.id !== fave.id)
      this.setState({favorites: arr})
      })
}

  render(){


    return (
      <div className="app">
        <Nav />
        <Switch >
          <Route path="/all_stops" render={(routerProps) => < StopsPage user={this.state.user} stops={this.state.stops} {...routerProps} addFav={this.addFav}/>} />

          <Route exact path="/stops_near_me" render={(routerProps) => < StopsNearMePage stops={this.state.stops} statuses={this.state.statuses}/>} />

          <Route exact path="/favorites_form" render={(routerProps) => < FavoritesFormPage user={this.state.user} stops={this.state.stops} {...routerProps} addFav={this.addFav}/>} />

          <Route exact path="/" render={(routerProps) => < MyStationsPage user={this.state.user} favStations={this.state.favorites} stops={this.state.stops} deleteFav={this.deleteFav} statuses={this.state.statuses} {...routerProps}/>} />

        </Switch>
      </div>
    );
  }
};

export default App
