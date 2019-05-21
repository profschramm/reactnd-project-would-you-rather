import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import {handleInitialData} from '../actions/shared'
import '../App.css';
import LoginPage from './LoginPage'

class App extends Component {

  componentDidMount() {
    console.log ("App: componentDidMount")
    this.props.dispatch(handleInitialData)
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
            <div className="App">
              <h3 className="App-header">
                Would-You-Rather?
              </h3>
              {this.props.loading === true
                ? null
                : <div>
                   <Route path='/' exact component={LoginPage} />
                </div>
              }
            <div>
          </div>
      </div>
        </Fragment>
      </Router>
      
    );
  }
}

function mapStateToProp({authedUser}) {
  return {
    loading: authedUser === null
  }
}
export default connect(mapStateToProp)(App)

