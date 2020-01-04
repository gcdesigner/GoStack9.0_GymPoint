export function loadRequest(id) {
  return {
    type: '@checkins/LOAD_REQUEST',
    payload: { id },
  };
}

export function loadSuccess(checkins) {
  return {
    type: '@checkins/LOAD_SUCCESS',
    payload: { checkins },
  };
}

export function addRequest(id) {
  return {
    type: '@checkins/ADD_REQUEST',
    payload: { id },
  };
}

export function addSuccess(checkin) {
  return {
    type: '@checkins/ADD_SUCCESS',
    payload: { checkin },
  };
}
