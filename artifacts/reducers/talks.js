import _ from 'lodash';
import * as Action from '../constants/actions/talk_fetcher';
const initialState = {
    isLoading: false,
    data: [],
    failed: false
};
export default function createReducer(state = initialState, action) {
    switch (action.type) {
        case Action.FETCH_TALKS: return _.assign({}, state, { isLoading: true, failed: false });
        case Action.FETCH_TALKS_FAILED: return _.assign({}, state, { isLoading: false, failed: true });
        case Action.RECEIVED_TALKS: return _.assign({}, state, { isLoading: false, data: action.data });
        default: return state;
    }
}
//# sourceMappingURL=talks.js.map