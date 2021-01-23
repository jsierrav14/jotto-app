import {combineReducers, applyMiddleware} from 'redux'
import success from './sucessReducer'
import guessedWords from './guessedWordReducer'

export default combineReducers({
    success,
    guessedWords
})