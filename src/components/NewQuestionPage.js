import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

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
        const { dispatch, id } = this.props
        
        dispatch( handleAddQuestion(optionOne, optionTwo, id))
        console.log('New question: ', optionOne, optionTwo, id)

        this.setState( () => ({
                optionOne: '',
                optionTwo: '',
                toHome: id ? false : true,
        }))
    }
    render() {
        const { optionOne, optionTwo, toHome } = this.state

        if (toHome === true) {  // Redirect if submitted
            return <Redirect to='/' />
        }
        // For warning the user that space is running out
        const optionOneLeft = 280- optionOne.length
        const optionTwoLeft = 280- optionTwo.length
        return (
            <div>
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

export default connect()(NewQuestionPage)