import styled from 'styled-components/native';
import Button from '~/components/Button';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 20px 30px;
  background: #f5f5f5;
`;

export const BtnAddChekIn = styled(Button)`
  margin-bottom: 20px;
`;

export const CheckInList = styled(FlatList)``;

export const Item = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px 10px;
  margin-bottom: 10px;
  background: #fff;
`;

export const Title = styled.Text`
  flex-direction: row;
  font-weight: bold;
`;

export const Date = styled.Text``;
