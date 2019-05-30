import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { convertToArray } from '../utils/helpers'

//export default function Nav() {  // Changed to a Component, to pass along prop:username 
class Nav extends Component {

    render () {
        // const {authedUser, username, userAvatarURL} = this.props
        return (
            <nav className='nav'>
                 <ul>
                     <li>
                         <NavLink to='/' exact activeClassName='active'>
                         Home
                         </NavLink>
                     </li>
                     <li>
                         <NavLink to='/add' activeClassName='active'>
                         New Question
                         </NavLink>
                     </li>
                     <li>
                         <NavLink to='/leaderboard' activeClassName='active'>
                         Leaderboard
                         </NavLink>
                     </li>
                     <li>
                         <label>Hello {this.props.username}</label>
                     </li>
                     <li>
                         <NavLink to='/login' activeClassName='active'>
                         Logout
                         </NavLink>
                     </li>
                 </ul>
            </nav>
         )
    }

}

function mapStateToProp({authedUser, users}) {
 
    const userInfo = convertToArray(users).find (
      (user) => ( user.id  === authedUser )
    )  
    return {
      authedUser,
      username: userInfo.name,
      userAvatarURL: userInfo.userAvatarURL
    }
  }
  export default connect(mapStateToProp)(Nav)
  
