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
    user_id: 22,
    user: {},
    stops: [],
    favorites: [],
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

  }

  render(){


    return (
      <div className="app">
        <Nav />
        <Switch >
          <Route path="/all_stops" render={(routerProps) => < StopsPage user={this.state.user} stops={this.state.stops} {...routerProps}/>}/>
          <Route exact path="/stops_near_me" render={(routerProps) => < StopsNearMePage />} />
          <Route exact path="/favorites_form" render={(routerProps) => < FavoritesFormPage user={this.state.user} {...routerProps}/>} />
          <Route exact path="/" render={(routerProps) => < MyStationsPage user={this.state.user} favStations={this.state.favorites} stops={this.state.stops}{...routerProps}/>} />

        </Switch>
      </div>
    );
  }
};

export default App
