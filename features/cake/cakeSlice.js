/*slice is redux-toolkit convention. 
the entire application's state is split into slices and managed individually.
createSlice under the hood uses the immer library/package */

/*we are still in a node.js enviornment and not in a react app- use require() not import */
const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
  numOfcakes: 10
}

/*this rtk-demo is not an exact version of the redux-demo project i made prior.
its action creators are arranged differently.

const initialState = {
numOfcakes: 10
}

const CAKE_ORDERED = 'CAKE_ORDERED'

const orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1  // if this is a integer, we could use -- to decrement the value.
  }
}

const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

const restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty  // if this is a integer, we could use -- to decrement the value.
  }
}

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED: 
      return {
      ...state,
      numOfCakes: state.numOfCakes - action.payload}
    }
    case CAKE_RESTOCKED:
      return {
      ...state,
      numOfcakes: state.numOfCakes + action.payload
    }
    default:
      return state
  }

*/
const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    /*in this object we specify the individual state transitions */ 
    /*an action will be create automatically with the same names as the properties
    of the reducer object */
    ordered: (state) => {
      state.numOfcakes= state.numOfcakes - 1   //shorthand is state.numOfcakes-- 
    },
    restocked: (state, action) => {
      state.numOfcakes = state.numOfcakes + action.payload // state.numOfcakes += action.payload 
    }
  }
})

/*export the cake reducer and actions */
module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions