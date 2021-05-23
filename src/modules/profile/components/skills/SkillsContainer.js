/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { noop } from '../../../../utils'

import * as action from '../../redux/action'
import { data } from './data'
import Skills from './Skills'

const SkillsContainer = ({
  saveSkills,
  skills,
  addSkill,
  updateSkill,
  deleteSkill
}) => {
  const [addSkillInputValue, setAddSkillInputValue] = useState('')
  const [selectedSkillToUpdate, setSelectedSkillToUpdate] = useState({})
  const [isSkillEdit, setIsSkillEdit] = useState(false)

  const userSkills = JSON.parse(localStorage.getItem('userSkills'))

  useEffect(() => {
    if (userSkills?.length > 0) {
      saveSkills(userSkills)
    } else {
      saveSkills(data)
    }
  }, [])

  const handleSkillInputChange = (event) => {
    const {
      target: { value }
    } = event
    setAddSkillInputValue(value)
  }

  const editListItemHandler = (skillId) => {
    setIsSkillEdit(true)

    const selectedSkill = skills.find((skill) => skill.id === skillId)
    setSelectedSkillToUpdate(selectedSkill)
    setAddSkillInputValue(selectedSkill.text)
  }

  const updateSkilBtnHandler = () => {
    const { id } = selectedSkillToUpdate

    setIsSkillEdit(false)
    updateSkill(id, addSkillInputValue)
    setAddSkillInputValue('')
  }

  const addSkilBtnHandler = () => {
    addSkill(addSkillInputValue)
    setAddSkillInputValue('')
  }

  const deleteItemHandler = (skillId) => {
    deleteSkill(skillId)
  }

  return (
    <Skills
      handleSkillInputChange={handleSkillInputChange}
      addSkilBtnHandler={addSkilBtnHandler}
      saveSkills={saveSkills}
      skillsList={skills}
      deleteItemHandler={deleteItemHandler}
      editListItemHandler={editListItemHandler}
      addSkillInputValue={addSkillInputValue}
      isSkillEdit={isSkillEdit}
      updateSkilBtnHandler={updateSkilBtnHandler}
    />
  )
}

SkillsContainer.propTypes = {
  saveSkills: PropTypes.func,
  skills: PropTypes.instanceOf(Array),
  addSkill: PropTypes.func,
  updateSkill: PropTypes.func,
  deleteSkill: PropTypes.func
}

SkillsContainer.defaultProps = {
  saveSkills: noop,
  skills: [],
  addSkill: noop,
  updateSkill: noop,
  deleteSkill: noop
}

const mapStateToProps = (state) => ({
  skills: state.profile.skills
})

const mapDispatchToProps = (dispatch) => ({
  saveSkills: (list) => dispatch(action.saveSkills(list)),
  addSkill: (skill) => dispatch(action.addSkill(skill)),
  updateSkill: (skillId, text) => dispatch(action.updateSkill(skillId, text)),
  deleteSkill: (skillId) => dispatch(action.deleteSkill(skillId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SkillsContainer)
