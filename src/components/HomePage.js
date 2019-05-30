import React, {Component} from 'react';
import '../App.css';
import Nav from './Nav'
import QuestionList from './QuestionList'
import RedirectLogin from './RedirectLogin'
import { connect } from 'react-redux'

class HomePage extends Component {

  render() {
    console.log ("Homepage")
    if (this.props.authedUser === null) { 
      return <RedirectLogin />
    }

    return (
      <div>
          <Nav />
          <QuestionList/>  
       </div>

    );
  }
}

function mapStateToProp({authedUser}) {
 
  return {
    authedUser
  }
}
export default connect(mapStateToProp)(HomePage)
  

