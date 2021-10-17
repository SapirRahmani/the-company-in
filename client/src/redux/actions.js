import { ADD_NEW_DOMAIN } from './actionTypes'

export const addNewDomain = (content) => ({
    type: ADD_NEW_DOMAIN,
    payload: content,
})
