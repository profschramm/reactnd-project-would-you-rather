import QuestionPage from "../components/QuestionPage";

export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
  }
  
  export function formatQuestion (question, askingUser) {
    const {id, author, timestamp, optionOne, optionTwo} = question 
    return {
      id,
      author: askingUser,
      timestamp,
      optionOne: {
        votes:[],
        text: optionOne
      },
      optionTwo: {
        votes:[],
        text: optionTwo
      },
    }
  }