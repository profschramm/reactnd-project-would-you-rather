import React, { Component } from 'react'
import { connect } from 'react-redux'
import { convertToArray } from '../utils/helpers';
import Nav from './Nav'

class Leaderboard extends Component {
    state = {
        selectedUser: null,
       }

    render() {
        const { users, authedUser } = this.props
        //if (authedUser === null) Redirect (/Login)

        console.log("Leaderboard: render - props", this.props.users)
        return (
            <div>
                <Nav username={this.props.authedUser}/>
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

function mapStateToProps({ users, authedUser }) {
    return {
        users: convertToArray(users),
        authedUser
    }
}
export default connect(mapStateToProps)(Leaderboard)

/*

    return {
        users: Object.keys(users)
            .sort((a,b) => users[b].id - users[a].id)
    }
                            */