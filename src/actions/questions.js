import { saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

function addQuestion (question) {   // Should I export?? Not for optimistic-update.  Yes for now
    return {
        type: ADD_QUESTION,
        question,
    }
}

// handleAddQuestion uses optimistic-update.
// TBD: Check the format of the question information being passed about.

export function handleAddQuestion (optionOne, optionTwo, id) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch (showLoading())
        return saveQuestion( {          // Should I call formatQuestion here?
                optionOne,
                optionTwo,
                author: authedUser,
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