import _ from 'lodash';
import * as Action from '../constants/actions/talk';
const initialState = {
    selectedTalkId: null
};
export default function createReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case Action.SELECT_TALK:
            return _.assign({}, state, { selectedTalkID: action.data.id });
        default: return state;
    }
}
//# sourceMappingURL=talk_selection.js.map