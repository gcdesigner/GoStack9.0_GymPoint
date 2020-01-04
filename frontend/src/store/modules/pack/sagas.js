import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import { addSuccess, updateSuccess, removeSuccess, failure } from './actions';

export function* addPack({ payload }) {
  try {
    const { title, duration, price } = payload;

    const response = yield call(api.post, 'packs', {
      title,
      duration,
      price,
    });

    yield put(addSuccess(response.data));

    toast.success('Pacote cadastrado com sucesso');
    history.push('/packs');
  } catch (error) {
    yield put(failure());
    toast.error(error.response.data.error);
  }
}

export function* updatePack({ payload }) {
  try {
    const { id, title, duration, price } = payload;

    const response = yield call(api.put, `packs/${id}`, {
      title,
      duration,
      price,
    });

    yield put(updateSuccess(response.data));

    toast.success('Pacote atualizado com sucesso');
    history.push('/packs');
  } catch (err) {
    if(err) {
      toast.err(err.response.data.error);
    } else {
      toast.error('Não foi possível cadastrar o pacote');
    }
    yield put(failure());
  }
}

export function* removePack({ payload }) {
  const { id } = payload.pack;
  try {
    yield call(api.delete, `packs/${id}`);
    yield put(removeSuccess(payload.pack));

    toast.success('Pacote removido com sucesso');
  } catch (error) {
    yield put(failure());
    toast.error(error.response.data.error);
  }
}

export default all([
  takeLatest('@pack/ADD_REQUEST', addPack),
  takeLatest('@pack/UPDATE_REQUEST', updatePack),
  takeLatest('@pack/REMOVE_REQUEST', removePack),
]);
