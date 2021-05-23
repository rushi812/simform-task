import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6)
  },
  standardSuccess: {
    width: '80%',
    margin: '0 auto',
    padding: '1rem',
    fontSize: '2rem',
    color: theme.palette.primary.main,
    backgroundColor: `${theme.palette.secondary.main}59`
  },
  message: {
    margin: '0 auto'
  }
}))

export default useStyles
