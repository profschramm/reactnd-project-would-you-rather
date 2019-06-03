import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'
import Nav from './Nav'
import RedirectLogin from './RedirectLogin'

class NewQuestionPage extends Component {

    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false,
    }
    handleChangeOptionOne = (e) => {
        const optionOne = e.target.value
        this.setState( () => ( {
            optionOne
        }))
    }
    handleChangeOptionTwo = (e) => {
        const optionTwo = e.target.value
        this.setState( () => ( {
            optionTwo
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { optionOne, optionTwo } = this.state
        const { dispatch, authedUser } = this.props
        
        dispatch( handleAddQuestion(optionOne, optionTwo, authedUser))

        this.setState( () => ({
                optionOne: '',
                optionTwo: '',
                toHome: true
        }))
    }
    render() {
        const { optionOne, optionTwo, toHome } = this.state
        if (this.props.authedUser === null) { 
            return <RedirectLogin/>
        }
        if (toHome === true) {  // Redirect if submitted
            return <Redirect to='/' />
        }

        // For warning the user that space is running out
        const optionOneLeft = 280- optionOne.length
        const optionTwoLeft = 280- optionTwo.length
        return (
            <div>
                <Nav username={this.props.authedUser}/>
                <h3 className='center'> Compose a new Question</h3>
                <form className='question' onSubmit={this.handleSubmit}>
                    <p>Would you rather</p>
                    <textarea   
                        placeholder = "Option One"
                        value = {optionOne}
                        onChange={this.handleChangeOptionOne}
                        className='optionOneTextarea'
                        maxLength = {240}
                    />
                    {optionOneLeft <= 100 && (
                        <div className='optionOne-length'>
                            {optionOneLeft}
                        </div>
                    )}
                    <p>OR</p>
                    <textarea   
                        placeholder = "Option Two"
                        value = {optionTwo}
                        onChange={this.handleChangeOptionTwo}
                        className='optionTwoTextarea'
                        maxLength = {240}
                    />
                    {optionTwoLeft <= 100 && (
                        <div className='optionTwo-length'>
                            {optionTwoLeft}
                        </div>
                    )}
                    <button
                        className='btn'
                        type ='submit'
                        disabled = {optionOne === '' || optionTwo === ''}>
                        Submit                        
                    </button>
                </form>

            </div>
        )
    }
}


function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}
export default connect(mapStateToProps)(NewQuestionPage)

