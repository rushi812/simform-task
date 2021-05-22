import React from 'react'

import Alert from '@material-ui/lab/Alert'

import useStyles from './style'

const Dashboard = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Alert
        variant='standard'
        severity='success'
        classes={{
          standardSuccess: classes.standardSuccess,
          message: classes.message
        }}
        icon={false}
      >
        Welcome, Please Login to Continue!
      </Alert>
    </div>
  )
}

export default Dashboard
