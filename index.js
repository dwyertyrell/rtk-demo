/*with redux-toolkit's documentation has different folder structure to a regular
redux-app. 
create a folder called app and inside add file called store.js and folder 
called 'features'. this will contain all the  features of the application
(the cake and ice cream shop) */

/*with redux-toolkit, the recomendation is to group together the action and 
reducer logic, for a single feature, in a single file. */


const store = require('./app/store')
const cakeActions= require('./features/cake/cakeSlice').cakeActions
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions


console.log('initial state', store.getState())

/*called after every state changed? */
const unsubscribe = store.subscribe(()=>{
  console.log('updated state', store.getState())
})
/*to dispatch a cake action, need to import from cakeSlice */
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))

// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.restocked(33))



/*this returns the updated state, only if it's updated */
unsubscribe()


/*flow of the redux-toolkit pattern:

create a feature slice using the createSlice pattern- this generates the actions
and reducers.

perform direct MUTATIONS on the state- this is allowed due to immer library used
by redux-toolkit

create the store using the configureStore() and attach the reducer

dispatch actions on the store using store.dispatch(). 
inspect the state using store.getState().
and listen to changes on the state by using store.subscribe() 

*/