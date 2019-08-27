import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import users from './reducers/users.js'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import myGroups from './reducers/myGroups.js'
import signupForm from './reducers/signupForm.js'
import newGroupForm from './reducers/newGroupForm.js'

const reducer = combineReducers({
  users,
  currentUser,
  loginForm,
  myGroups,
  signupForm,
  newGroupForm
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( reducer, composeEnhancer(applyMiddleware(thunk)))

export default store
