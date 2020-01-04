import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native'

export const Container = styled.View.attrs({
  borderTopWidth: 1,
  borderTopColor: "#ddd"
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 10px 30px;
`;

export const Btn = styled(TouchableOpacity)`
  flex: 1;
  align-items: center;
`;

export const BtnText = styled.Text`
  color: #999;
`;
