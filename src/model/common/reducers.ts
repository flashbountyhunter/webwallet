import { COMMON } from '../action-types';

export default function commonReducer(state = { isLoading: false, errorContent: {} }, action) {
    switch (action.type) {
        case COMMON.TOGGLE_LOADING:
            return Object.assign({}, state, { isLoading: action.data });
        case COMMON.ON_NEW_TX_ADDED:
        case COMMON.ON_SESSION_EXPIRED:
        case COMMON.ON_BE_REQUESTED:
        case COMMON.ON_REQUEST_STATE_CHANGED:
        case COMMON.NEED_UPDATE_PENDING_REQUEST:
            return Object.assign({}, state, { notificationData: action.data });
        case COMMON.NEED_UPDATE_BALANCE:
        case COMMON.NEED_UPDATE_CONTACT:
        default:
            return state;
    }
}