import PropTypes from 'prop-types'

import Alert from '@material-ui/lab/Alert'

import useStyles from './style'

const Profile = ({ loggedInUser }) => {
  const classes = useStyles()
  const user = JSON.parse(localStorage.getItem('user')) || {}

  return (
    <div className={classes.root}>
      <Alert
        variant='standard'
        severity='success'
        classes={{
          standardSuccess: classes.standardSuccess,
          message: classes.message
        }}
        icon={false}
      >
        {`Howdy! ${
          loggedInUser && Object.keys(loggedInUser).length > 0
            ? loggedInUser.email
            : user.email
        }`}
      </Alert>
    </div>
  )
}

Profile.propTypes = {
  loggedInUser: PropTypes.instanceOf(Object)
}

Profile.defaultProps = {
  loggedInUser: {}
}

export default Profile
