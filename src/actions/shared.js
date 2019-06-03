import {getInitialData, saveQuestionAnswer} from '../utils/api'
import {getUsers} from '../actions/users'
import {getQuestions} from '../actions/questions'
import {setAuthedUser} from '../actions/authedUser'
import {showLoading, hideLoading} from 'react-redux-loading'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then (({users, questions}) => {
                dispatch(getUsers(users))
                dispatch(getQuestions(questions))
                dispatch(setAuthedUser(null))   // 
                dispatch(hideLoading())
            })
    }
}

export function handleUpdateData( authedUser) {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then (({users, questions}) => {
                dispatch(getUsers(users))
                dispatch(getQuestions(questions))
                dispatch(setAuthedUser(authedUser))   // 
                dispatch(hideLoading())
            })
    }
}
export function handleSaveQuestionAnswer( {authedUser, questionId, selectedOption }) {
     return (dispatch, getState) => {
        dispatch(showLoading())
        return saveQuestionAnswer( {
            authedUser, 
            qid:questionId, 
            answer:selectedOption
        })
            .then (() => {
                dispatch(handleUpdateData(authedUser))
            })
    }
}
