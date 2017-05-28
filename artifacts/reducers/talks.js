import _ from 'lodash';
import * as Action from '../constants/actions/talk_fetcher';
const initialState = {
    isLoading: false,
    talks: [],
    failed: false
};
export default function createReducer(state = initialState, action) {
    switch (action.type) {
        case Action.FETCH_TALKS: return _.assign({}, state, { isLoading: true, failed: false });
        case Action.FAILURE: return _.assign({}, state, { isLoading: false, failed: true });
        case Action.SUCCESS: return _.assign({}, state, { isLoading: false, talks: action.data });
        default: return state;
    }
}
//# sourceMappingURL=talks.js.map