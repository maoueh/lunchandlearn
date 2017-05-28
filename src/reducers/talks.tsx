import _ from 'lodash'
import * as Action from '../constants/actions/talk_fetcher'
import Talk from '../models/talk'

interface State {
  isLoading: boolean,
  talks: Talk[]
  failed: boolean
}
const initialState: State = {
  isLoading: false,
  talks: [],
  failed: false
}

export default function createReducer(
  state = initialState,
  action: { type: string, data: Talk[] }) {
  switch (action.type) {
    case Action.FETCH_TALKS: return _.assign({}, state, { isLoading: true, failed: false })
    case Action.FAILURE: return _.assign({}, state, { isLoading: false, failed: true })
    case Action.SUCCESS: return _.assign({}, state, { isLoading: false, talks: action.data})
    default: return state
  }
}