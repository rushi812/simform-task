import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'

import useStyles from './style'
import { noop } from '../../../../utils'

const ProfileDisplay = ({ user, userSkills, editProfileHandler }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant='h4' gutterBottom>
        Howdy! {user.name}
      </Typography>
      <Typography variant='h6' gutterBottom>
        Age: {user.age}
      </Typography>
      <Typography variant='h6' gutterBottom>
        Gender: {user.gender}
      </Typography>
      <Typography variant='h6' gutterBottom>
        Skills:
      </Typography>
      {userSkills?.length > 0 && (
        <div className={classes.chipContainer}>
          {userSkills.map((skill) => (
            <Chip
              key={skill.id}
              label={skill.text}
              color='primary'
              classes={{ colorPrimary: classes.colorPrimary }}
            />
          ))}
        </div>
      )}
      <Divider />
      <div className={classes.editBtnContainer}>
        <Button
          variant='contained'
          color='primary'
          onClick={editProfileHandler}
          className={classes.editBtn}
        >
          Edit Profile
        </Button>
      </div>
    </div>
  )
}

ProfileDisplay.propTypes = {
  user: PropTypes.instanceOf(Object),
  userSkills: PropTypes.instanceOf(Array),
  editProfileHandler: PropTypes.func
}

ProfileDisplay.defaultProps = {
  user: {},
  userSkills: [],
  editProfileHandler: noop
}

export default ProfileDisplay
