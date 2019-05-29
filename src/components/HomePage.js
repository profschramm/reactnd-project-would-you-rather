import React, {Component} from 'react';
import { connect } from 'react-redux'
import '../App.css';
import Nav from './Nav'
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

