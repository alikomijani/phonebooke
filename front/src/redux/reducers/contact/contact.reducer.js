import types from './contact.types'
const initial_state = {
    count: 0,
    next: null,
    previous:null,
    results: [],
    pending: false,
    error: null,
    filters: {
        limit: 5,
        offset: 0,
    }
}
const contactReducer = (state = initial_state, { type, payload }) => {
    switch (type) {
        case (types.SET_LIMIT):
            return {
                ...state,
                filters: {
                    ...state.filters,
                    limit: payload
                }
            }
        case (types.SET_OFFSET):
            return {
                ...state,
                filters: {
                    ...state.filters,
                    offset: payload
                }
            }
        case (types.FETCH_CONTACTS_START):
            return {
                ...state,
                pending: true,
                error: null,
            }
        case (types.FETCH_CONTACTS_SUCCESS):
            return {
                ...state,
                pending: false,
                results: payload.results,
                count: payload.count,
                next: payload.next,
            }
        case (types.FETCH_CONTACTS_ERROR):
            return {
                ...state,
                pending: false,
                error: payload.error,
            }
            case (types.CREATE_CONTACTS_START):
                return {
                    ...state,
                    pending: true,
                    error: null,
                }
            case (types.CREATE_CONTACTS_SUCCESS):
                return {
                    ...state,
                    pending: false,
                    results: [...state.results , payload],
                    count: state.count +1,
                }
            case (types.CREATE_CONTACTS_ERROR):
                return {
                    ...state,
                    pending: false,
                    error: payload,
                }
        default:
            return state
    }

}
export default contactReducer