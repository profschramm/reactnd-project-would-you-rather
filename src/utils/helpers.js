
export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
  }

export function convertToArray( aHashMapObject ) {
  const anArray = Object.keys(aHashMapObject).map(function(key) {
    return aHashMapObject[key]
  }) 
  return anArray
}

export function getUser( users, userId ) {
  const user = users.find ( (user) => (user.id === userId))
  return user
}

export function getQuestion( questions, qid ) {
  const question = questions.find ( (question) => (question.id === qid))
  return question
}
  
  