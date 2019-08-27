import { resetNewGroupForm } from './newGroupForm.js'

// sync

export const setMyGroups = groups => {
  return {
    type: "SET_MY_GROUPS",
    groups
  }
}

export const clearGroups = () => {
  return {
    type: "CLEAR_GROUPS"
  }
}

export const addGroup = group => {
  return {
    type: "ADD_GROUP",
    group
  }
}

// async

export const getMyGroups = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/groups", {
      credentials: "include",
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        console.log(resp.data)
        dispatch(setMyGroups(resp.data))
      }
    })
    .catch(console.log)
  }
}

export const createGroup = (groupData, history) => {
  return dispatch => {
    const sendableGroupData = {
      group: {
        name: groupData.name,
        price: groupData.price
        adminid: groupData.adminid,
        code: groupData.code
      }
    }
    return fetch("http://localhost:3001/api/v1/groups", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableGroupData)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(addGroup(resp.data))
        dispatch(resetNewGroupForm())
        history.push(`/groups/#{resp.data.id}`)
      }
    })
    .catch(console.log)
  }
}
