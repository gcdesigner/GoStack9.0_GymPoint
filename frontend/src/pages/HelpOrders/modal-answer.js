import React from 'react';
import ModalHelpOrders from '~/components/Modal/helpOrders';

import { Form, Input } from '@rocketseat/unform';

export default function ModalAnswer({
    orderQuestion,
    answer,
    onSubmit,
    handleClose,
    showModal
  }){
  return (
    <ModalHelpOrders handleClose={handleClose} showModal={showModal}>
        <Form onSubmit={onSubmit}>
          <div className="modal-body">
            <p>{orderQuestion}</p>
            <br />
            <div className="form-group mb-0">
              <label htmlFor="answer">Sua resposta</label>
              <Input
                name="answer"
                multiline
                value={answer}
                disabled={answer && 'disabled'}
              />
            </div>
          </div>
          {!answer && (
            <div className="modal-footer">
              <button className="btn primary w-100 ml-0">
                Responder aluno
              </button>
            </div>
          )}
        </Form>
      </ModalHelpOrders>
  );
}
