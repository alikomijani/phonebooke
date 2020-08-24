import {combineReducers} from "redux";
import contactReducer from "./contact/contact.reducer";

const rootReducer = combineReducers({
    contacts : contactReducer
});

export default rootReducer;
