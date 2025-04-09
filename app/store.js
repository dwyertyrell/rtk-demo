/*use configureStore to define our store */

const configureStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('../features/cake/cakeSlice');
const icecreamReducer = require('../features/icecream/icecreamSlice');
const reduxLogger = require('redux-logger');

/*to use the middleware we specify the property after the reducer in the store */
const logger = reduxLogger.createLogger()

/*specify all the reducers from slices, that belong to the features, in a key.
similar to what we did with combineReducer method in redux-demo*/
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer
  },
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware().concat(logger)

  // }
})

/*the store is complete, so let's export it into index.js 
now we can remove the console.log in the store subscription, since the middleware
is now applied.*/

module.exports = store; 