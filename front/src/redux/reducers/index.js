import {combineReducers} from "redux";
import contactReducer from "./contact/contact.reducer";
import authReducer from './auth/auth.reducer'

const rootReducer = combineReducers({
    contacts : contactReducer,
    auth:authReducer
});

export default rootReducer;
