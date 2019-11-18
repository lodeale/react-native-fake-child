import React from 'react';
import {
  Text,
  View,
  Button,
  YellowBox,
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Header from './modules/Components/Header/Header';
import Team1 from './modules/Team1/src/Main.js';

class RootScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Root Screen</Text>
        <Button 
          title="Go Team 1"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
const AppNavigator = createStackNavigator(
  {
    ...Team1,
    Root: { screen: RootScreen },
  },
  {
    initialRouteName: 'Root',
  });

export default createAppContainer(AppNavigator);
