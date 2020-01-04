import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signInRequest, signOutRequest } from '~/store/modules/auth/actions';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const [studentId, setStudentId] = useState('');

  useEffect(() => {
    dispatch(signOutRequest());
  }, [])

  function handleSubmit() {
    dispatch(signInRequest(studentId));
    console.tron.log(studentId);
  }

  return (
    <Container>
      <Image source={logo} />

      <Form>
        <FormInput
          keyboardType="number-pad"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="informe seu ID de cadastro"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={studentId}
          onChangeText={setStudentId}
        />

        <SubmitButton onPress={handleSubmit}>Entrar no sistema</SubmitButton>
      </Form>
    </Container>
  );
}
