import * as actionTypes from './actionTypes'

export const saveUser = (data) => ({
  type: actionTypes.SAVE_USER_DATA,
  payload: data
})

export const saveSkills = (list) => ({
  type: actionTypes.SAVE_SKILLS,
  payload: list
})
