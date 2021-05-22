import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Profile from './Profile'

const ProfileContainer = ({ loggedInUser }) => {
  return <Profile loggedInUser={loggedInUser} />
}

ProfileContainer.propTypes = {
  loggedInUser: PropTypes.instanceOf(Object)
}

ProfileContainer.defaultProps = {
  loggedInUser: {}
}

const mapStateToProps = (state) => ({
  loggedInUser: state.auth.loggedInUser
})

export default connect(mapStateToProps, null)(ProfileContainer)
