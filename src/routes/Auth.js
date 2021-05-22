import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

const Auth = (ComposedComponent) => {
  const Authentication = ({ loggedInUser }) => {
    const history = useHistory()

    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user')) || {}
      const isLoggedIn = localStorage.getItem('isLoggedIn')

      if (user && Object.keys(user).length > 0 && isLoggedIn) {
        history.push('/profile')
        if (!Object.keys(loggedInUser).length > 0) {
          localStorage.setItem('user', JSON.stringify(user))
        } else if (Object.keys(loggedInUser).length > 0) {
          localStorage.setItem('user', JSON.stringify(loggedInUser))
        }
      } else {
        history.push('/')
      }
    }, [])

    return <ComposedComponent />
  }

  Authentication.propTypes = {
    loggedInUser: PropTypes.instanceOf(Object)
  }

  Authentication.defaultProps = {
    loggedInUser: ''
  }

  const mapstateToProps = (state) => ({
    loggedInUser: state.auth.loggedInUser
  })

  return connect(mapstateToProps, null)(Authentication)
}

export default Auth
