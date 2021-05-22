import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import * as action from '../login/redux/action'

import Navbar from './Navbar'
import { noop } from '../../utils'

const NavbarContainer = ({ logout, isUserLoggedIn }) => {
  const history = useHistory()
  const isLoggedIn = localStorage.getItem('isLoggedIn')

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
      isUserLoggedIn={isUserLoggedIn || isLoggedIn}
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
  logout: () => dispatch(action.logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)
