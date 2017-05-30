import { combineReducers } from 'redux'
import AuthenticationReducer from './auth'
import TalksReducer from './talk_fetch'
import TalkSelectionReducer from './talk_selection'

export default combineReducers({
  auth: AuthenticationReducer,
  talks: TalksReducer,
  selectedTalk: TalkSelectionReducer
})