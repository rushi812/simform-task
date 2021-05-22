import { combineReducers } from 'redux'

import ProfileReducer from '../modules/profile/redux/reducer'
import AuthReducer from '../modules/login/redux/reducer'

const rootReducer = combineReducers({
  profile: ProfileReducer,
  auth: AuthReducer
})

export default rootReducer
