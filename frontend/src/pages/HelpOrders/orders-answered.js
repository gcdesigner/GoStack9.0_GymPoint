import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeRequest,
} from '~/store/modules/helpOrder/actions';

import ModalRemove from '~/components/Modal/remove';
import ModalAnswer from './modal-answer';

export default function OrdersAnswered() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.helpOrder.loading);
  const ordersAnswered = useSelector(state => state.helpOrder.ordersAnswered);

  const [showModalAnswer, setShowModalAnswer] = useState(false);
  const [showModalRemove, setShowModalRemove] = useState(false);
  const [orderQuestion, setOrderQuestion] = useState('');
  const [orderId, setOrderId] = useState(null);
  const [answer, setAnswer] = useState(null);

  function handleView(order) {
    setShowModalAnswer(true);
    setOrderQuestion(order.question);
    setAnswer(order.answer);
  }

  function openModalRemove(id) {
    setShowModalRemove(true);
    setOrderId(id);
  }

  function handleRemove() {
    dispatch(removeRequest(orderId));
    setShowModalRemove(false);
  }

  function hideModal() {
    setShowModalAnswer(false);
    setShowModalRemove(false);
  }

  return (
    <>
      <div className="page-title">
        <h1>Auxilios respondidos</h1>
      </div>

      <div className="content">
        <table>
          <thead>
            <tr>
              <th>Aluno</th>
              <th>Pergunta</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5">Carregando...</td>
              </tr>
            ) : ordersAnswered.length ? (
              ordersAnswered.map(h => (
                <tr key={h.id}>
                  <td width="30%">{h.student.name}</td>
                  <td>{h.question}</td>
                  <td className="actions">
                    <button
                      type="button"
                      className="link"
                      onClick={() => handleView(h)}
                    >
                      visualizar
                    </button>
                    <button
                      type="button"
                      className="link danger"
                      onClick={() => openModalRemove(h.id)}
                    >
                      excluir
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">Nenhum pedido de auxílio respondido.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <ModalAnswer
        orderQuestion={orderQuestion}
        answer={answer}
        handleClose={hideModal}
        showModal={showModalAnswer}
      />

      <ModalRemove
        handleClose={hideModal}
        showModal={showModalRemove}
        handleRemove={handleRemove}
      />
    </>
  );
}
