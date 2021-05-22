import PropTypes from 'prop-types'

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Alert from '@material-ui/lab/Alert'

import { noop } from '../../../utils'

import useStyles from './style'

const Login = ({
  loginBtnHandler,
  handleInputChange,
  formInput,
  errors,
  isValidUser
}) => {
  const classes = useStyles()

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Login
        </Typography>
        {!isValidUser && (
          <Alert severity='warning' className={classes.alert}>
            Email and Password does not match
          </Alert>
        )}
        <form className={classes.form} noValidate onSubmit={loginBtnHandler}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email'
            name='email'
            type='text'
            autoComplete='email'
            defaultValue={formInput.email}
            error={Boolean(errors?.email)}
            helperText={errors?.email ? 'Email is required' : ''}
            onChange={handleInputChange}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            defaultValue={formInput.password}
            autoComplete='current-password'
            error={Boolean(errors?.password)}
            helperText={errors?.password ? 'Password is required' : ''}
            onChange={handleInputChange}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Login
          </Button>
        </form>
      </div>
    </Container>
  )
}

Login.propTypes = {
  loginBtnHandler: PropTypes.func,
  handleInputChange: PropTypes.func,
  formInput: PropTypes.instanceOf(Object),
  errors: PropTypes.instanceOf(Object),
  isValid: PropTypes.bool
}

Login.defaultProps = {
  loginBtnHandler: noop,
  handleInputChange: noop,
  formInput: {},
  errors: {},
  isValid: false
}

export default Login
