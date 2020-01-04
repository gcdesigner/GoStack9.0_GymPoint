import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Btn, BtnText } from './styles';

export default function Footer() {
  return (
    <Container>
      <Btn onPress={() => {}}>
        <Icon name="check" size={20} color="#999" />
        <BtnText>Check-ins</BtnText>
      </Btn>

      <Btn>
        <Icon name="help-outline" size={20} color="#999" />
        <BtnText>Pedir ajuda</BtnText>
      </Btn>
    </Container>
  );
}
