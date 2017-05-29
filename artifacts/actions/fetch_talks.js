import axios from 'axios';
import { api } from '../constants/api';
import * as Action from '../constants/actions/talk';
export default function fetchTalks() {
    return (dispatch) => {
        dispatch({ type: Action.FETCH_TALKS, data: undefined });
        return axios.get(api.talks())
            .then(response => response.data)
            .then((talks) => dispatch({ type: Action.RECEIVED_TALKS, data: talks }));
    };
}
//# sourceMappingURL=fetch_talks.js.map