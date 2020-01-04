import React from 'react';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';

import {
  Container,
  Content,
  Question,
  HeaderOrder,
  TextHeader,
  DateOrder,
  TextQuestion,
  Answer,
  TextAnswer,
} from './styles';

export default function HelpOrder() {
  const order = useSelector(state => state.helpOrder.order);

  return (
    <Container>
      <ScrollView>
        <Content>
          <Question>
            <HeaderOrder>
              <TextHeader>PERGUNTA</TextHeader>
              <DateOrder>{order.createdAt}</DateOrder>
            </HeaderOrder>
            <TextQuestion>{order.question}</TextQuestion>
          </Question>

          {order.answer !== null && (
            <Answer>
              <HeaderOrder>
                <TextHeader>RESPOSTA</TextHeader>
                <DateOrder>{order.answerAt}</DateOrder>
              </HeaderOrder>

              <TextAnswer>{order.answer}</TextAnswer>
            </Answer>
          )}
        </Content>
      </ScrollView>
    </Container>
  );
}

HelpOrder.navigationOptions = ({ navigation }) => ({
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
