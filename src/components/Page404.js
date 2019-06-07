import React, {Component}  from 'react'
import { Link } from 'react-router-dom'

class Page404 extends Component{
    /* Trying to follow URL: https://tylermcginnis.com/react-router-handling-404-pages/ */
    /* Trying to follow URL: https://tylermcginnis.com/react-router-programmatically-navigate/ */
    /* **If/When** a component is rendered by React Router, 
    * that component is passed three different props: location, match, and history.
    * So... THIS component will have 3 props: location, match, history
    *   Pushing a new entry into the history stack, redirects the user to another route
    * Note: If this component is not render by Route, then it won't have these properties
    * 
    */

    render () {
        return (
            // this.props.history.push('/')
    
            <div>
                <p> This is MY 404 page.  No match for <code>{location.pathname}</code></p>
                <Link to='/login'>
                    Login
                </Link>
            </div>
        )
    }
    
}
export default Page404