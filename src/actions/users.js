export const GET_USERS = 'GET_USERS'
export const GET_USER = 'GET_USER'

export function getUsers( users) {
    return {
        type: GET_USERS,
        users,
    }
}

export function getUser( { userId } ) {
    return {
        type: GET_USER,
        userId,
    }
}