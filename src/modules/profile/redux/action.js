import * as actionTypes from './actionTypes'

export const saveUser = (data) => ({
  type: actionTypes.SAVE_USER_DATA,
  payload: data
})

export const saveSkills = (list) => ({
  type: actionTypes.SAVE_SKILLS,
  payload: list
})

export const addSkill = (skill) => ({
  type: actionTypes.ADD_SKILL,
  payload: skill
})

export const updateSkill = (skillId, text) => ({
  type: actionTypes.UPDATE_SKILL,
  payload: {
    skillId,
    text
  }
})

export const deleteSkill = (skillId) => ({
  type: actionTypes.DELETE_SKILL,
  payload: skillId
})

export const clearState = () => ({
  type: actionTypes.CLEAR_STATE
})
