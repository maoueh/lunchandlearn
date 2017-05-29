import _ from 'lodash'
import * as Action from '../constants/actions/talk'
import Talk from '../models/talk'

interface State {
  selectedTalkId: number
}
const initialState: State = {
  selectedTalkId: null
}

export default function createReducer(
  state: State = initialState,
  action: { type: string, data: Talk }) {
  console.log(action)
  switch (action.type) {
    case Action.SELECT_TALK:
    return _.assign({}, state, { selectedTalkID: action.data.id })
    default: return state
  }
}