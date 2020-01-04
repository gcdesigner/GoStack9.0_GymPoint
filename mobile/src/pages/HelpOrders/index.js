import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { withNavigationFocus } from 'react-navigation'
import { useDispatch, useSelector } from 'react-redux';
import { loadRequest, detailRequest } from '~/store/modules/helpOrder/actions';
import IconF from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  BtnAddOrder,
  OrderList,
  Item,
  HeaderOrder,
  Status,
  IconStatus,
  TextStatus,
  DateOrder,
  TextOrder,
} from './styles';

function HelpOrders({ navigation, isFocused }) {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.helpOrder.orders);

  console.tron.log(isFocused);

  useEffect(() => {
    if(isFocused) {
      dispatch(loadRequest());
    }
  }, [isFocused]);

  function handleDetail(id) {
    dispatch(detailRequest(id));
  }

  return (
    <Container>
      <BtnAddOrder onPress={() => navigation.navigate('AddHelpOrder')}>
        Novo pedido de auxilio
      </BtnAddOrder>

      <OrderList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Item onPress={() => handleDetail(item.id)}>
            <HeaderOrder>
              <Status>
                <IconStatus
                  color={item.status ? 'green' : '#999'}
                  style={{ marginRight: 5 }}
                  name="check-circle"
                  size={20}
                />
                <TextStatus status={item.status}>
                  {item.status ? 'Respondido' : 'Sem Resposta'}
                </TextStatus>
              </Status>
              <DateOrder>{item.date}</DateOrder>
            </HeaderOrder>

            <TextOrder numberOfLines={3}>{item.question}</TextOrder>
          </Item>
        )}
      />
    </Container>
  );
}

HelpOrders.navigationOptions = ({ navigation }) => ({
  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
      <IconF name="power-off" size={18} color="#666" />
    </TouchableOpacity>
  ),
});

export default withNavigationFocus(HelpOrders);

