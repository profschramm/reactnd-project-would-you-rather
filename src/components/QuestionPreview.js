import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { convertToArray } from '../utils/helpers'
import {Link} from 'react-router-dom'

class QuestionPreview extends Component { 

    static propTypes = {
        qid: PropTypes.string.isRequired,
        viewDetails: PropTypes.func.isRequired,
        viewDetailsURL: PropTypes.string.isRequired
    }

    handleSubmit = (e) => {     // If using a Button (not a Link)
        e.preventDefault()
        // Redirect to QuestionPage
        // this.props.history.push(`/questionAnswer/${id}`)
        this.props.viewDetails(this.props.qid)
    }

    render() {
        const { questions, qid } = this.props    // TBD: Add users, to get the avatarURL

        if (qid === null) {
            return <p> No question identifier was given. 404 page</p>
        }

        const questionArray = questions.filter(q=>q.id === qid)
        if (questionArray.length === 0) {
            return <p> This question does not exist. 404 page</p>
        }
        const question = questionArray[0]
        const URL = this.props.viewDetailsURL.concat(`/:${qid}`)
        //console.log ("QuestionPreview:render", qid, question, this.props.viewDetailsURL, URL)

        return (
            <div className='question-info'>
                <span> {question.author} asks: </span>
                <div>Would you rather {question.optionOne.text}
                <Link 
                    to='${this.URL}'
                    className='btn'
                >
                    <button>View Details</button>
                </Link>
                </div>
            </div>
        )
    }   
}

function mapStateToProps({ questions }) {
    return {
        questions: convertToArray(questions)
    }
}

export default withRouter(connect(mapStateToProps)(QuestionPreview))


/* Using a button with a handler
                <button 
                    className='btn' 
                    type="submit"
                    onClick={(e) => this.handleSubmit(e)}>
                    View Details
                </button>

Hard fixed Link URL                     to='/questions/:vthrdm985a262al8qx3do'
*/