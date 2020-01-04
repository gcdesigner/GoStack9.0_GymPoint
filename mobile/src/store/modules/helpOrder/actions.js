export function loadRequest() {
  return {
    type: '@help/LOAD_REQUEST',
  };
}

export function loadSuccess(orders) {
  return {
    type: '@help/LOAD_SUCCESS',
    payload: { orders },
  };
}

export function detailRequest(id) {
  return {
    type: '@help/DETAIL_REQUEST',
    payload: { id },
  };
}

export function detailSuccess(order) {
  return {
    type: '@help/DETAIL_SUCCESS',
    payload: { order },
  };
}

export function addRequest(question) {
  return {
    type: '@help/ADD_REQUEST',
    payload: { question },
  };
}

export function addSuccess(order) {
  return {
    type: '@help/ADD_SUCCESS',
    payload: { order },
  };
}
