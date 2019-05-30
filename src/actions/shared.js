import {getInitialData, saveQuestionAnswer} from '../utils/api'
import {getUsers} from '../actions/users'
import {getQuestions} from '../actions/questions'
import {setAuthedUser} from '../actions/authedUser'
import {showLoading, hideLoading} from 'react-redux-loading'

//const AUTHED_ID = 'sarahedo'  // Temporary.

export function handleInitialData() {
    console.log ("shared:handleInitialData")
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then (({users, questions}) => {
                console.log ("shared:handleInitialData:then")
                dispatch(getUsers(users))
                dispatch(getQuestions(questions))
                dispatch(setAuthedUser(null))   // 
                dispatch(hideLoading())
            })
    }
}

export function handleSaveQuestionAnswer( {authedUser, questionId, selectedOption }) {
    console.log ("shared:handleSaveQuestionAnswer")
    return (dispatch) => {
        dispatch(showLoading())
        
        return saveQuestionAnswer( {
                authedUser, 
                qid:questionId, 
                answer:selectedOption
        })
            .then (({users, questions}) => {
                console.log ("shared:handleInitialData:then")
                dispatch(getUsers(users))
                dispatch(getQuestions(questions))
                // dispatch(setAuthedUser(authedUser))      // Don't need. Only users and questions changed
                dispatch(hideLoading())
            })
    }
}

