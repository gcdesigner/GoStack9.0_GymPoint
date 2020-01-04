import React from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';

import { ModalContainer } from './styles';

export default function ModalHelpOrders({
  showModal,
  handleClose,
  children,
}) {
  return (
    <ModalContainer size={550} showModal={showModal}>
      <div className="modal-dialog">
        <div className="modal-header">
          <h3>PERGUNTA DO ALUNO</h3>
          <button type="button" onClick={handleClose}>
            <MdClose size="18" color="#666" />
          </button>
        </div>
        {children}
      </div>
    </ModalContainer>
  );
}

ModalHelpOrders.propTypes = {
  showModal: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  handleAnswer: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
};

ModalHelpOrders.defaultProps = {
  showModal: false,
};
