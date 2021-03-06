import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import users from './reducers/users.js'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import myGroups from './reducers/myGroups.js'
import signupForm from './reducers/signupForm.js'
import newGroupForm from './reducers/newGroupForm.js'
import editGroupForm from './reducers/editGroupForm.js'
import joinGroupForm from './reducers/joinGroupForm.js'
import myWeeks from './reducers/myWeeks.js'
import currentWeek from './reducers/currentWeek.js'
import teams from './reducers/teams.js'
import games from './reducers/games.js'
import myPicks from './reducers/myPicks.js'
import pickSheetForm from './reducers/pickSheetForm.js'
import pickSheetFormTeams from './reducers/pickSheetFormTeams.js'
import adminForm from './reducers/adminForm.js'

const reducer = combineReducers({
  users,
  currentUser,
  loginForm,
  myGroups,
  signupForm,
  newGroupForm,
  editGroupForm,
  joinGroupForm,
  myWeeks,
  currentWeek,
  teams,
  games,
  myPicks,
  pickSheetForm,
  pickSheetFormTeams,
  adminForm 
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( reducer, composeEnhancer(applyMiddleware(thunk)))

export default store
