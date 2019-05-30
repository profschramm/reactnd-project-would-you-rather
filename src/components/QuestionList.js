import React, {Component} from 'react';
import { connect } from 'react-redux'
import '../App.css';
import { Redirect } from 'react-router-dom'
import QuestionContainer from './QuestionContainer'
import { ANSWERED_QUESTIONS, UNANSWERED_QUESTIONS} from './QuestionContainer'

class QuestionList extends Component {

  state = {
    loggedInUser: null,
  }
 
  viewAnsweredDetails = (qid) => {
    console.log ("VIEW ANSWERED", qid)
    //this.props.history.push(`/question:${qid}/`)
    return <Redirect to='/questions:${qid}' />
  }

  viewUnansweredDetails = (qid) => {
    console.log ("VIEW UNANSWERED", qid)
    //this.props.history.push(`/questions:${qid}/`)
    return <Redirect to='/question:${qid}' />
  }

  render() {
    console.log ("QuestionList: render -", this.props)

    return (
          <div className='container'>

            <div className="row">
              <div className="column">
                <QuestionContainer 
                name={ANSWERED_QUESTIONS}
                viewDetails={this.viewAnsweredDetails}
                viewDetailsURL = "/questions"/>
              </div>
              <div className="column">
                <QuestionContainer 
                name={UNANSWERED_QUESTIONS}
                viewDetails={this.viewUnansweredDetails}
                viewDetailsURL = "/question"/>
            </div>                
              </div>

          <div>
        </div>
    </div>
    );
  }
}

function mapStateToProp({authedUser, users, questions}) {
  console.log ("QuestionList:mapStateToProps", authedUser)
  return {
    authedUser,
    users,
    questions,
    loading: authedUser === null
  }
}
export default connect(mapStateToProp)(QuestionList)

