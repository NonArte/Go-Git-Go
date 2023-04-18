import { combineReducers } from 'redux';
import userReducer from './userReducer';
import repoReducer from './repoReducer';

const rootReducer = combineReducers({
	user: userReducer,
	repos: repoReducer,
});

export default rootReducer;
