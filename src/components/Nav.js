import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { convertToArray, getUser } from '../utils/helpers'

//export default function Nav() {  // Changed to a Component, to pass along prop:username 
class Nav extends Component {

    render () {

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
                         <img
                                    src= {this.props.userAvatarURL}
                                    alt= {`Avatar of ${this.props.username}`}            
                                    className='avatar'
                         />
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
 
    const userInfo = getUser( convertToArray(users), authedUser ) 
    return {
      authedUser,
      username: userInfo.name,
      userAvatarURL: userInfo.avatarURL
    }
  }
  export default connect(mapStateToProp)(Nav)
  
