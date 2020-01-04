import { produce } from 'immer';

const INITIAL_STATE = {
  loading: false,
  orders: [],
  ordersAnswered: [],
};

export default function helpOrder(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@help/LOAD_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@help/LOAD_SUCCESS': {
        draft.loading = false;
        draft.orders = action.payload.orders;
        draft.ordersAnswered = action.payload.ordersAnswered;
        break;
      }

      case '@help/ADD_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@help/ADD_SUCCESS': {
        draft.loading = false;
        draft.orders = action.payload.orders;
        draft.ordersAnswered = [...state.ordersAnswered, action.payload.orderAnswered];
        break;
      }

      case '@help/REMOVE_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@help/REMOVE_SUCCESS': {
        draft.loading = false;
        draft.ordersAnswered = action.payload.orders;
        break;
      }

      default:
    }
  });
}
