import React, { Component } from 'react'
import { connect } from 'react-redux'

class LoginPage extends Component {

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
        // console.log("LoginPage:render -Number of users", this.state.users.length)
        console.log("LoginPage: render ", this.props)
        return (
            <div>
                <h3 className='center'> Welcome. Please login</h3>
                <select className='login-select' onChange={this.handleSelect}>
                    {this.state.users.map((user) => (
                        <option key={user.id} value={user.name}>
                            {user.name}
                        </option>
                    ))}
                </select>
                <button className='logging-in' onClick={(e) => this.handleLogin(e)}>
                    Login
                </button>

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
export default connect(mapStateToProps)(LoginPage)

/*
  If you want the selection of an item to cause an action: 
   <select className='login-select' onChange={this.props.handleLogin}>

 */