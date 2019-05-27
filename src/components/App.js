import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import {handleInitialData} from '../actions/shared'
import '../App.css';
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import NewQuestionPage from './NewQuestionPage'
import QuestionPage from './QuestionPage'
import QuestionAnswerPage from './QuestionAnswerPage'
import Leaderboard from './Leaderboard'

class App extends Component {

  componentDidMount() {
    console.log ("App: componentDidMount")
    this.props.dispatch(handleInitialData())
  }

  render() {
    console.log ("App: render -", this.props)
    return (
      
      // URL on Switch versus Router: https://medium.com/@jenniferdobak/react-router-vs-switch-components-2af3a9fc72e
      <div className="app">
        <Router>
          <Switch>
              <Route path='/' exact render={ () => (<LoginPage />)}/>
              <Fragment>
                <LoadingBar />
                <div className='container'>
                  <h3 className='heading'>
                    Would-You-Rather?
                  </h3>
                  {this.props.loading === true
                    ? null 
                    : <div>
                    <Route path='/home' render={ () => (<HomePage />)}/>
                    <Route path='/add' render={ () => (<NewQuestionPage />)}/>
                    <Route path='/question/:question_id' render={ () => (<QuestionPage />)}/>
                    <Route path='/answers' render={ () => (<QuestionAnswerPage />)}/>
                    <Route path='/leaderboard' render={ () => (<Leaderboard />)}/>
                    </div>
                  }
                </div>
              </Fragment>
           </Switch>
        </Router>
      </div>    
    );
  }
}

function mapStateToProp({users}) {
  return {
    loading: users === {}
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
