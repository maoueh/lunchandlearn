import axios from 'axios'
import { api } from '../constants/api'
import Talk from '../models/talk'
import talks from '../mock/talks.json'

export function fetchTalks(): Promise<Talk[]> {

  return axios.get(api.talks())
  .then(response => response.data)
  .then((_) => talks.map((response) => Talk.fromJson(response)))

}
