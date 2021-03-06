import React, {Component} from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/shared'
import { Redirect, withRouter } from 'react-router-dom'
import Nav from './Nav'
import { convertToArray, getUser, getQuestion } from '../utils/helpers';
import RedirectLogin from './RedirectLogin'

class QuestionPage extends Component { 

    state = {
        selectedOption: 'optionOne',
        toNextPage: false,
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
        console.log ("QuestionPage: submit", this.state.selectedOption, e.target.value, this.props)
        const { dispatch, authedUser, qid } = this.props

        dispatch(handleSaveQuestionAnswer( {
            authedUser,
            questionId: qid,
            selectedOption: this.state.selectedOption,

        }))
        this.setState( () => ({
                toNextPage: true        // Enable redirect to next page
            }))
        // this.props.history.push(`/questions/${id}`)
    }

    render() {

        const { authedUser, users, questions, qid } = this.props  

        const question = getQuestion( questions, qid )
        if (!question || question === null) {  // If question does not exist, redirect to Login->404
            console.log ("QuestionPage:render", this.props.location)
            // Original copied code, but don't want to come back to this page. Want to go to 404 page
           //return <Redirect to={{ pathname: "/login", state:{ from: this.props.location}}}  /> 
            return <Redirect to={{ pathname: "/login", state:{ from: {pathname: "/404"}}}}  />
        }
        if (authedUser === null) { // Must be logged in
            return <RedirectLogin/>
        }
        if (this.state.toNextPage === true) { // Redirect if submitted
            const url = "/questions".concat(`/${qid}`)
            return <Redirect to={url} />
            //return <Redirect to='/questions/${qid}' />  Could not get this syntax to work. Broke into two statements
        }
        
 
        const author = getUser (users, question.author)
        const avatarURL = author.avatarURL
        const name = author.name

        return (
            <div>
                <Nav />
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
                                checked={this.state.selectedOption === "optionOne"}
                                onChange={this.handleCheck}
                                className="radio-input"
                            />
                            {question.optionOne.text}
                        </span>
                        </div>
                        <div>
                        <span>
                            <input 
                                type="radio" 
                                name="question-options"
                                value="optionTwo"
                                checked={this.state.selectedOption === "optionTwo"}
                                onChange={this.handleCheck}
                                className="radio-input"
                            />
                            {question.optionTwo.text}
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

      return {
        authedUser,
        users: convertToArray(users),
        questions: convertToArray(questions),
        qid
    }
}

export default withRouter(connect(mapStateToProps)(QuestionPage))