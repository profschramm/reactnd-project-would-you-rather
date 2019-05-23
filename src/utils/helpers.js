
export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
  }

  /* Use the (private) function within DATA.js
  export function formatQuestion (question) {
    const {id, author, timestamp, optionOne, optionTwo} = question 
    return {
      id,
      author,
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
  */