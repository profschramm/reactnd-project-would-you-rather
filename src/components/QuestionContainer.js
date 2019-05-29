import React, {Component} from 'react'
import QuestionPreview from './QuestionPreview'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { convertToArray } from '../utils/helpers'

class QuestionContainer extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        viewDetails: PropTypes.func.isRequired,
        viewDetailsURL: PropTypes.string.isRequired
    }
    
    filterAnsweredQuestions = (questions, users, author) => {
        const userInfo = users.filter( (user) => (
            user.id  === author
        ))
        if (userInfo && userInfo.length != 0) {
            const userAnswers = userInfo[0].userAnswers
            /*  Bug: This code fails, so for now, have commented out and just return matches =questions
            const matches = userAnswers.map( (answer) => (
                questions.filter( (question) => (
                    question.id === answer
                )) 
            ))
            */
            const matches = questions
            return matches
        } else {
            return questions
        }
    }

    render() {
        const { questions, users, authedUser } = this.props    // TBD: Add users, to get the avatarURL
        //console.log ("QuestionContainer:render", this.props.viewDetailsURL, authedUser, questions)
    
        if (authedUser === null) {  // Temporary until I figure out why authedUser is not set
            return <p> The user is not logged on</p>
            
        } 
        const questionArray = this.filterAnsweredQuestions(questions, users, authedUser)

        return (
            <div className="container">
                <h3>{this.props.name}</h3>
                <ul className="ul">
                   {questions.map( (question) => (
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


