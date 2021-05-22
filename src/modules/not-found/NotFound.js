import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Alert from '@material-ui/lab/Alert'
import Box from '@material-ui/core/Box'

import useStyles from './style'

const NotFound = () => {
  const classes = useStyles()
  const isLoggedIn = localStorage.getItem('isLoggedIn')

  return (
    <div className={classes.root}>
      <Alert
        variant='standard'
        severity='error'
        classes={{
          standardError: classes.standardError,
          message: classes.message
        }}
        icon={false}
      >
        Opps! 404 <br />
        This is not the web page you are looking for!
      </Alert>
      <Box p={2}>
        <Button color='primary' variant='outlined' className={classes.button}>
          <Link to='/' className={classes.link}>
            Dashboard
          </Link>
        </Button>
        {!isLoggedIn && (
          <Button color='primary' variant='outlined' className={classes.button}>
            <Link to='/login' className={classes.link}>
              Login
            </Link>
          </Button>
        )}
      </Box>
    </div>
  )
}

export default NotFound
