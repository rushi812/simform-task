import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  chipContainer: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  colorPrimary: {
    marginRight: '1rem',
    marginBottom: '1rem'
  },
  editBtnContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  editBtn: {
    marginTop: theme.spacing(2)
  }
}))

export default useStyles
