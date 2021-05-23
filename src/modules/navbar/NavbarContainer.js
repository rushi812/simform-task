/* eslint-disable react-hooks/exhaustive-deps */
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import * as action from '../login/redux/action'
import * as profileAction from '../profile/redux/action'

import Navbar from './Navbar'
import { noop } from '../../utils'
import { useEffect } from 'react'

const NavbarContainer = ({ logout, isUserLoggedIn, clearState }) => {
  const history = useHistory()
  const isLoggedIn = localStorage.getItem('isLoggedIn')

  useEffect(() => {
    clearState()
  }, [isUserLoggedIn])

  const loginBtnHandler = () => {
    history.push('/login')
  }

  const logoutBtnHandler = () => {
    logout()
    history.push('/')
  }

  return (
    <Navbar
      loginBtnHandler={loginBtnHandler}
      logoutBtnHandler={logoutBtnHandler}
      isUserLoggedIn={Boolean(isUserLoggedIn || isLoggedIn)}
    />
  )
}

NavbarContainer.propTypes = {
  logout: PropTypes.func,
  isUserLoggedIn: PropTypes.bool
}

NavbarContainer.defaultProps = {
  logout: noop,
  isUserLoggedIn: false
}

const mapStateToProps = (state) => ({
  isUserLoggedIn: state.auth.isUserLoggedIn
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(action.logout()),
  clearState: () => dispatch(profileAction.clearState())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)
