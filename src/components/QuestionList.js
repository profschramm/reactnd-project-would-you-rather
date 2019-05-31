import React, {Component} from 'react';
import { connect } from 'react-redux'
import '../App.css';
import QuestionContainer from './QuestionContainer'
import { ANSWERED_QUESTIONS, UNANSWERED_QUESTIONS} from './QuestionContainer'
import {Tab} from 'semantic-ui-react'
  // URL: https://react.semantic-ui.com/modules/tab/#types-basic

class QuestionList extends Component {

  state = {
    loggedInUser: null,
    key: ANSWERED_QUESTIONS
  }
 
  render() {

    const panes = [
                  {menuItem: ` ${UNANSWERED_QUESTIONS} `, 
                    render:() => <Tab.Pane> 
                      <QuestionContainer 
                        name={UNANSWERED_QUESTIONS}
                        viewDetailsURL = "/question"
                      />
                    </Tab.Pane> 
                  },  
                  {menuItem: ` ${ANSWERED_QUESTIONS} `, 
                    render: ()=> <Tab.Pane> 
                      <QuestionContainer 
                          name={ANSWERED_QUESTIONS}
                          viewDetailsURL = "/questions"
                        />
                      </Tab.Pane> 
                  },
    ]
   return (
     <Tab panes={panes} />
   )
  }
}

function mapStateToProp({authedUser, users, questions}) {
  return {
    authedUser,
    users,
    questions,
    loading: authedUser === null
  }
}

export default connect(mapStateToProp)(QuestionList);

