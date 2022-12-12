// configureStore.js

import {createStore} from 'redux'
import {persistStore} from 'redux-persist'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducer'

const persistConfig = {
    key: 'root',
    storage,

}

// const persistReducer = persistReducer(persistConfig, rootReducer)

export default() =>{
    let store = createStore(persistReducer)
    let persistor = persistStore(store)
    return {store,persistor}
}