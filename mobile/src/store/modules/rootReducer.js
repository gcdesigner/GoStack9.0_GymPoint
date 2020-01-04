import { combineReducers } from 'redux';

import auth from './auth/reducer';
import checkins from './checkins/reducer';
import helpOrder from './helpOrder/reducer';

export default combineReducers({
  auth,
  checkins,
  helpOrder,
});
