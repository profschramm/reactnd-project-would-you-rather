import React, { Component } from 'react'
import { connect } from 'react-redux'
import { convertToArray } from '../utils/helpers';
import Nav from './Nav'
import RedirectLogin from './RedirectLogin'


class Leaderboard extends Component {
    state = {
        selectedUser: null,
       }
    
    userScore = (user) => {
        const answers = Object.keys(user.answers).length
        const questions = user.questions.length
        return answers+questions
    }

    sortUsersByScore = (unsorted) => {
        const sorted = unsorted.sort( (a,b) => b["score"] - a["score"])
        return sorted
    }

    render() {
        const { authedUser, users  } = this.props
        if (authedUser === null) { 
            return <RedirectLogin/>
        }
        
        const userInfo = users.map( (user) => {
            var newObject = {}
            newObject["name"]=user.name
            newObject["id"]=user.id
            newObject["avatarURL"]= user.avatarURL
            newObject["created"] = user.questions.length
            newObject["answered"] = Object.keys(user.answers).length
            newObject["score"] = newObject["created"] + newObject["answered"]
            return newObject
        })

        const sortedUsers = this.sortUsersByScore(userInfo)

        return (
            <div>
                <Nav />
                <ul className='leaderboard-list'>
                    {sortedUsers.map((user) => (
                       <li key={user.id}>
                           <div className="user">
                                <img
                                    src= {user.avatarURL}
                                    alt= {`Avatar of ${user.name}`}            
                                    className='avatar'
                                />
                                <h2>{user.name}</h2>
                                <div className="user">
                                    <ul>
                                       <li>Answered Questions {user.answered}</li>
                                       <li>Created Questions {user.created}</li>
                                    </ul> 
                                </div>
                                <div className="user">
                                    Score {user.score}
                                </div>
                           </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        authedUser,
        users: convertToArray(users)
    }
}
export default connect(mapStateToProps)(Leaderboard)

/*
                                <div className="user">
                                    <label>
                                        Answered Questions {user.answered}
                                    </label>
                                    <label>
                                    Created Questions {user.created}
                                    </label> 
                                </div>
*/
