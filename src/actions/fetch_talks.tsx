import axios from 'axios'
import { api } from '../constants/api'
import * as Action from '../constants/actions/talk'
import Talk from '../models/talk'

export default function fetchTalks(): (dispatch: any) => Promise<Talk[]> {
  return (dispatch) => {
    dispatch({ type: Action.FETCH_TALKS, data: undefined })
    return axios.get(api.talks())
      .then(response => response.data)
      .then((talks) => dispatch({ type: Action.RECEIVED_TALKS, data: talks }))
  }
}
