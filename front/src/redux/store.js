import { applyMiddleware, createStore } from "redux";
import rootReducer from './reducers'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const middleware = [thunk, logger];

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)



let store = createStore(persistedReducer,
        applyMiddleware(...middleware))

export default store;
export const persistor = persistStore(store)

