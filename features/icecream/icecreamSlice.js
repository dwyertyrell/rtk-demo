const createSlice = require('@reduxjs/toolkit').createSlice
const {cakeActions} = require('../cake/cakeSlice')

const initialState = {
  numOfIcecreams: 20
}

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: (state) => {state.numOfIcecreams--},
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload
    }
  },

  // extraReducers: {
  //   /* the cakeSlice generated a 'cake/ordered' action- so our key will the exact 
  //    same string. */
  //   ['cake/ordered']: (state) => {
  //     //used immer under the hood
  //     state.numOfIcecreams--
  //   }
  // }

  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIcecreams--
    });
  }

  }
)

/*how does the createSlice function automatically creates an action creator on the
fly?... */

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions

/*now import the reducer in store.js and attach it to the store.
then import the actions into index.js and dispact them */

/* extra reducers: 

https://www.youtube.com/watch?v=NBbvaF3GK9U&list=PLC3y8-rFHvwiaOAuTtVXittwybYIorRB3&index=23

reducers from one createSlice() will only respond to the action types generated 
from the same slice.
if you want a slice to respond to other action types, despite the ones it created,
we need to make use of extra reducers- additional reducers apart from the reducer 
generated from createSlice().

method 1:
add the property 'extraReducers' where we specify a mapping object where the key
corresponds to action type from a different slice. 

  extraReducers: {
     the cakeSlice generated a 'cake/ordered' action- so our key will the exact 
     same string. 
     ['cake/ordered']: (state) => {
      //used immer under the hood
      state.numOfIcecreams--
    }

method 2:
the recommended approach is to specift the same using a build function.
extraReduces will be a function (instead of an object in prev method)
  
we can this builder to add a new case. 1st argument is the action type from the 
import. 
(make sure to import cakeActions from cakeSlice.js)

the 2nd argument is a typical reducer type of function.

in conclusion, extraReducers allows createSlice to response to other action types
other than the ones it created.

*/