import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class QuestionAnswerPage extends Component { 

    state = {
        fakeQuestion:  {
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
        }
    }

    
    render() {
        const { question } = this.props    
/*
        if (question === null) {
            return <p> This question does not exist. 404 page</p>
        }
        const {
            qid, author, timestamp, optionOne, optionTwo
        } = question
*/
        const avatarURL="https://tylermcginnis.com/would-you-rather/tyler.jpg"
        const name = "Tyler"

        const dummy = this.state.fakeQuestion
        console.log ("dummy ", dummy)
        const totalVotes = 
            this.state.fakeQuestion.optionOne.votes.length +
            this.state.fakeQuestion.optionTwo.votes.length   
        
        const percentOne = (this.state.fakeQuestion.optionOne.votes.length / totalVotes) * 100
        const percentTwo = (this.state.fakeQuestion.optionTwo.votes.length / totalVotes) * 100
        
        return (
            <div>
                <img
                    src= {avatarURL}
                    alt= {'Avatar of ${fakeQuestion.author}'}            
                    className='avatar'
                />  
                <div className='results-info'>
                    <div>
                        <span> Asked by {name}</span>
                        <div>
                            <h2>Results</h2>
                            <p>Would you rather {this.state.fakeQuestion.optionOne.text} ?</p>
                            <p>{this.state.fakeQuestion.optionOne.votes.length} out of {totalVotes}</p>
                            <input type="range" min="0" max="100" value={percentOne}/>
                        </div>
                        <div>
                            <p>Would you rather {this.state.fakeQuestion.optionTwo.text} ?</p>
                            <p>{this.state.fakeQuestion.optionTwo.votes.length} out of {totalVotes}</p>
                            <input type="range" min="0" max="100" value={percentTwo}/>
                        </div>
                    </div>             
                </div>
            </div>
        )
    }   
}

function mapStateToProps({questions}, {id}) {
    const question = questions[id]
  
    return {
        // Don't understand
        question: null
    }
}

export default withRouter(connect(mapStateToProps)(QuestionAnswerPage))

