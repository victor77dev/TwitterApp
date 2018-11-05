import { combineReducers } from 'redux';
import headerReducer from './headerReducer';
import twitterReducer from './twitterReducer';

export default combineReducers({
  header: headerReducer,
  twitter: twitterReducer,
})
