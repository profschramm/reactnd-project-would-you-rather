import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
  } from './_DATA.js'
  
  export function getInitialData () {
    console.log ("api: getInitialData")
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions]) => ({
      users,
      questions,
    }))
  }
  
  export function getUsers () {
    return Promise.all([
      _getUsers(),
    ]).then(([users]) => ({
      users,
    }))
  }

  export function getQuestions () {
    return Promise.all([
      _getQuestions(),
    ]).then(([questions]) => ({
      questions,
    }))
  }
  
  export function saveQuestion ( question ) {
    return _saveQuestion(question)
  }

  export function saveQuestionAnswer ({ authedUser, qid, answer }) {
    const temp = _saveQuestionAnswer( { authedUser, qid, answer })
    return temp 
  }