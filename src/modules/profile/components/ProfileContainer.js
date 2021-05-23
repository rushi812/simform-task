import { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Profile from './Profile'
import { isEmpty, noop } from '../../../utils'
import * as action from '../redux/action'

const DEFAULT_ERRORS = {
  name: false,
  age: false,
  gender: false
}

const ProfileContainer = ({
  userProfile,
  skills,
  saveUser,
  isUserLoggedIn
}) => {
  const [errors, setErrors] = useState({ ...DEFAULT_ERRORS })
  const [isProfileEdit, setIsProfileEdit] = useState(false)
  const [formInput, setFormInput] = useState({
    name: '',
    age: '',
    gender: ''
  })

  const user = JSON.parse(localStorage.getItem('userData'))
  const userSkills = JSON.parse(localStorage.getItem('userSkills'))
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'))

  const validate = () => {
    const errorsObj = { ...errors }
    const errorKeys = Object.keys(DEFAULT_ERRORS)

    errorKeys.forEach((errorKey) => {
      if (isEmpty(formInput[errorKey])) {
        errorsObj[errorKey] = true
      }
    })

    setErrors((prevState) => ({ ...prevState, ...errorsObj }))

    if (Object.keys(errorsObj).every((key) => errorsObj[key] === false)) {
      return true
    }

    return false
  }

  const handleInputChange = (event) => {
    const {
      target: { value, name }
    } = event
    setErrors({ ...errors, [name]: false })
    setFormInput({
      ...formInput,
      [name]: value
    })
  }

  const profileFormHandler = (event) => {
    event.preventDefault()

    if (validate()) {
      saveUser(formInput)
    }
    setIsProfileEdit(false)
  }

  const editProfileHandler = () => {
    setIsProfileEdit(true)
    setFormInput({
      name: user.name,
      age: user.age,
      gender: user.gender
    })
  }

  return (
    <Profile
      userProfile={user || userProfile}
      userSkills={userSkills || skills}
      profileFormHandler={profileFormHandler}
      formInput={formInput}
      handleInputChange={handleInputChange}
      errors={errors}
      isLoggedIn={isLoggedIn || isUserLoggedIn}
      editProfileHandler={editProfileHandler}
      isProfileEdit={isProfileEdit}
    />
  )
}

ProfileContainer.propTypes = {
  userProfile: PropTypes.instanceOf(Object),
  skills: PropTypes.instanceOf(Array),
  saveUser: PropTypes.func,
  isUserLoggedIn: PropTypes.bool
}

ProfileContainer.defaultProps = {
  userProfile: {},
  skills: [],
  saveUser: noop,
  isUserLoggedIn: false
}

const mapStateToProps = (state) => ({
  userProfile: state.profile.user,
  skills: state.profile.skills,
  isUserLoggedIn: state.auth.isUserLoggedIn
})

const mapDispatchToProps = (dispatch) => ({
  saveUser: (data) => dispatch(action.saveUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
