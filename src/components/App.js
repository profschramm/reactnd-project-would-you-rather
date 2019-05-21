import React, {Component} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import {handleInitialData} from '../actions/shared'
import '../App.css';

class App extends Component {

  componentDidMatch() {
    this.props.dispatch(handleInitialData)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to Would-You-Rather?
          </p>
        </header>
        <div>
        Please log in
        </div>
      </div>
    );
  }
  
}

function mapStateToProp({authedUser}) {
  return {
    loading: authedUser === null
  }
}
export default connect(mapStateToProp)(App)

