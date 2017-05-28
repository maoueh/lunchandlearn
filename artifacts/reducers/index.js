import { combineReducers } from 'redux';
import AuthenticationReducer from './auth';
import TalksReducer from './talks';
export default combineReducers({ auth: AuthenticationReducer, talks: TalksReducer });
//# sourceMappingURL=index.js.map