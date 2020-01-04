import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px 30px;
  background: #f5f5f5;
`;

export const Content = styled.View`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
`;

export const Question = styled.View`
  margin-bottom: 20px;
`;

export const HeaderOrder = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const TextHeader = styled.Text`
  font-weight: bold;
  text-transform: uppercase;
`;

export const DateOrder = styled.Text`
  color: #999;
`;

export const TextQuestion = styled.Text`
  line-height: 20;
`;

export const Answer = styled.View``;

export const TextAnswer = styled.Text`
  line-height: 20;
`;
