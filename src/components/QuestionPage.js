import React, {Component} from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/shared'
import { Link, withRouter } from 'react-router-dom'

class QuestionPage extends Component { 

    state = {
        selectedOption: 'optionOne',
    }

    handleCheck = (e) => {
        e.preventDefault()
        const selectedOption = e.target.value
        this.setState( () => ( {
            selectedOption,
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch, question, authedUser } = this.props

        dispatch(handleSaveQuestionAnswer( {
            authedUser,
            questionId: question.id,
            selectedOption: this.state.selectedOption,

        }))

        // Redirect to parent QuestionAnswerPage
        // this.props.history.push(`/questionAnswer/${id}`)
        this.props.history.push(`/questionAnswer/`)
    }

    render() {
        const { question, users } = this.props    
        // use React Router to get the passed qid
/*
        if (question === null) {
            return <p> This question does not exist. 404 page</p>
        }
        const {
            qid, author, timestamp, optionOne, optionTwo
        } = question
        const {
            uid, name, avatarURL, answers, questions
        } = users
        console.log ("QuestionPage:render", this.props)

*/
        const avatarURL="https://tylermcginnis.com/would-you-rather/tyler.jpg"
        const name = "Tyler"
        const optionOne = "One"
        const optionTwo = "Two"
        return (
            <div>
                <img
                    src= {avatarURL}
                    alt= {`Avatar of ${name}`}            
                    className='avatar'
                />  
                <div className='question-info'>
                    <div>
                        <span> {name} asks: </span>
                        <div>
                        <span>
                            <input 
                                type="radio" 
                                name="question-options"
                                value="optionOne"
                                checked={true}
                                className="radio-input"
                            />
                            {optionOne}
                        </span>
                        </div>
                        <div>
                        <span>
                            <input 
                                type="radio" 
                                name="question-options"
                                value="optionTwo"
                                checked={false}
                                className="radio-input"
                            />
                            {optionTwo}
                        </span>
                        </div>
                     
                        <button 
                            className='btn' 
                            type="submit"
                            onClick={(e) => this.handleSubmit(e)}>
                            SUBMIT
                        </button>
                    </div>               
                </div>
            </div>
        )
    }   
}

function mapStateToProps({authedUser, users, questions}, {match}) {
    // 1st param: state, 2nd param: component's props
    // Parent component is React Router which is passing a prop called match

    const qid = match.params.question_id
    // Reference: https://reacttraining.com/react-router/web/example/url-params
    const question = questions[qid]
        // Could be undefined!! ERROR! TBD
        // Possibly a flag to be passed to render, true or false
      return {
        authedUser,
        question,
        qid
    }
}

export default withRouter(connect(mapStateToProps)(QuestionPage))

/*
  ? formatQuestion(question, users[question.author], authedUser)
            : null
             */
