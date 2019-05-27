import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import '../App.css';
import Nav from './Nav'
import QuestionContainer from './QuestionContainer'
import { Redirect } from 'react-router-dom'

export const ANSWERED_QUESTIONS = "Answered Questions"
export const UNANSWERED_QUESTIONS = "Unanswered Questions"

class HomePage extends Component {

  state = {
    loggedInUser: null,
  }

  refresh = () => {
    // Trigger a refresh
  }
 
  viewAnsweredDetails = (qid) => {
    console.log ("VIEW ANSWERED", qid)
    //this.props.history.push(`/question:${qid}/`)
    return <Redirect to='/question:${qid}' />
  }

  viewUnansweredDetails = (qid) => {
    console.log ("VIEW UNANSWERED", qid)
    //this.props.history.push(`/questions:${qid}/`)
    return <Redirect to='/questions:${qid}' />
  }

  render() {
    console.log ("HomePage: render -", this.props)

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav username={this.props.authedUser}/>
            <div className="row">
              <div className="column">
                <QuestionContainer 
                name={ANSWERED_QUESTIONS}
                viewDetails={this.viewUnansweredDetails}
                viewDetailsURL = "/question"/>
              </div>
              <div className="column">
                <QuestionContainer 
                name={UNANSWERED_QUESTIONS}
                viewDetails={this.viewAnsweredDetails}
                viewDetailsURL = "/questions"/>
            </div>                
              </div>

          <div>
        </div>
    </div>
      </Fragment>
    </Router>

    );
  }
}

function mapStateToProp({authedUser, users, questions}) {
  console.log ("HomePage:mapStateToProps", authedUser)
  return {
    authedUser,
    users,
    questions,
    loading: authedUser === null
  }
}
export default connect(mapStateToProp)(HomePage)

