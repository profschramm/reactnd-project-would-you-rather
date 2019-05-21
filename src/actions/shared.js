import {getInitialData} from '../utils/api'
import {getUsers} from '../actions/users'
import {getQuestions} from '../actions/questions'
import {setAuthedUser} from '../actions/authedUser'

// TBD: How do I handle an uninitialized authedUser?

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then (({users, questions}) => {
                dispatch(getUsers(users))
                dispatch(getQuestions(questions))
                // dispatch(setAuthedUser(xxxx))
            })
    }
}

