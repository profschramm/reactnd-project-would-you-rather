import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import '../App.css';
import Nav from './Nav'
import { Redirect } from 'react-router-dom'
import NewQuestionPage from './NewQuestionPage'
import QuestionPage from './QuestionPage'
import QuestionAnswerPage from './QuestionAnswerPage'
import Leaderboard from './Leaderboard'
import QuestionList from './QuestionList'

class HomePage extends Component {

  state = {
    loggedInUser: null,
  }

  render() {
    console.log ("HomePage: render -", this.props)

    return (
      <div>
          <Nav username={this.props.authedUser}/>
          <QuestionList/>
          
       </div>

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

