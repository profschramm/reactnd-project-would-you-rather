export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function setAuthedUser (id) {
    return {
        type: SET_AUTHED_USER,
        id,
        // avatar,      TBD: Think about also passing in the avatar, to avoid always needing users
    }
}