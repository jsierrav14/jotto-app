import {storeFactory} from '../test/testUtil'
import {guessWord} from './store/actions/index'

describe('guessWord action dispatcher',()=>{

    const secretWord ='party'
    const unsuccessfulGuess =  'train';
    describe('No guessed words',()=>{

        let store;
        const initialState = {secretWord}
        beforeEach(()=>{
            store = storeFactory(initialState)
        })
        test("updates state correctly for unseccessful guess",()=>{

            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState()

            const expectedState = {
               ...initialState,
               success:false,
               guessedWords: [{
                   guessedWord:unsuccessfulGuess,
                   letterMatchCount:3
               }]
            }
            expect(newState).toEqual(expectedState)
        })

        test("updates state correctly for seccessful guess",()=>{
            
        })

    })

    describe('some guessed words',()=>{

        test("uodates state correctly for unseccessful guess",()=>{

        })

        test("uodates state correctly for seccessful guess",()=>{
            
        })

    })
})