import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

import Header from '../sections/HeaderSection';


const HeaderSection = (props) => {
  return (
    <View>
      <Header>BESTIE</Header>
      <View>
        <Text> Esto es Home </Text>
        <Button 
          title="Go Root"
          onPress={() => props.navigation.navigate('Root')}
        />
        <Button 
          title="Go Profile"
          onPress={() => props.navigation.navigate('Profile')}
        />
      </View>
    </View>
  );
}

export default HeaderSection;
