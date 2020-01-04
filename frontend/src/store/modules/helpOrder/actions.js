export function loadRequest() {
  return {
    type: '@help/LOAD_REQUEST',
  };
}

export function loadSuccess(orders, ordersAnswered) {
  return {
    type: '@help/LOAD_SUCCESS',
    payload: { orders, ordersAnswered },
  };
}

export function addRequest(id, answer) {
  return {
    type: '@help/ADD_REQUEST',
    payload: { id, answer },
  };
}

export function addSuccess(orders, orderAnswered) {
  return {
    type: '@help/ADD_SUCCESS',
    payload: { orders, orderAnswered },
  };
}

export function removeRequest(id) {
  return {
    type: '@help/REMOVE_REQUEST',
    payload: { id },
  };
}

export function removeSuccess(orders) {
  return {
    type: '@help/REMOVE_SUCCESS',
    payload: { orders },
  };
}
