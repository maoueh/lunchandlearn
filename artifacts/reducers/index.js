import { combineReducers } from 'redux';
import AuthenticationReducer from './auth';
import TalksReducer from './talks';
import TalkSelectionReducer from './talk_selection';
export default combineReducers({
    auth: AuthenticationReducer,
    talks: TalksReducer,
    selectedTalkID: TalkSelectionReducer
});
//# sourceMappingURL=index.js.map