import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Typography from '@material-ui/core/Typography'

import useStyles from './style'
import SkillsContainer from './skills/SkillsContainer'
import ProfileDisplay from './profile-display/ProfileDisplay'
import { noop } from '../../../utils'

const Profile = ({
  userProfile,
  userSkills,
  profileFormHandler,
  formInput,
  handleInputChange,
  errors,
  isLoggedIn,
  editProfileHandler,
  isProfileEdit
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          {isLoggedIn &&
          !isProfileEdit &&
          Object.keys(userProfile).length > 0 ? (
            <ProfileDisplay
              user={userProfile}
              userSkills={userSkills}
              editProfileHandler={editProfileHandler}
            />
          ) : (
            <form
              className={classes.form}
              noValidate
              onSubmit={profileFormHandler}
            >
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    variant='outlined'
                    id='name'
                    name='name'
                    label='Name'
                    fullWidth
                    autoComplete='name'
                    defaultValue={formInput.name}
                    error={Boolean(errors?.name)}
                    helperText={errors?.name ? 'Name is required' : ''}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    variant='outlined'
                    id='age'
                    name='age'
                    label='Age'
                    fullWidth
                    autoComplete='age'
                    type='number'
                    defaultValue={formInput.age}
                    error={Boolean(errors?.age)}
                    helperText={errors?.age ? 'Age is required' : ''}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl
                    component='fieldset'
                    error={errors?.gender}
                    required
                  >
                    <FormLabel component='legend'>Gender</FormLabel>
                    {errors?.gender && (
                      <Typography
                        variant='caption'
                        display='block'
                        gutterBottom
                        color='error'
                      >
                        Please select Gender
                      </Typography>
                    )}
                    <RadioGroup
                      row
                      aria-label='gender'
                      name='gender'
                      value={formInput.gender}
                      onChange={handleInputChange}
                    >
                      <FormControlLabel
                        value='Female'
                        control={<Radio />}
                        label='Female'
                      />
                      <FormControlLabel
                        value='Male'
                        control={<Radio />}
                        label='Male'
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <SkillsContainer />
                </Grid>
              </Grid>
              <div className={classes.buttons}>
                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  className={classes.button}
                >
                  Save
                </Button>
              </div>
            </form>
          )}
        </Paper>
      </main>
    </div>
  )
}

Profile.propTypes = {
  userProfile: PropTypes.instanceOf(Object),
  userSkills: PropTypes.instanceOf(Array),
  profileFormHandler: PropTypes.func,
  formInput: PropTypes.instanceOf(Object),
  handleInputChange: PropTypes.func,
  errors: PropTypes.instanceOf(Object),
  isLoggedIn: PropTypes.bool,
  editProfileHandler: PropTypes.func,
  isProfileEdit: PropTypes.bool
}

Profile.defaultProps = {
  userProfile: {},
  userSkills: [],
  profileFormHandler: noop,
  formInput: {},
  handleInputChange: noop,
  errors: {},
  isLoggedIn: false,
  editProfileHandler: noop,
  isProfileEdit: false
}

export default Profile
