import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import SearchBar from './components/search_bar'
import MapContainer from './components/map'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import style from './App.css'
import { Link, Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (

      <div className="App">
      <MuiThemeProvider>
        <AppBar
          style={{backgroundColor:'#8D6E63',}}
          title="Capet walk"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <div style={{height: '200px'}}/>
        <div style={{textAlign: 'center', backgroundColor:'white', padding:'50px',opacity: '0.9'}}>
          <SearchBar />
          <MapContainer />
          <RaisedButton label="Search" style={{marginTop:'15px'}}><Link to="/interestplace"></Link></RaisedButton>
        </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
