import { produce } from 'immer';

const INITIAL_STATE = {
  checkins: [],
  loading: false,
};

export default function Checkins(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@checkins/LOAD_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@checkins/LOAD_SUCCESS': {
        draft.checkins = action.payload.checkins;
        draft.loading = false;
        break;
      }

      case '@checkins/ADD_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@checkins/ADD_SUCCESS': {
        draft.checkins = [...state.checkins, action.payload.checkin];
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
