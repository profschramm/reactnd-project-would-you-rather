import { ADD_QUESTION, GET_QUESTIONS } from '../actions/questions'

export default function questions (state = {}, action) {  // Default arg to init store
                                                   // Alternative: createStore() function
    switch (action.type) {
        case GET_QUESTIONS :
            return {
                ...state,       // The rest of the state
                ...action.questions 
            }
        case ADD_QUESTION:      // TBD: Eduardo: Syntax to init votes to []
            const { question } = action
            return {
                ...state,
                [action.question.id]: action.question,
            }
        default:
            return state

    }

}

