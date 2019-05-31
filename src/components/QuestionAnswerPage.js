import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { convertToArray } from '../utils/helpers';
import Nav from './Nav'
import RedirectLogin from './RedirectLogin'

class QuestionAnswerPage extends Component { 
    
    render() {
        const { authedUser, users, questions, qid } = this.props   
        if (authedUser === null) { 
            return <RedirectLogin/>
        } 

        const question = questions.find (
            (question) => (   // () are an implicit return rather than explicit return {}
                question.id  === qid
            )
        ) 
        if (!question || question === null) {
            return <p> This question does not exist. 404 page</p>
        }
        const author = users.find (
            (user) => (  user.id  === question.author )
        )
        const avatarURL = author.avatarURL
        const name = author.name        

        const totalVotes = 
            question.optionOne.votes.length +
            question.optionTwo.votes.length   
        
        const percentOne = (question.optionOne.votes.length / totalVotes) * 100
        const percentTwo = (question.optionTwo.votes.length / totalVotes) * 100

        const authedUserInfo = users.find (
            (user) => (  user.id  === authedUser )
        )
        const authedUserAnswers = authedUserInfo.answers
        const authedUserVote = authedUserAnswers[qid]
        console.log ('QuestionAnswerPage:render', authedUserVote)
        return (
            <div>
                <Nav />
                <div>
                    <img
                        src= {avatarURL}
                        alt= {`Avatar of ${question.author}`}            
                        className='avatar'
                    />  
                    <div className='results-info'>
                        <div>
                            <span> Asked by {name}</span>
                            <div>
                                <h2>Results</h2>
                                <p>Would you rather {question.optionOne.text} ?</p>
                                <p>{question.optionOne.votes.length} out of {totalVotes} ({percentOne})</p>
                                {authedUserVote && authedUserVote==="optionOne" && (<p><b>Your vote!!</b></p>)}
                                <input readOnly type="range" min="0" max="100" value={percentOne}/>
                            </div>
                            <div>
                                <p>Would you rather {question.optionTwo.text} ?</p>
                                <p>{question.optionTwo.votes.length} out of {totalVotes} ({percentTwo})</p>
                                {authedUserVote && authedUserVote==="optionTwo" && (<p><b>Your vote!!</b></p>)}
                                <input readOnly type="range" min="0" max="100" value={percentTwo}/>
                            </div>
                            <span>
                                Current user voted
                            </span>
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

