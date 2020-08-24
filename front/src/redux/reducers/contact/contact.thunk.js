import * as actions from './contact.actions';
import axios from 'axios';

export const fetchContact = () => {
    return (dispatch , getState)=>{
        const state = getState();
        const {limit, offset} = state.contacts.filters
        dispatch(actions.fetchContactStart());
        axios.get(`/api/contacts/?limit=${limit}&offset=${offset}`).then(res=>{
            dispatch(actions.fetchContactSuccess(res.data))
        }).catch(error=>{
            dispatch(actions.fetchContactError(error))
        })
    }
}
export const createContact=(data)=>{
    return (dispatch)=>{
        dispatch(actions.fetchContactStart());
        axios.post('/api/contacts/' ,data).then(res=>{
            dispatch(actions.fetchContactSuccess(res.data))
        }).catch(error=>{
            dispatch(actions.fetchContactError(error))
        })
    }
}