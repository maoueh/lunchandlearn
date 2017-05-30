import _ from 'lodash';
// import User from '../models/user'
import AuthAPI from '../api/auth';
import * as Action from '../constants/actions/session';
const initialState = {
    authenticated: false,
    isLoading: false,
    // userId: undefined,
    loginFailed: false
};
export default function createReducer(state = initialState, action) {
    switch (action.type) {
        case Action.LOGIN:
            console.log('LOGIN CALLED');
            return _.assign({}, state, { loginFailed: false, isLoading: true });
        case Action.LOGIN_FAILED: return _.assign({}, state, { loginFailed: true, isLoading: false });
        case Action.LOGIN_SUCCEEDED:
            const authenticatedState = {
                authenticated: true,
                isLoading: false
                // userId: action.data.id
            };
            return _.assign({}, state, authenticatedState);
        default: return state;
    }
}
export function emailLogin(email, password) {
    return (dispatch) => {
        dispatch({ type: Action.LOGIN });
        return AuthAPI.emailLogin(email, password)
            .then(dispatch({ type: Action.LOGIN_SUCCEEDED }))
            .catch(dispatch({ type: Action.LOGIN_FAILED }));
    };
}
export function socialLogin(token) {
    return (dispatch) => {
        dispatch({ type: Action.LOGIN });
        return AuthAPI.socialLogin(token)
            .then(dispatch({ type: Action.LOGIN_SUCCEEDED }))
            .catch(dispatch({ type: Action.LOGIN_FAILED }));
    };
}
//# sourceMappingURL=auth.js.map