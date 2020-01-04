import React, { useState, useMemo, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import InputNumberFormat from '~/components/InputNumberFormat';

import * as Yup from 'yup';

import { formatPrice } from '~/utils/format';

const schema = Yup.object().shape({
  title: Yup.string().required('Campo obrigatório'),
  duration: Yup.number()
    .typeError('Insira um número de 1 a 12')
    .min(1, 'Nao pode ser menor que 1')
    .max(12, 'Deve ser menor ou igual a 12')
    .required('Campo obrigatório'),
  price: Yup.string().required('Campo obrigatório'),
});

export default function FormPack({ onSubmit, initialData }) {
  const [duration, setDuration] = useState(1);
  const [price, setPrice] = useState(String(99));
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (initialData) {
      const { price, duration } = initialData;
      setPrice(String(price));
      setDuration(duration);
    }
  }, [initialData]);

  useMemo(() => {
    const total = duration * price;
    const totalFormated = formatPrice(total);

    setTotalPrice(totalFormated);
  }, [duration, price]);

  function handlePrice(e){
    const fprice = Number(e.replace(/[^0-9\.-]+/g, ''));
    setPrice(fprice);
  }

  return (
    <Form
      id="pack"
      schema={schema}
      onSubmit={onSubmit}
      initialData={initialData}
    >
      <div className="form-group">
        <label htmlFor="title">Título do plano</label>
        <Input name="title" />
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="duration">
            Duração <small>(em meses)</small>
          </label>
          <Input
            name="duration"
            type="number"
            max="12"
            value={duration}
            onChange={e => setDuration(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Preço mensal</label>
          <InputNumberFormat
            name="price"
            value={price}
            onChange={e => handlePrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="totalPrice">Preço total</label>
          <Input name="totalPrice" disabled value={totalPrice} />
        </div>
      </div>
    </Form>
  );
}

FormPack.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.oneOfType([PropTypes.object]),
};

FormPack.defaultProps = {
  initialData: null,
};
