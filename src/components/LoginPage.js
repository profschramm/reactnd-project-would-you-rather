import React, { Component } from 'react'
import { connect } from 'react-redux'

class LoginPage extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h3 className='center'> Welcome. Please login</h3>
                <ul className='login-list'>
                    {this.props.users.map((id) => (
                        <li key={id}>
                            User
                        </li>
                    ))}
                </ul>
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
                <ul className='login-list'>
                    {this.props.users.map((id) => (
                        <li key={id}>
                            User
                        </li>
                    ))}
                </ul>
            */