import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRequest } from '~/store/modules/helpOrder/actions';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';

import Button from '~/components/Button';

import { Container, Form, InputText } from './styles';

export default function AddHelpOrder() {
  const dispatch = useDispatch();

  const [question, setQuestion] = useState('');

  function handleSubmit() {
    dispatch(addRequest(question));
  }

  return (
    <Container>
      <Form>
        <InputText
          multiline={true}
          placeholder="Inclua aqui seu pedido de auxílio"
          style={{ marginBottom: 20 }}
          value={question}
          onChangeText={setQuestion}
        />
        <Button onPress={handleSubmit}>Enviar Pedido</Button>
      </Form>
    </Container>
  );
}

AddHelpOrder.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('HelpOrders')}>
      <Icon name="chevron-left" size={25} color="#666" />
    </TouchableOpacity>
  ),
  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
      <IconF name="power-off" size={18} color="#666" />
    </TouchableOpacity>
  ),
});
