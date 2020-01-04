import React from 'react';
import { FaSpinner } from 'react-icons/fa';

import { Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <FaSpinner size={32} color="#ddd" />
      <h1>Carregando</h1>
    </Container>
  );
}
