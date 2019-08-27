import { resetLoginForm } from './loginForm.js'
import { getMyGroups, clearGroups } from './myGroups.js'
import { resetSignupForm } from './signupForm.js'

// sync

export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}

// async

export const login = (credentials, history) => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(setCurrentUser(resp.data.attributes))
        dispatch(resetLoginForm())
        dispatch(getMyGroups())
        history.push('/')
      }
    })
    .catch(console.log)
  }
}

export const signup = (credentials, history) => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(setCurrentUser(resp.data.attributes))
        dispatch(resetSignupForm())
        dispatch(getMyGroups())
        history.push('/')
      }
    })
    .catch(console.log)
  }
}

export const logout = event => {
  return dispatch => {
    dispatch(clearCurrentUser())
    dispatch(clearGroups())
    return fetch("http://localhost:3001/api/v1/logout", {
      credentials: "include",
      method: "DELETE"
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(setCurrentUser(resp.data.attributes))
        dispatch(getMyGroups())
      }
    })
    .catch(console.log)
  }
}
