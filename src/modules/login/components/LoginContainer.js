import { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import * as action from '../redux/action'
import { isEmpty, noop } from '../../../utils'

import Login from './Login'
import { useEffect } from 'react'

const DEFAULT_ERRORS = {
  email: false,
  password: false
}

const LoginContainer = ({ login }) => {
  const history = useHistory()

  const [errors, setErrors] = useState({ ...DEFAULT_ERRORS })
  const [isValidUser, setIsValidUser] = useState(false)
  const [formInput, setFormInput] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    setIsValidUser(true)
  }, [])

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

  const loginBtnHandler = (event) => {
    event.preventDefault()
    const isValid =
      formInput.email === 'admin@admin.com' &&
      formInput.password === 'admin@123'

    if (validate() && isValid) {
      setIsValidUser(true)
      login(formInput).then(() => {
        history.push('/profile')
      })
    } else {
      setIsValidUser(false)
    }
  }

  return (
    <Login
      loginBtnHandler={loginBtnHandler}
      handleInputChange={handleInputChange}
      formInput={formInput}
      errors={errors}
      isValidUser={isValidUser}
    />
  )
}

Login.propTypes = {
  login: PropTypes.func
}

Login.defaultProps = {
  login: noop
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(action.login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
