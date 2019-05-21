export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

export function addQuestion (question) {   // Should I export?? Not for optimistic-update.  Yes for now
    return {
        type: ADD_QUESTION,
        question,
    }
}

// TBD: function handleAddQuestion for optimistic-update (See actions/tweets.js)

export function getQuestions( questions ) {
    return {
        type: GET_QUESTIONS,
        questions,
    }
}