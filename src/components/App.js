import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import {handleInitialData} from '../actions/shared'
import '../App.css';
import LoginPage from './LoginPage'
import NewQuestionPage from './NewQuestionPage'
import QuestionPage from './QuestionPage'
import QuestionAnswerPage from './QuestionAnswerPage'
import Leaderboard from './Leaderboard'

class App extends Component {

  componentDidMount() {
    console.log ("App: componentDidMount")
    this.props.dispatch(handleInitialData)
  }

  render() {
    console.log ("App: render -", this.props)
    return (
      
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="App">
            <h3 className="App-header">
              Would-You-Rather?
            </h3>
            <div>
                 <Route path='/' exact render={ () => (<LoginPage />)}/>
                 <Route path='/add' render={ () => (<NewQuestionPage />)}/>
                 <Route path='/question' render={ () => (<QuestionPage />)}/>
                 <Route path='/questionAnswer' render={ () => (<QuestionAnswerPage />)}/>
                 <Route path='/leaderboard' render={ () => (<Leaderboard />)}/>
            </div>
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

/*

Original/Alternative: <Route path='/' exact component={LoginPage} />
   - Does not allow inclusion of props.

Once API is being called (Eduardo)
             {this.props.loading === true
                ? null
                : <div>
                   <Route path='/' exact component={LoginPage} />
                </div>
              }




              */
