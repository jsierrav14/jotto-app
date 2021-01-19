import Reeact from 'react'
import {shallow} from 'enzyme'

import {findByTestAttr, storeFactory} from '../test/testUtil'
import Input from './input'


const setup = (initialState = {}) =>{
    const store = storeFactory(initialState)
    const wrapper = shallow(<Input  store={store}/>).dive()

    return wrapper
}

setup()
describe('render',()=>{

  
    describe('Word has not been guessed',()=>{

        test('renders component without error',()=>{

        })

        test('Renders input box',()=>{

        })

        test('Renders submit button', ()=>{

        })
    })


    describe('Word has  been guessed',()=>{

        test('renders component without error',()=>{

        })

        test(' does not renders  input box',()=>{

        })

        test('does not renders submit button', ()=>{
            
        })
    })

})



describe('Update state', ()=>{

})