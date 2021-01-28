import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, storeFactory } from '../test/testUtil'
import Input from './input'


const setup = (initialState = {}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<Input store={store} />).dive().dive()

    return wrapper
}

describe('render', () => {



    describe('Word has not been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = {
                success: false
            }

            wrapper = setup(initialState)
        })
        test('renders component without error', () => {

            const component = findByTestAttr(wrapper, "component-input")
            expect(component.length).toBe(1)
        })

        test('Renders input box', () => {
            const component = findByTestAttr(wrapper, "input-box")
            expect(component.length).toBe(1)
        })

        test('Renders submit button', () => {
            const submitButton = findByTestAttr(wrapper, "submit-button")
            expect(submitButton.length).toBe(1)
        })
    })


    describe('Word has  been guessed', () => {

        test('renders component without error', () => {

        })

        test(' does not renders  input box', () => {

        })

        test('does not renders submit button', () => {

        })
    })

})



describe('Update state', () => {

})