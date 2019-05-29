import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

//export default function Nav() {  // Chanded to a Component, to pass along prop:username 
class Nav extends Component {

    static propTypes = {
        username: PropTypes.string.isRequired,
    }

    render () {
        console.log ("Nav:render", this.props)
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
                         <NavLink to='/' activeClassName='active'>
                         Logout
                         </NavLink>
                     </li>
                 </ul>
            </nav>
         )
    }

}

export default Nav;
