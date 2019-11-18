import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

import Header from '../sections/HeaderSection';


const ProfileScreen = (props) => {
  return (
    <View>
      <Header>BEASTIE</Header>
      <Text>This isProfile</Text>
      <Button 
        title="Go Root"
        onPress={() => props.navigation.navigate('Root')}
      />
      <Button 
        title="Go Home"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
}

export default ProfileScreen;
