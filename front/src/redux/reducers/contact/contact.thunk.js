import * as actions from './contact.actions';
import axios from 'axios';

export const fetchContact = () => {
    return (dispatch , getState)=>{
        const state = getState();
        const {limit, offset} = state.contacts.filters;
        const {token} = state.auth;

        const config = {
            headers: {'Authorization': `Token ${token}`},
        };
        return new Promise((resolve , reject)=>{
            dispatch(actions.fetchContactStart());
            axios.get(`/api/contacts/?limit=${limit}&offset=${offset}` , config).then(res=>{
                dispatch(actions.fetchContactSuccess(res.data))
                resolve()
            }).catch(error=>{
                dispatch(actions.fetchContactError(error))
                reject()
            })
        })
        
    }
}
export const createContact=(data)=>{
    return (dispatch,getState)=>{
        dispatch(actions.createContactStart());
        const state = getState();
        const {token} = state.auth;
        const config = {
            headers: {'Authorization': `Token ${token}`},
        };
        return new Promise((resolve , reject)=>{
            axios.post('/api/contacts/' ,data , config).then(res=>{
                dispatch(actions.createContactSuccess(res.data))
                resolve()
            }).catch(error=>{
                dispatch(actions.createContactError(error.response.data))
                reject()
            })
        })
        
    }
}