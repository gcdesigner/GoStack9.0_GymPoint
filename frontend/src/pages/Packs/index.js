import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { removeRequest } from '~/store/modules/pack/actions';

import { formatPrice } from '~/utils/format';
import ModalRemove from '~/components/Modal/remove';

import history from '~/services/history';
import api from '~/services/api';

import { Container } from './styles';

export default function Packs() {
  const dispatch = useDispatch();
  const result = useSelector(state => state.pack.result); //result after remove item

  /**
   * Component state
   */
  const [packs, setPacks] = useState([]);
  const [pack, setPack] = useState({});
  const [showModal, setShowModal] = useState(false);

  /**
   * Load pack list
   */
  async function loadPacks() {
    const response = await api.get('packs');
    const data = response.data.map(p => ({
      ...p,
      formatedPrice: formatPrice(p.price),
    }));
    setPacks(data);
  }

  useEffect(() => {
    loadPacks();
  }, []);

  /**
   * Go to edit page
   */
  function handleEdit(id) {
    history.push(`packs/${id}`);
  }

  /**
   * Open modal
   */
  function openModal(studentToRemove) {
    setPack(studentToRemove);
    setShowModal(true);
  }

  /**
   * Hide modal
   */
  function hideModal() {
    setShowModal(false);
  }

  /**
   * Remove item from list
   */
  function handleRemove() {
    dispatch(removeRequest(pack));
    setShowModal(false);
  }

  /**
   * Update list after remove item
   */
  useEffect(() => {
    if (result) {
      const packsUpdated = packs.filter(i => i.id !== pack.id);
      setPacks(packsUpdated);
    }
    return () => {
      console.tron.log('end');
    }
  }, [result]);

  /**
   * Component
   */
  return (
    <Container>
      <div className="page-title">
        <h1>Gerenciando pacotes</h1>
        <div className="actions">
          <Link to="/packs/new" className="btn primary">
            <MdAdd size={16} color="#fff" />
            Cadastrar
          </Link>
        </div>
      </div>

      <div className="content">
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th align="center">Duração</th>
              <th align="center">Valor p/mês</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {packs.length ? (
              packs.map(p => (
                <tr key={p.id}>
                  <td>{p.title}</td>
                  <td align="center">
                    {p.duration === 1
                      ? `${p.duration} mês`
                      : `${p.duration} meses`}{' '}
                  </td>
                  <td align="center">{p.formatedPrice}</td>
                  <td className="actions">
                    <button
                      type="button"
                      className="link"
                      onClick={() => handleEdit(p.id)}
                    >
                      editar
                    </button>
                    <button
                      type="button"
                      className="link danger"
                      onClick={() => openModal(p)}
                    >
                      excluir
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Nenhum resultado encontrado.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <ModalRemove
        showModal={showModal}
        handleClose={hideModal}
        handleRemove={handleRemove}
      />
    </Container>
  );
}
