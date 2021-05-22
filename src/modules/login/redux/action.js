import * as actionTypes from './actionTypes'

export const login = (user) => ({
  type: actionTypes.LOGIN,
  payload: new Promise((resolve) => {
    resolve(user)
  })
})

export const logout = () => ({
  type: actionTypes.LOGOUT
})
