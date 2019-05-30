import React, { Component } from 'react'
import { connect } from 'react-redux'
import { convertToArray } from '../utils/helpers';
import Nav from './Nav'
import RedirectLogin from './RedirectLogin'

class Leaderboard extends Component {
    state = {
        selectedUser: null,
       }

    render() {
        const { authedUser, users  } = this.props
        if (authedUser === null) { 
            return <RedirectLogin/>
        }
        console.log("Leaderboard: render - props", this.props.users)
        return (
            <div>
                <Nav />
                <ul className='leaderboard-list'>
                    {users.map((user) => (
                       <li key={user.id}>
                           <div className="user">
                             <img
                                src= {user.avatarURL}
                                alt= {`Avatar of ${user.name}`}            
                                className='avatar'
                            />
                            <h2>{user.name}</h2>
                            <div className="user">
                                <p>Answered Questions {Object.keys(user.answers).length}</p>
                                <p>Created Questions {user.questions.length}</p>  
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
