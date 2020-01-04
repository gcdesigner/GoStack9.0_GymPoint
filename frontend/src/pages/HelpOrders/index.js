import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadRequest,
  addRequest,
} from '~/store/modules/helpOrder/actions';

import OrdersAnswered from './orders-answered'
import ModalAnswer from './modal-answer';

import { Container } from './styles';

export default function HelpOrders() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.helpOrder.loading);
  const orders = useSelector(state => state.helpOrder.orders);

  const [showModalAnswer, setShowModalAnswer] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [orderQuestion, setOrderQuestion] = useState('');
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    dispatch(loadRequest());

    return () => {
      console.log('cleaned up')
    }
  }, [dispatch]);

  function openModalAnswer(order) {
    setAnswer(null);
    setShowModalAnswer(true);
    setOrderId(order.id);
    setOrderQuestion(order.question);
  }

  function handleAnswer({ answer }) {
    dispatch(addRequest(orderId, answer));
    setShowModalAnswer(false);
  }

  function hideModal() {
    setShowModalAnswer(false);
  }

  return (
    <Container>
      <div className="page-title">
        <h1>Pedidos de auxílio</h1>
      </div>

      <div className="content">
        <table>
          <thead>
            <tr>
              <th width="30%">Aluno</th>
              <th>Pergunta</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5">Carregando...</td>
              </tr>
            ) : orders.length ? (
              orders.map(h => (
                <tr key={h.id}>
                  <td>{h.student.name}</td>
                  <td>{h.question}</td>
                  <td className="actions">
                    <button
                      type="button"
                      className="link"
                      onClick={() => openModalAnswer(h)}
                    >
                      responder
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">Nenhum pedido de auxílio encontrado.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <OrdersAnswered />

      <ModalAnswer
        orderQuestion={orderQuestion}
        answer={answer}
        onSubmit={handleAnswer}
        handleClose={hideModal}
        showModal={showModalAnswer}
      />

    </Container>
  );
}
