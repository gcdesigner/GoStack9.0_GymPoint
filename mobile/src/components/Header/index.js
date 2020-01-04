import React from 'react';
import PropTypes from 'proptypes';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/logo-header.png';

import { Container, BtnBack } from './styles';

export default function Header({ back, goBack }) {
  return (
    <Container>
      {
        back &&
        <BtnBack onPress={goBack}>
          <Icon name="keyboard-arrow-left" size={30} color="#666" />
        </BtnBack>
      }
      <Image source={logo} />
    </Container>
  );
}

Header.propTypes = {
  back: PropTypes.func
}

Header.defaultProps = {
  back: null
}
