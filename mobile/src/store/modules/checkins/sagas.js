import { Alert } from 'react-native';
import { all, takeLatest, call, put, select } from 'redux-saga/effects';

import { formatDistance, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import { addSuccess, loadSuccess } from './actions';

export function* loadCheckins({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `student/${id}/checkins`);

    const checkins = response.data.map(i => ({
      id: String(i.id),
      checkin: formatDistance(parseISO(i.createdAt), new Date(), {
        addSuffix: true,
        locale: pt,
      }),
    }));

    yield put(loadSuccess(checkins));
  } catch (error) {
    Alert.alert('Erro', 'Erro ao carregar lista de checkins.');
  }
}

export function* addCheckin({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.post, `student/${id}/checkins`);

    const newCheckin = {
      id: String(response.data.id),
      checkin: formatDistance(parseISO(response.data.createdAt), new Date(), {
        addSuffix: true,
        locale: pt,
      }),
    };

    yield put(addSuccess(newCheckin));

    Alert.alert('Parabéns!', 'Checkin realizado com sucesso.');
  } catch (error) {
    if (error) {
      Alert.alert('Erro', error.response.data.error);
    } else {
      Alert.alert(
        'Erro',
        'Não foi possível fazer checkin. Tente novamente mais tarde.'
      );
    }
  }
}

export default all([
  takeLatest('@checkins/LOAD_REQUEST', loadCheckins),
  takeLatest('@checkins/ADD_REQUEST', addCheckin),
]);
