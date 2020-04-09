import React from 'react';
import PropTypes from 'prop-types';
import FieldStyled from './FieldStyled';

// == Composant
const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <FieldStyled>
      <div>
        <input
          value={value}
          onChange={handleChange}
          id={inputId}
          type={type}
          placeholder={placeholder}
          name={name}
        />
      </div>
    </FieldStyled>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
  type: 'text',
};

// == Export
export default Field;
