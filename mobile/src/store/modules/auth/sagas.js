import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    yield call(api.get, `student/${id}/checkins`, {
      id,
    });

    yield put(signInSuccess(id));
  } catch (error) {
    Alert.alert(
      'Erro no login',
      'ID de estudante não encontrado. Favor inserir um ID válido.'
    );
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
