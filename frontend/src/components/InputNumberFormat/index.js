import React, { useRef, useEffect } from 'react';
import NumberFormat from 'react-number-format';

import { useField } from '@rocketseat/unform';

export default function InputNumberFormat({ name, value, ...rest }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.value',
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <NumberFormat
        name={fieldName}
        ref={ref}
        decimalScale={2}
        decimalSeparator={'.'}
        fixedDecimalScale={true}
        value={value}
        prefix={'R$ '}
        {...rest}
      />

      {error && <span>{error}</span>}
    </>
  );
}
