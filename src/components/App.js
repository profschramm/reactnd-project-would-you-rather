import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import {handleInitialData} from '../actions/shared'
import '../App.css';
//import '../semantic-ui/dist/semantic.min.css'
  // TBD: Could not get this import to work. Was trying to make my tabs look prettier
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import NewQuestionPage from './NewQuestionPage'
import QuestionPage from './QuestionPage'
import QuestionAnswerPage from './QuestionAnswerPage'
import Leaderboard from './Leaderboard'


// Attribution URL: https://medium.com/@leonardobrunolima/react-tips-handling-404-pages-24d27191a8dd
const Page404 = ({location}) => (
  <div>
    <h2>No match found for <code>{location.pathname}</code></h2>
  </div>
)

class App extends Component {

  componentDidMount() {
    console.log ("App: componentDidMount")
    this.props.dispatch(handleInitialData())
  }

  render() {
    console.log ("App: render -", this.props)
    return (
      // URL on Switch versus Router: https://medium.com/@jenniferdobak/react-router-vs-switch-components-2af3a9fc72e
      // URL on Lesson on Basic Components of React Router: https://reacttraining.com/react-router/web/guides/basic-components
      // URL on Nested Routes but does not work: https://tylermcginnis.com/react-router-nested-routes/
        // I want <Nav> only within the Switch (on all pages, except /login) .. But it does not work
      <div className="app">
        <LoadingBar />
        <h3 className='heading'>
          Would-You-Rather?
        </h3>
        <Router>
          <div>
            <Switch>
              <Route path='/' exact render={ ( {history}) => (<HomePage />)}/>
              <Route path='/add' exact render={ () => (<NewQuestionPage />)}/>
              <Route path='/question/:question_id' render={ () => (<QuestionPage />)}/>
              <Route path='/questions/:question_id' render={ () => (<QuestionAnswerPage />)}/>
              <Route path='/leaderboard' exact render={ () => (<Leaderboard />)}/>
              <Route compoment={Page404}/>
          </Switch>
          </div>
          <Route path='/login' exact render={ ( {history}) => (<LoginPage />)}/>
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




              */
