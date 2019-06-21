import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { convertToArray } from '../utils/helpers';
import { Redirect } from 'react-router-dom'

class LoginPage extends Component {

    state = {
        selectedUser: null,
        toHomePage: false,
       }
     
    handleSelect = (e) => {
        console.log ("LoginPage:handleChange", e.target.value)
        e.preventDefault()
        this.setState({selectedUser:e.target.value})
    }
    handleLogin = (e) => {
        e.preventDefault()
        console.log ("LoginPage: handleLogin", this.state.selectedUser)
        if (e.target.value === "default") {
            alert('You must select a user')
        } else {
            // const user = getUser( this.props.users, this.state.selectedUser )
            const {dispatch} = this.props
            dispatch(setAuthedUser(this.state.selectedUser))
            this.setState( () => ({
                toHomePage: this.state.selectedUser === null ? false : true
            }))
        }
        //this.props.onLogin()
    }
    render() {
        const { users } = this.props

        if (this.state.toHomePage === true) { // Redirect if submitted
            // URL: https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Redirect.md
            // URL: https://reacttraining.com/react-router/web/example/auth-workflow
            const dummy = false
            let {from} = !this.props.location ? {from: {pathname:"/"}} : this.props.location.state
            // Original copied code, but location is undefined, so state can't be accessed.
            //let {from} = this.props.location.state || {from: {pathname:"/"}}
           // return <Redirect to='/' />
           return <Redirect to={from} />
        }

        return (
            // TBD: Insert Avatar within select's <option>
            // Potential URL: https://github.com/JedWatson/react-select/blob/v1.x/examples/src/components/CustomComponents.js

            <div>
                <h3 className='center'> Welcome. Please login</h3>

                <select className='login-select' onChange={this.handleSelect}>
                    <option key={"default"} value={"default"}>
                         Select an existing user
                    </option>
                    {users.map((user) => (
                        <option 
                            key={user.id} 
                            value={user.id}>
                            {user.name}
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
        users: convertToArray(users)
    }
}
export default connect(mapStateToProps)(LoginPage)
