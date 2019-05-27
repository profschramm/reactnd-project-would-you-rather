import React, { Component } from 'react'
import { connect } from 'react-redux'
import { convertToArray } from '../utils/helpers';

class Leaderboard extends Component {
    state = {
        selectedUser: null,
       }

    render() {
        const { users } = this.props
        console.log("Leaderboard: render - props", this.props.users)
        return (
            <div>
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

function mapStateToProps({ users }) {
    return {
        users: convertToArray(users)
    }
}
export default connect(mapStateToProps)(Leaderboard)

/*

    return {
        users: Object.keys(users)
            .sort((a,b) => users[b].id - users[a].id)
    }
                            */