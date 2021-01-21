
import checkPropTypes from 'check-prop-types'
import { createStore, applyMiddleware} from 'redux'
import rootReducer from '../src/store/reducers'
import {middlewares} from '../src/store/configureStore'
export const storeFactory =(initialState) =>{
    const createStoreWithMiddleware = applyMiddleware(...middlewares)
    return createStoreWithMiddleware(rootReducer,initialState)
}
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}

export const checkProptypes = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name
    )

    expect(propError).toBeUndefined()
}