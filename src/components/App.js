import React, {Component} from 'react';
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

export default App;
