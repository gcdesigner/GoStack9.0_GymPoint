import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View.attrs({
  borderBottomColor: "#ddd",
  borderBottomWidth: 1
})`
  position: relative;
  background: #fff;
  padding: 10px 30px;
  margin-bottom: 20px;
  align-items: center;
`;

export const BtnBack = styled(TouchableOpacity)`
  position: absolute;
  top: 5px;
  left: 20px;
`;
