import { SET_AUTHED_USER } from '../actions/authedUser'

export default function authedUser (state = null, action) {  // State init'd with default arg
    switch (action.type) {
        case SET_AUTHED_USER :
            console.log ("action/authedUser ", action.id)     
            return action.id   //Original: When action just consisted of a single id (not the avatar)
        default:
            return state
    }
}

/* Alternative: If I included avatar as part of the authedUser, to avoid always needs users 
           return {
                ...state,       // The rest of the state
                ...action.users // The new user info from the action
            } 
*/