import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    marginTop: theme.spacing(6)
  },
  standardError: {
    width: '80%',
    margin: '0 auto',
    padding: '1rem',
    fontSize: '2rem',
    border: '1px solid #f44336'
  },
  message: {
    margin: '0 auto'
  },
  button: {
    margin: '1rem',
    width: '8rem'
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main
  }
}))

export default useStyles
