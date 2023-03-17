import React from 'react';
import PropTypes from 'prop-types';

import { Title, ContainerForm } from './Form.stile';

const Form = ({ title, children }) => {
  return (
    <ContainerForm>
      <Title>{title}</Title>
      {children}
    </ContainerForm>
  );
};

Form.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Form;
