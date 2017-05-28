import axios from 'axios';
import { api } from '../constants/api';
import Talk from '../models/fakeTalk';
export function fetchTalks() {
    return axios.get(api.talks())
        .then(response => response.data)
        .then((json) => json.map((response) => Talk.fromJson(response)));
}
//# sourceMappingURL=talk.js.map