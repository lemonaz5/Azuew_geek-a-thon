import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import SearchBar from './components/search_bar'
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
          style={{backgroundColor:'#8D6E63',width:'100%'}}
          title="Carpet walk"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <div className="block">
          <SearchBar />
          <Link to="/interestplace"><RaisedButton label="Search" style={{marginTop:'15px'}}></RaisedButton></Link>
        </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
