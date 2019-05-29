import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { convertToArray } from '../utils/helpers';
import Nav from './Nav'

class QuestionAnswerPage extends Component { 
    
    render() {
        const { questions, authedUser } = this.props    

        const { question_id } = this.props.match.params

        // const question = questions[question_id]
        const question = questions.filter( (q) => q.id === question_id)

       //if (question === null) {
        if (question.length === 0) {
            return <p> This question does not exist. 404 page</p>
        }
        const {
            qid, author, timestamp, optionOne, optionTwo
        } = question

        const avatarURL="https://tylermcginnis.com/would-you-rather/tyler.jpg"
        const name = "Tyler"
/*
        const dummy = this.prop.question
        console.log ("dummy ", dummy)
        const totalVotes = 
            this.props.question.optionOne.votes.length +
            this.props.question.optionTwo.votes.length   
        
        const percentOne = (this.props.question.optionOne.votes.length / totalVotes) * 100
        const percentTwo = (this.props.question.optionTwo.votes.length / totalVotes) * 100
        */
        return (
            <div>
                <Nav username={authedUser}/>
               QUESTION ANSWER PAGE
            </div>
        )
    }   
}

// URL Reference on mapStateToProps with arguments: https://react-redux.js.org/using-react-redux/connect-mapstate
/*
function mapStateToProps({questions}, {qid}) {
    const question = questions[qid]
return {question}
}
*/
function mapStateToProps ({questions, authedUser}) {
    return { 
        questions: convertToArray(questions),
        authedUser,
    }  
    /* return {
        questions: convertToArray(questions),
        authedUser,
        users: convertToArray(users)
    }
    */
}

export default withRouter(connect(mapStateToProps)(QuestionAnswerPage))

/*
            <div>
                <img
                    src= {avatarURL}
                    alt= {`Avatar of ${this.prop.question.author}`}            
                    className='avatar'
                />  
                <div className='results-info'>
                    <div>
                        <span> Asked by {name}</span>
                        <div>
                            <h2>Results</h2>
                            <p>Would you rather {this.prop.question.optionOne.text} ?</p>
                            <p>{this.prop.question.optionOne.votes.length} out of {totalVotes}</p>
                            <input type="range" min="0" max="100" value={percentOne}/>
                        </div>
                        <div>
                            <p>Would you rather {this.prop.question.optionTwo.text} ?</p>
                            <p>{this.props.question.optionTwo.votes.length} out of {totalVotes}</p>
                            <input type="range" min="0" max="100" value={percentTwo}/>
                        </div>
                    </div>             
                </div>
            </div>
            */
