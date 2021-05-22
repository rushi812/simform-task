import React from 'react'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

import { noop } from '../../utils'
import useStyles from './style'

function Navbar({ loginBtnHandler, logoutBtnHandler, isUserLoggedIn }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='static' color='secondary'>
        <Toolbar>
          <Typography variant='h6' noWrap className={classes.appLogo}>
            Simform Task
          </Typography>
          {isUserLoggedIn ? (
            <Button
              color='primary'
              variant='contained'
              endIcon={<ExitToAppIcon />}
              onClick={logoutBtnHandler}
            >
              Logout
            </Button>
          ) : (
            <Button
              color='primary'
              variant='contained'
              endIcon={<PersonAddIcon />}
              onClick={loginBtnHandler}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

Navbar.propTypes = {
  loginBtnHandler: PropTypes.func,
  logoutBtnHandler: PropTypes.func
}

Navbar.defaultProps = {
  loginBtnHandler: noop,
  logoutBtnHandler: noop
}

export default Navbar
