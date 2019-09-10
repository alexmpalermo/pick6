import { resetNewGroupForm } from './newGroupForm.js'
import { resetEditGroupForm } from './editGroupForm.js'
import { resetJoinGroupForm } from './joinGroupForm.js'

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

export const deleteGroupSuccess = groupId => {
  return {
    type: "DELETE_GROUP",
    groupId
  }
}

export const updateGroupSuccess = group => {
  return {
    type: "UPDATE_GROUP",
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
        dispatch(clearGroups())
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
        price: groupData.price,
        adminid: groupData.adminid,
        code: groupData.code,
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
        history.push(`/groups/${resp.data.id}`)
      }
    })
    .catch(console.log)
  }
}

export const updateGroup = (groupData, history) => {
  return dispatch => {
    const sendableGroupData = {
      name: groupData.name,
      price: groupData.price
    }
    return fetch(`http://localhost:3001/api/v1/groups/${groupData.groupId}`, {
      credentials: "include",
      method: "PATCH",
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
          dispatch(updateGroupSuccess(resp.data))
          dispatch(resetEditGroupForm())
          history.push(`/groups/${resp.data.id}`)
        }
      })
      .catch(console.log)

  }
}

export const deleteGroup = (groupId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/groups/${groupId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(deleteGroupSuccess(groupId))
          history.push(`/`)
        }
      })
      .catch(console.log)
  }
}

export const joinGroup = (groupData, history) => {
  return dispatch => {
    const sendableGroupData = {
      code: groupData.code
    }
    console.log(groupData)
    return fetch(`http://localhost:3001/api/v1/groups/join`, {
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
          dispatch(updateGroupSuccess(resp.data))
          dispatch(resetJoinGroupForm())
          history.push(`/groups/${resp.data.id}`)
        }
      })
      .catch(console.log)
  }
}
