import _ from 'lodash';
import * as Action from '../constants/actions/session_fetcher';
const initialState = {
    authenticated: false,
    userId: undefined,
    loginFailed: false
};
export default function createReducer(state = initialState, action) {
    switch (action.type) {
        case Action.LOGIN: return _.assign({}, state, { loginFailed: false });
        case Action.LOGIN_FAILED: return _.assign({}, state, { loginFailed: true });
        case Action.LOGIN_SUCCEEDED:
            const authenticatedState = {
                authenticated: true,
                userId: action.data.id
            };
            return _.assign({}, state, authenticatedState);
        default: return state;
    }
}
//# sourceMappingURL=auth.js.map