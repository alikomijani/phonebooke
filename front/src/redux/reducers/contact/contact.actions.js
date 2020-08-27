import types from './contact.types';

export const fetchContactStart = () => ({
    type: types.FETCH_CONTACTS_START
})

export const fetchContactSuccess = (data) => {
    return {
        type: types.FETCH_CONTACTS_SUCCESS,
        payload: data
    }
}

export const fetchContactError = (error) => ({
    type: types.FETCH_CONTACTS_ERROR,
    payload: error
})
export const setLimit = (limit) => ({
    type: types.SET_LIMIT,
    payload: limit
})
export const setOffset = (offset) => ({
    type: types.SET_OFFSET,
    payload: offset
})

export const createContactStart = () => ({
    type: types.CREATE_CONTACTS_START
})

export const createContactSuccess = (data) => {
    return {
        type: types.CREATE_CONTACTS_SUCCESS,
        payload: data
    }
}

export const createContactError = (error) => ({
    type: types.CREATE_CONTACTS_ERROR,
    payload: error
})