import { EnzymeAdapter } from 'enzyme'
import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProptypes } from '../test/testUtil'
import GuessedWords from './GuessedWords'

const defaultProps = {
    guessedWords: [
        { guessedWord: 'train', letterMatchCount: 3 }
    ]
}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords {...setupProps} />)
}

test('Does not theow warning with expected props', () => {
    checkProptypes(GuessedWords, defaultProps)
})

describe("If there are no words guessed", () => {
    let wrapper;

    beforeEach(()=>{
        wrapper = setup({ guessedWords: [] })
    })
    test("Render without error", () => {
        const component = findByTestAttr(wrapper, "component-guessed-words")
        expect(component.length).toBe(1)
    })

    test("Renders instructions to guess a word", () => {
      const instructions = findByTestAttr(wrapper,'guess-instructions')
      expect(instructions.text().length).not.toBe(0)
    })
})

describe("If there are  words guessed", () => {


   let guessedWords = [
        {guessedWord:'Train', letterMatchCount:3},
        {guessedWord:'agile', letterMatchCount:1},
        {guessedWord:'party', letterMatchCount:5}
    ]
    let wrapper;

    beforeEach(()=>{
        wrapper = setup({ guessedWords })
    })
    test("Renders withou error",()=>{
        const component = findByTestAttr(wrapper, "component-guessed-words")
        expect(component.length).toBe(1)
    })

    test('renders "guessed words"', () =>{
          const guessedWordsNode = findByTestAttr(wrapper,'guessed-words')
          expect(guessedWordsNode.length).toBe(1)
    })

    test('correct number of guessed word',()=>{
         const guessedWordsNode = findByTestAttr(wrapper,'guessed-word');
         expect(guessedWordsNode.length).toBe(guessedWords.length)
    })
})