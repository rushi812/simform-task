import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  appLogo: {
    color: theme.palette.primary.dark,
    marginRight: theme.spacing(4),
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    flexGrow: 1
  },
  button: {
    color: '#fff',
    textDecoration: 'none',
    padding: theme.spacing(1),
    borderRadius: '5px'
  }
}))

export default useStyles
