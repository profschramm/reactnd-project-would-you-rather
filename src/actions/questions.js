import { saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

function addQuestion (question) {   // NB. Not exported. Not for optimistic-update.  Yes for now
    return {
        type: ADD_QUESTION,
        question,
    }
}

// handleAddQuestion uses optimistic-update.
// TBD: Check the format of the question information being passed about.

export function handleAddQuestion (optionOne, optionTwo, authorId) {
    return (dispatch, getState) => {
        dispatch (showLoading())
        return saveQuestion( {          
                optionOneText: optionOne,
                optionTwoText: optionTwo,
                author: authorId,   // Should be equal to authedUser from the store
        })
            .then( (question) => dispatch(addQuestion(question)))
            .then( () => dispatch(hideLoading()))
    }
}

export function getQuestions( questions ) {
    return {
        type: GET_QUESTIONS,
        questions,
    }
}



