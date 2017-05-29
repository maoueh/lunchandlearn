import _ from 'lodash'
import * as Action from '../constants/actions/talk'
import Talk from '../models/talk'

interface State {
  isLoading: boolean,
  data: Talk[]
  failed: boolean
}
const initialState: State = {
  isLoading: false,
  data: [],
  failed: false
}

export default function createReducer(
  state: State = initialState,
  action: { type: string, data: any }) {
  switch (action.type) {
    case Action.FETCH_TALKS:
    console.log('FETCHING TALKS')
    return _.assign({}, state, { isLoading: true, failed: false })
    case Action.FETCH_TALKS_FAILED: return _.assign({}, state, { isLoading: false, failed: true })
    case Action.RECEIVED_TALKS: return _.assign({}, state, { isLoading: false, data: action.data})
    default: return state
  }
}