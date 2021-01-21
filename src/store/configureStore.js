import {combineReducers, applyMiddleware, createStore} from 'redux'
import  ReduxThunk from 'redux-thunk'
import rootReducer from './reducers'

export const middlewares = [ReduxThunk]
const createStoreithMiddleware = applyMiddleware(...middlewares)(createStore)
export default createStoreithMiddleware(rootReducer)