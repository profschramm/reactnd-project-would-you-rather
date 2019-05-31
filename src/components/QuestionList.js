import React, {Component} from 'react';
import { connect } from 'react-redux'
import '../App.css';
import { Redirect } from 'react-router-dom'
import QuestionContainer from './QuestionContainer'
import { ANSWERED_QUESTIONS, UNANSWERED_QUESTIONS} from './QuestionContainer'
import {Tab} from 'semantic-ui-react'
  // URL: https://react.semantic-ui.com/modules/tab/#types-basic

class QuestionList extends Component {

  state = {
    loggedInUser: null,
    key: ANSWERED_QUESTIONS
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

  handleSelectTab = (key) => {
    this.setState( { key })
    
  }
  render() {
    console.log ("QuestionContainer:render", this.state.key)

    const panes = [{menuItem: ` ${ANSWERED_QUESTIONS} `, 
                    render: ()=> <Tab.Pane> 
                                   <QuestionContainer 
                                      name={ANSWERED_QUESTIONS}
                                      viewDetails={this.viewAnsweredDetails}
                                      viewDetailsURL = "/questions"
                                    />
                                  </Tab.Pane> },
                    {menuItem: ` ${UNANSWERED_QUESTIONS} `, 
                    render:() => <Tab.Pane> 
                                    <QuestionContainer 
                                      name={UNANSWERED_QUESTIONS}
                                      viewDetails={this.viewunAnsweredDetails}
                                      viewDetailsURL = "/question"
                                    />
                                  </Tab.Pane> },
    ]
   return (
     <Tab panes={panes} />
   )
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

export default connect(mapStateToProp)(QuestionList);

