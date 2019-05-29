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
        viewDetails: PropTypes.func.isRequired,
        viewDetailsURL: PropTypes.string.isRequired
    }
    
    filterQuestions = (questions, users, author, answered) => {
        const userInfo = users.find (
            (user) => (   // () are an implicit return rather than explicit return {}
                user.name  === author
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

    render() {
        const { questions, users, authedUser } = this.props    
        //console.log ("QuestionContainer:render", this.props.viewDetailsURL, authedUser, questions)
    
        if (authedUser === null) {  // Temporary until I figure out why authedUser is not set
            return <RedirectLogin/>
        } 

       const filteredQuestions = (this.props.name === ANSWERED_QUESTIONS) 
            ? this.filterQuestions(questions, users, authedUser, true)
            : this.filterQuestions(questions, users, authedUser, false)

        return (
            <div className="container">
                <h3>{this.props.name}</h3>
                <ul className="ul">
                   {filteredQuestions.map( (question) => (
                       <li  className="li" key={question.id}> 
                            <QuestionPreview qid={question.id} viewDetails={this.props.viewDetails} viewDetailsURL={this.props.viewDetailsURL}/>
                        </li>
                   ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ questions, users, authedUser }) {
    return {
        questions: convertToArray(questions),
        authedUser,
        users: convertToArray(users)
    }
}

export default withRouter(connect(mapStateToProps)(QuestionContainer))


