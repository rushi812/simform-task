import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  paper: {
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      padding: theme.spacing(3)
    }
  },
  listItem: {
    backgroundColor: theme.palette.secondary.main,
    margin: '1rem 0',
    padding: '1rem',
    borderRadius: '5px',
    border: `1px solid ${theme.palette.primary.main}`
  },
  button: {
    '&:hover': {
      backgroundColor: `${theme.palette.secondary.main}4a`
    }
  },
  primary: {
    fontSize: '1.2rem',
    fontWeight: 600
  }
}))

export default useStyles
