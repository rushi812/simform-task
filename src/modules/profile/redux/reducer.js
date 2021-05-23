import * as actionTypes from './actionTypes'
import { v4 as uuidv4 } from 'uuid'

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
    case actionTypes.ADD_SKILL:
      localStorage.setItem(
        'userSkills',
        JSON.stringify([
          ...state.skills,
          {
            id: uuidv4(),
            text: payload
          }
        ])
      )
      return {
        ...state,
        skills: [
          ...state.skills,
          {
            id: uuidv4(),
            text: payload
          }
        ]
      }
    case actionTypes.UPDATE_SKILL: {
      const tempSkills =
        state.skills &&
        state.skills.map((skill) =>
          skill.id === payload.skillId
            ? {
                ...skill,
                text: payload.text
              }
            : skill
        )
      localStorage.setItem('userSkills', JSON.stringify(tempSkills))
      return {
        ...state,
        skills: tempSkills
      }
    }
    case actionTypes.DELETE_SKILL: {
      const tempSkills =
        state.skills && state.skills.filter((skill) => skill.id !== payload)
      localStorage.setItem('userSkills', JSON.stringify(tempSkills))
      return {
        ...state,
        skills: tempSkills
      }
    }
    case actionTypes.CLEAR_STATE:
      return {
        ...state,
        user: {},
        skills: []
      }
    default:
      return state
  }
}

export default ProfileReducer
