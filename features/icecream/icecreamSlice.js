const createSlice = require('@reduxjs/toolkit').createSlice

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
  }
})

/*how does the createSlice function automatically creates an action creator on the
fly?... */

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions

/*now import the reducer in store.js and attach it to the store.
then import the actions into index.js and dispact them */