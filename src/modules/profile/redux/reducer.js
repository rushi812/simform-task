import * as actionTypes from './actionTypes'

const INITIAL_STATE = {
  user: {},
  skills: []
}

const ProfileReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case actionTypes.SAVE_USER_DATA:
      localStorage.setItem('userData', JSON.stringify(payload))
      return {
        ...state,
        user: {
          ...state.user,
          ...payload
        }
      }
    case actionTypes.SAVE_SKILLS:
      localStorage.setItem('userSkills', JSON.stringify(payload))
      return {
        ...state,
        skills: payload
      }
    default:
      return state
  }
}

export default ProfileReducer
