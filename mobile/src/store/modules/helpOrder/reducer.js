import { produce } from 'immer';
import { NavigationActions } from 'react-navigation';

const INITIAL_STATE = {
  loading: false,
  orders: [],
  order: {},
};

export default function helpOrder(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@help/LOAD_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@help/LOAD_SUCCESS': {
        draft.orders = action.payload.orders;
        draft.loading = false;
        break;
      }

      case '@help/DETAIL_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@help/DETAIL_SUCCESS': {
        draft.order = action.payload.order;
        NavigationActions.navigate({ routeName: 'HelpOrder' });
        draft.loading = false;
        break;
      }

      case '@help/ADD_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@help/ADD_SUCCESS': {
        draft.orders = [...state.orders, action.payload.order];
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
