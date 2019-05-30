import React from 'react'
import { Link } from 'react-router-dom'

export default function RedirectLogin() {
    return (
        // this.props.history.push('/')

        <div>
            <p> You must be logged in</p>
            <Link to='/login'>
                Login
            </Link>
        </div>
    )
}