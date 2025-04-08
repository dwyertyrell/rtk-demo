/*this file is for learning the immer library package */

/*conventionally, we use reducer functions to return a new state object-
since objects are immutable. 
however when returning the state, we are careful that the existing state is 
copied, by spreading the state. and the other values in that state are updated.
  */ 
const redux = require('redux')
const createStore = redux.createStore;
const produce = require('immer').produce

const initialState = {
  name: 'john',
  address: {
    street: '123 main st',
    city: 'boston',
    state: 'MA'
  }
}
// constant for action type
const STREET_UPADTED = 'STREET_UPADTED'

// action creator accepting a parameter
const updateStreet = (street) => {
  return {
  type: 'STREET_UPADTED',
  payload: street
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPADTED:
      //comment out the return and add return produce()
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload
      //   }
      // } 
      //the 2nd argument is a function that recieves a draft copy of the state
      return produce(state,(draft) => {
        //immer allows us to update this draft state as if the state is mutable

        draft.address.street = action.payload
      })
    default: {
      return state
    }
  }
}



const store = redux.createStore(reducer);
console.log('initial state', store.getState())
const unsubscribe = store.subscribe(() => {
  console.log('updated state', store.getState())
})
store.dispatch(updateStreet('lyal road'))
unsubscribe()

/*with immer:
import a method called produce from the immer library and it replaces the retun
function of the switch case
 */