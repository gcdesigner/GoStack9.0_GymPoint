import styled from 'styled-components/native';
import Button from '~/components/Button';
import { FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
  padding: 20px 30px;
  background: #f5f5f5;
`;

export const BtnAddOrder = styled(Button)`
  margin-bottom: 20px;
`;

export const OrderList = styled(FlatList)``;

export const Item = styled(TouchableOpacity)`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 10px;
`;

export const HeaderOrder = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Status = styled.View`
  flex-direction: row;
`;

export const IconStatus = styled(Icon)``;

export const TextStatus = styled.Text`
  color: ${props => (props.status ? 'green' : '#999')};
`;

export const DateOrder = styled.Text``;

export const TextOrder = styled.Text`
  line-height: 20;
`;
