import * as actionTypes from './actionTypes'

const INITIAL_STATE = {
  loggedInUser: {},
  loginLoading: false,
  isUserLoggedIn: false
}

const AuthReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case actionTypes.LOGIN_LOADING:
      return {
        ...state,
        loginLoading: true
      }
    case actionTypes.LOGIN_SUCCESS:
      localStorage.setItem('user', JSON.stringify(payload))
      localStorage.setItem('isLoggedIn', true)
      return {
        ...state,
        loggedInUser: payload,
        loginLoading: false,
        isUserLoggedIn: true
      }
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        loginLoading: false
      }
    case actionTypes.LOGOUT:
      localStorage.clear()
      return {
        ...state,
        loggedInUser: {},
        isUserLoggedIn: false
      }
    default:
      return state
  }
}

export default AuthReducer
