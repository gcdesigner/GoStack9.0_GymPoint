import React, { useRef, useEffect } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

import { useField } from '@rocketseat/unform';

export default function ReactSelect({
  name,
  label,
  options,
  multiple,
  ...rest
}) {
  const ref = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  function parseSelectValue(selectRef) {
    const selectValue = selectRef.props.value;
    if (!multiple) {
      return selectValue ? selectValue.value : '';
    }

    return selectValue ? selectValue.map(option => option.value) : [];
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.value',
      parseValue: parseSelectValue,
      clearValue: selectRef => {
        selectRef.select.clearValue();
      },
    });
  }, []); // eslint-disable-line

  function getDefaultValue() {
    if (!defaultValue) return null;

    if (!multiple) {
      return options.find(option => option.value === defaultValue);
    }

    return options.filter(option => defaultValue.includes(option.value));
  }

  return (
    <>
      {label && <label htmlFor={fieldName}> {label} </label>}

      <Select
        name={fieldName}
        aria-label={fieldName}
        options={options}
        isMulti={multiple}
        // defaultValue={getDefaultValue()}
        ref={ref}
        classNamePrefix="select-combo"
        getOptionValue={option => option.value}
        getOptionLabel={option => option.label}
        {...rest}
      />

      {error && <span>{error}</span>}
    </>
  );
}

ReactSelect.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object])
  ).isRequired,
  label: PropTypes.string,
  multiple: PropTypes.bool,
};

ReactSelect.defaultProps = {
  label: null,
  multiple: false,
};
