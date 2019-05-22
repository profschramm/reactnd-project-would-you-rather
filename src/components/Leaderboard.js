import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {

    state = {
        selectedUser: null,
        users: [
         {
           id: 'sarahedo',
           name: 'Sarah Edo',
           avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
           answers: {
             "8xf0y6ziyjabvozdd253nd": 'optionOne',
             "6ni6ok3ym7mf1p33lnez": 'optionTwo',
             "am8ehyc8byjqgar0jgpub9": 'optionTwo',
             "loxhs1bqm25b708cmbf3g": 'optionTwo'
           },
           questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
         },
          {
           id: 'tylermcginnis',
           name: 'Tyler McGinnis',
           avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg",
           answers: {
             "vthrdm985a262al8qx3do": 'optionOne',
             "xj352vofupe1dqz9emx13r": 'optionTwo',
           },
           questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
         },
          {
           id: 'johndoe',
           name: 'John Doe',
           avatarURL: "https://tylermcginnis.com/would-you-rather/dan.jpg",
           answers: {
             "xj352vofupe1dqz9emx13r": 'optionOne',
             "vthrdm985a262al8qx3do": 'optionTwo',
             "6ni6ok3ym7mf1p33lnez": 'optionTwo'
           },
           questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
         }
        ]
       }
     
    handleSelect = (e) => {
        console.log ("LoginPage:handleChange", e.target.value)
        e.preventDefault()
        this.setState({selectedUser:e.target.value})
    }
    handleLogin = (e) => {
        e.preventDefault()
        // const selectedUser = document.getElementById('login-select')
        console.log ("LoginPage: handleLogin", this.state.selectedUser)
        //console.log ("LoginPage: handleLogin", selectedUser.value)
        // dispatch( setAuthedUser )
    }
    render() {
        console.log("Leaderboard:render -Number of users", this.state.users.length)
        return (
            <div>
                {this.state.users.map((user) => (
                    <ul className='leaderboard-list'>
                        <li>
                            <div>
                                <label>Avatar</label>
                             </div>
                            <div>
                                <h2>{user.name}</h2>
                                <p>Answered Questions {user.answers.length}</p>
                                <p>Created Questions {user.questions.length}</p>              
                            </div>
                        </li>
                    </ul>
                ))}
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users: Object.keys(users)
            .sort((a,b) => users[b].id - users[a].id)
    }
}
export default connect(mapStateToProps)(Leaderboard)
