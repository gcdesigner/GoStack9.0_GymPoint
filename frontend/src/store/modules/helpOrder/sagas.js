import { all, takeLatest, put, call, select } from 'redux-saga/effects';
import { loadSuccess, addSuccess, removeSuccess } from './actions';

import { toast } from 'react-toastify';

import api from '~/services/api';

export function* loadOrders() {
  try {
    const response = yield call(api.get, 'help-orders');

    const noAnswered = response.data.filter(e => e.answer == null);
    const answered = response.data.filter(e => e.answer);

    yield put(loadSuccess(noAnswered, answered));
  } catch (err) {
    if(err) {
      toast.error(err.response.data.error);
    } else {
      toast.error('Não foi possível carregar a listagem de pedidos de auxílio');
    }
  }
}

export function* addAnswer({ payload }) {
  try {
    const { id, answer } = payload;

    const response = yield call(api.put, `help-orders/${id}/answer`, {
      answer,
    });

    /**
     * Remove order from orders state
     */
    const orders = yield select(state =>
      state.helpOrder.orders.filter(i => i.id !== id)
    );

    const orderAnswered = response.data;

    yield put(addSuccess(orders, response.data));

    toast.success('Resposta cadastrada com sucesso');
  } catch (err) {
    if(err) {
      toast.error(err.response.data.error);
    } else {
      toast.error('Não foi cadastrar a resposta');
    }
  }
}

export function* removeOrder({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `help-orders/${id}`);

    const updateOrdersAnswered = yield select(state =>
      state.helpOrder.ordersAnswered.filter(i => i.id !== id)
    );

    yield put(removeSuccess(updateOrdersAnswered));

    toast.success('Pergunta excluída com sucesso');
  } catch (err) {
    if(err) {
      toast.error(err.response.data.error);
    } else {
      toast.error('Não foi possível excluir a pergunta');
    }
  }
}

export default all([
  takeLatest('@help/LOAD_REQUEST', loadOrders),
  takeLatest('@help/ADD_REQUEST', addAnswer),
  takeLatest('@help/REMOVE_REQUEST', removeOrder),
]);
