import { Alert } from 'react-native';
import { all, takeLatest, put, call, select } from 'redux-saga/effects';
import { loadSuccess, detailSuccess, addSuccess } from './actions';

import navigation from '~/services/navigation';

import { formatDistance, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

export function* loadOrders() {
  try {
    const userId = yield select(state => state.auth.userId);
    const response = yield call(api.get, `student/${userId}/help-orders`);

    const orders = response.data.map(i => ({
      id: String(i.id),
      date: formatDistance(parseISO(i.createdAt), new Date(), {
        addSuffix: true,
        locale: pt,
      }),
      status: i.answer ? true : false,
      question: i.question,
    }));

    yield put(loadSuccess(orders));
  } catch (err) {
    if (err) {
      Alert.alert('Erro', err.response.data.error);
    } else {
      Alert.alert(
        'Erro',
        'Não foi possível carregar a listagem de pedidos de auxílio'
      );
    }
  }
}

export function* detailOrder({ payload }) {
  try {
    const userId = yield select(state => state.auth.userId);
    const { id } = payload;

    const response = yield call(
      api.get,
      `student/${userId}/help-orders/${id}/answers`
    );

    const data = {
      question: response.data.question,
      answer: response.data.answer,
      answerAt:
        response.data.answer_at &&
        formatDistance(parseISO(response.data.answer_at), new Date(), {
          addSuffix: true,
          locale: pt,
        }),
      createdAt:
        response.data.createdAt &&
        formatDistance(parseISO(response.data.createdAt), new Date(), {
          addSuffix: true,
          locale: pt,
        }),
    };

    yield put(detailSuccess(data));
    navigation.navigate('HelpOrder');
  } catch (error) {
    Alert.alert(
      'Erro',
      'Não foi possível carregar as informações desta pergunta.'
    );
  }
}

export function* addOrder({ payload }) {
  try {
    const userId = yield select(state => state.auth.userId);
    const { question } = payload;
    const response = yield call(api.post, `student/${userId}/help-orders`, {
      question,
    });

    const order = {
      id: String(response.data.id),
      date: formatDistance(parseISO(response.data.createdAt), new Date(), {
        addSuffix: true,
        locale: pt,
      }),
      status: false,
      question: response.data.question,
    };

    yield put(addSuccess(order));
    Alert.alert(
      'Parabéns',
      'Sua pergunta foi cadastrada com sucesso. Em breve um de nossos intrutores irá responder!.'
    );
    navigation.navigate('HelpOrders');
  } catch (error) {
    Alert.alert('Erro', 'Não foi possível cadastrar sua pergunta.');
  }
}

export default all([
  takeLatest('@help/LOAD_REQUEST', loadOrders),
  takeLatest('@help/DETAIL_REQUEST', detailOrder),
  takeLatest('@help/ADD_REQUEST', addOrder),
]);
