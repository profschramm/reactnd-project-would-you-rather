import React, {Component} from 'react'
import QuestionPreview from './QuestionPreview'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { convertToArray } from '../utils/helpers'
import RedirectLogin from './RedirectLogin'

export const ANSWERED_QUESTIONS = "Answered Questions"
export const UNANSWERED_QUESTIONS = "Unanswered Questions"

class QuestionContainer extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        viewDetailsURL: PropTypes.string.isRequired
    }
    
    filterQuestions = (questions, users, author, answered) => {
        const userInfo = users.find (
            (user) => (   // () are an implicit return rather than explicit return {}
                user.id  === author
            )
        ) 
        if (userInfo) {
           const userAnswers = userInfo.answers
           const questionKeys = Object.keys (userAnswers)
           const questionValues = Object.values(questions)
           if (answered===true) {
                const filtered = questionValues.filter( (aQuestion) => questionKeys.includes(aQuestion.id) )
                return filtered
           } else {
                const filtered = questionValues.filter( (aQuestion) => !questionKeys.includes(aQuestion.id) )
                return filtered
           }
        } else {
            return []
        }
    }

    sortQuestionsByTimestamp = (unsorted) => {
        const temp = unsorted[0]
        const tempTimestamp = temp.timestamp
        const sorted = unsorted.sort( (a,b) => unsorted[b].timestamp - unsorted[a].timestamp)
        return sorted
    }

    render() {
        const { questions, users, authedUser } = this.props    
        if (authedUser === null) {  
            return <RedirectLogin/>
        } 

       const filteredQuestions = (this.props.name === ANSWERED_QUESTIONS) 
            ? this.filterQuestions(questions, users, authedUser, true)
            : this.filterQuestions(questions, users, authedUser, false)

//       const sortedFilteredQuestions = this.sortQuestionsByTimestamp( filteredQuestions)

        return (
            <div className="container">
                <h3> {this.props.name} </h3>
                <ul className="ul">
                   {filteredQuestions.map( (question) => (
                       <li  className="li" key={question.id}> 
                            <QuestionPreview qid={question.id} viewDetailsURL={this.props.viewDetailsURL}/>
                        </li>
                   ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions, }) {

    const questionArray = Object.values(questions)
    /* TBD: Eduardo Bug
    const sortedQuestionArray = questionArray
        .sort( (a,b) => questionArray[b].timestamp - questionArray[a].timestamp )
    */
        return {
        authedUser,
        users: convertToArray(users),
        questions: convertToArray(questions)
    }
}

export default withRouter(connect(mapStateToProps)(QuestionContainer))


