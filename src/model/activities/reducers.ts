import { ACTIVITIES } from '../action-types';
import { getText } from '../../components/localise';

var homeTabs = [];

export default function activityReducer(
  state = {
    txns: [],
    total_txns: 0,
    page_size: 10,
    tabs: homeTabs,
    txn_detail: {},
    showTransactionDetail: false,
  },
  action
) {
  switch (action.type) {
    case ACTIVITIES.GET_MORE_TXN_SUCCESS:
      if (state.tabs.length == 0) {
        state.tabs = initTabs();
      }
      var txns = action.data.txns || [];
      return Object.assign({}, state, {
        txns: txns,
        total_txns: action.data.total_txns,
      });
    case ACTIVITIES.SET_ACTIVE_TAB:
      var oldList = state.tabs.length > 0 ? state.tabs : initTabs();
      var newList = oldList.map(tab => {
        tab.isActive = tab.id == action.data;
        return tab;
      });
      return Object.assign({}, state, { tabs: newList });
    case ACTIVITIES.GET_TXN_DETAIL_SUCCESS:
      return Object.assign({}, state, {
        txn_detail: action.data,
        showTransactionDetail: true,
      });
    default:
      return state;
  }
}

function initTabs() {
  return [
    {
      id: 0,
      code: 'ALL',
      name: getText('activity_tab_all_transaction'),
      isActive: true,
    },
    {
      id: 2,
      code: 'RECEIVED',
      name: getText('activity_tab_received_transaction'),
      isActive: false,
    },
    {
      id: 1,
      code: 'SENT',
      name: getText('activity_tab_sent_transaction'),
      isActive: false,
    },
  ];
}
