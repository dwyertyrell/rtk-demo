/*use configureStore to define our store */

const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/cakeSlice')

/*specify all the reducers from slices, that belong to the features, in a key.
similar to what we did with combineReducer method in redux-demo*/
const store = configureStore({
  reducer: {
    cake: cakeReducer
  }
})

/*the store is complete, so let's export it into index.js */

module.exports = store; 