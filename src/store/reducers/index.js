import {combineReducers, applyMiddleware} from 'redux'
import success from './sucessReducer'
import guessedWords from './guessedWordReducer'
import secretWord from './secretWordReducer'

export default combineReducers({
    success,
    guessedWords,
    secretWord
})