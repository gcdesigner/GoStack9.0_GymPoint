import styled from 'styled-components/native';
import Input from '~/components/Input';

export const Container = styled.View`
  flex: 1;
  padding: 20px 30px;
  background: #f5f5f5;
`;

export const Form = styled.View``;

export const InputText = styled(Input).attrs({})`
  flex-direction: column;
  height: 85%;
  align-items: center;
`;
