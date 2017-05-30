import _ from 'lodash';
import * as Action from '../constants/actions/talk';
const initialState = {
    id: undefined
};
export default function createReducer(state = initialState, action) {
    switch (action.type) {
        case Action.SELECT_TALK:
            if (state.id === action.data)
                return _.assign({}, state, { id: undefined });
            return _.assign({}, state, { id: action.data });
        default: return state;
    }
}
export function selectTalk(id) {
    return (dispatch) => {
        dispatch({ type: Action.SELECT_TALK, data: id });
    };
}
//# sourceMappingURL=talk_selection.js.map