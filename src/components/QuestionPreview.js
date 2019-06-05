import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { convertToArray, getUser, getQuestion } from '../utils/helpers'
import {Link} from 'react-router-dom'

class QuestionPreview extends Component { 

    static propTypes = {
        qid: PropTypes.string.isRequired,
        viewDetailsURL: PropTypes.string.isRequired
    }

    handleSubmit = (e) => {     // If using a Button (not a Link)
        e.preventDefault()
        // Redirect via the passed-function, that will either go to question (for unanswered) or questions(for answered)
        this.props.viewDetails(this.props.qid)
    }

    render() {
        const { questions, users, qid } = this.props    // TBD: Add users, to get the avatarURL

        if (qid === null) {
            return <p> No question identifier was given. 404 page</p>
        }

        const question = getQuestion( questions, qid) 
        if (!question) {
            return <p> This question does not exist. 404 page</p>
        }
        const userInfo = getUser ( users, question.author)
        const url = this.props.viewDetailsURL.concat(`/${qid}`)
        return (
            <div className='question-info'>
                <span> Asked by {userInfo.name}: </span>
                <div>Would you rather {question.optionOne.text}
                <Link to={url}>
                    <button>View Details</button>
                </Link>
                </div>
            </div>
        )
    }   
}

function mapStateToProps({ authedUser, users, questions }) {
    return {
        authedUser,
        users: convertToArray(users),
        questions: convertToArray(questions)
    }
}

export default withRouter(connect(mapStateToProps)(QuestionPreview))
