import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
class LoginPage extends Component {

    state = {
        selectedUser: null,
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
        const {dispatch} = this.props
        //console.log ("LoginPage: handleLogin", selectedUser.value)
        dispatch( setAuthedUser(this.state.selectedUser) )
    }
    render() {
        // console.log("LoginPage:render -Number of users", this.state.users.length)
        console.log("LoginPage: render ", this.props)
        const { dispatch, users } = this.props
        console.log("LoginPage: render props", users)

        return (
            <div>
                <h3 className='center'> Welcome. Please login</h3>
                <select className='login-select' onChange={this.handleSelect}>
                    {Object.keys(users).map((user) => (
                        <option key={user} value={users[user]}>
                            {users[user]}
                        </option>
                    ))}
                </select>
                <button className='btn' onClick={(e) => this.handleLogin(e)}>
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
