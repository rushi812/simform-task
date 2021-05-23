import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { noop } from '../../../../utils'

import * as action from '../../redux/action'
import Skills from './Skills'

const SkillsContainer = ({ saveSkills }) => {
  return <Skills saveSkills={saveSkills} />
}

SkillsContainer.propTypes = {
  saveSkills: PropTypes.func
}

SkillsContainer.defaultProps = {
  saveSkills: noop
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  saveSkills: (list) => dispatch(action.saveSkills(list))
})

export default connect(mapStateToProps, mapDispatchToProps)(SkillsContainer)
