import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { convertToArray, getUser, getQuestion } from '../utils/helpers';
import Nav from './Nav'
import RedirectLogin from './RedirectLogin'

class QuestionAnswerPage extends Component { 
    
    render() {
        const { authedUser, users, questions, qid } = this.props   
        if (authedUser === null) { 
            return <RedirectLogin/>
        } 

        const question = getQuestion( questions, qid )
        if (!question || question === null) {
            return <p> This question does not exist. 404 page</p>
        }
        const author = getUser( users, question.author )
        
        const avatarURL = author.avatarURL
        const name = author.name        

        const totalVotes = 
            question.optionOne.votes.length +
            question.optionTwo.votes.length   
        
        const percentOne = (question.optionOne.votes.length / totalVotes) * 100
        const percentTwo = (question.optionTwo.votes.length / totalVotes) * 100

        const authedUserInfo = getUser (users, authedUser)
        
        const authedUserAnswers = authedUserInfo.answers
        const authedUserVote = authedUserAnswers[qid]
        console.log ('QuestionAnswerPage:render', authedUserVote)
        return (
            <div>
                <Nav />
                <div>
                    <span> Asked by {name}</span>
                    <img
                        src= {avatarURL}
                        alt= {`Avatar of ${question.author}`}            
                        className='avatar'
                    />  
                    <div className='results-info'>
                        <div className='question'>

                            <h2>Results</h2>
                            <div className='question'>
                                Would you rather {question.optionOne.text} ?  
                                <div> 
                                    {question.optionOne.votes.length} out of {totalVotes} ({percentOne}%)
                                    {authedUserVote && authedUserVote==="optionOne" && (<p><b>Your vote!!</b></p>)}
                                    <input readOnly type="range" min="0" max="100" value={percentOne}/>
                                </div>
                              
                            </div>
                            <div className='question'>
                                Would you rather {question.optionTwo.text} ?
                                <div className='question'>
                                     {question.optionTwo.votes.length} out of {totalVotes} ({percentTwo}%)
                                    {authedUserVote && authedUserVote==="optionTwo" && (<p><b>Your vote!!</b></p>)}
                                    <input readOnly type="range" min="0" max="100" value={percentTwo}/>
                                </div>
                               
                            </div>
                        </div>             
                    </div>
                </div>
            </div>
        )
    }   
}

// URL Reference on mapStateToProps with arguments: https://react-redux.js.org/using-react-redux/connect-mapstate
function mapStateToProps ({authedUser, users, questions}, {match}) {
    const qid = match.params.question_id
    return { 
        authedUser,
        users: convertToArray(users),
        questions: convertToArray(questions),
        qid
    }  
}

export default withRouter(connect(mapStateToProps)(QuestionAnswerPage))

