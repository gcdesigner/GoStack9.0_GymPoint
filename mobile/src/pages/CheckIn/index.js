import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadRequest, addRequest } from '~/store/modules/checkins/actions';

import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  BtnAddChekIn,
  CheckInList,
  Item,
  Title,
  Date,
} from './styles';

export default function CheckIn() {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.userId);
  const checkins = useSelector(state => state.checkins.checkins);

  useEffect(() => {
    dispatch(loadRequest(userId));
  }, []);

  function handleCheckIn() {
    dispatch(addRequest(userId));
  }

  return (
    <Container>
      <BtnAddChekIn onPress={handleCheckIn}>Novo check-in</BtnAddChekIn>

      <CheckInList
        data={checkins}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <Item>
            <Title>Check-in #{index + 1}</Title>

            <Date>{item.checkin}</Date>
          </Item>
        )}
      />
    </Container>
  );
}

CheckIn.navigationOptions = ({ navigation }) => ({
  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
      <IconF name="power-off" size={18} color="#666" />
    </TouchableOpacity>
  ),
});
