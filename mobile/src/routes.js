import React from 'react';
import { View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '~/assets/logo-header.png';

import SignIn from './pages/SignIn';
import CheckIn from './pages/CheckIn';
import HelpOrders from './pages/HelpOrders';
import HelpOrder from './pages/HelpOrder';
import AddHelpOrder from './pages/AddHelpOrder';

const defaultHeader = {
  defaultNavigationOptions: {
    headerTitle: (
      <View style={{ alignSelf: 'center', flex: 1 }}>
        <Image style={{ alignSelf: 'center' }} source={logo} />
      </View>
    ),
    headerLeft: <View style={{ right: 30 }}></View>,
    headerRight: <View style={{ right: 30 }}></View>,
    headerTitleStyle: {
      textAlign: 'center',
      flexGrow: 1,
      alignSelf: 'center',
    },
    headerLeftContainerStyle: {
      left: 30,
    },
    headerRightContainerStyle: {
      right: 30,
    },
    headerStyle: {
      elevation: 0,
      borderBottomColor: '#ddd',
      borderBottomWidth: 1,
    },
  },
};

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            CheckIn: {
              screen: createStackNavigator(
                {
                  CheckIn,
                },
                defaultHeader
              ),
              navigationOptions: {
                tabBarLabel: 'Check-ins',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="check" size={20} color={tintColor} />
                ),
              },
            },
            HelpOrders: {
              screen: createStackNavigator(
                {
                  HelpOrders,
                  HelpOrder,
                  AddHelpOrder,
                },
                defaultHeader
              ),
              navigationOptions: {
                tabBarLabel: 'Pedido ajuda',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="help-outline" size={20} color={tintColor} />
                ),
              },
            },
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#EE4E62',
              inactiveTintColor: '#999',
              style: {
                backgroundColor: '#fff',
                borderTopColor: '#ddd',
                borderTopWidth: 1,
              },
            },
            defaultNavigationOptions: {},
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
