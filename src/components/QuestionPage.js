import React, {Component} from 'react'
import { connect } from 'react-redux'
// import { formatQuestion, formatDate } from '../utils/helpers'  (formatQuestion is private within DATA.js)
import { handleSaveQuestionAnswer } from '../actions/shared'
import { Link, withRouter } from 'react-router-dom'

class QuestionPage extends Component { 

    state = {
        selectedOption: 'optionOne',
        fakeQuestion:  {
            "8xf0y6ziyjabvozdd253nd": {
              id: '8xf0y6ziyjabvozdd253nd',
              author: 'sarahedo',
              timestamp: 1467166872634,
              optionOne: {
                votes: ['sarahedo'],
                text: 'have horrible short term memory',
              },
              optionTwo: {
                votes: [],
                text: 'have horrible long term memory'
              }
            },
        }
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
                    alt= {'Avatar of ${name}'}            
                    className='avatar'
                />  
                <div className='question-info'>
                    <div>
                        <span> {name} asks: </span>
                        <div>
                        <label>
                            <input 
                                type="radio" 
                                name="question-options"
                                value="optionOne"
                                checked={true}
                                className="radio-input"
                            />
                            {optionOne}
                        </label>
                        </div>
                        <div>
                        <label>
                            <input 
                                type="radio" 
                                name="question-options"
                                value="optionTwo"
                                checked={false}
                                className="radio-input"
                            />
                            {optionTwo}
                        </label>
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

    const question_id = match.params.question_id
    // Reference: https://reacttraining.com/react-router/web/example/url-params
    const question = questions[question_id]
        // Could be undefined!! ERROR! TBD
        // Possibly a flag to be passed to render, true or false
      return {
        authedUser,
        question
    }
}

export default withRouter(connect(mapStateToProps)(QuestionPage))

/*
  ? formatQuestion(question, users[question.author], authedUser)
            : null
             */
