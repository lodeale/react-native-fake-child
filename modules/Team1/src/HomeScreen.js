import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
      <Text>Home Screen </Text>
      <Button 
        title="Go Home"
        onPress={() => props.navigation.navigate('Home')}
      />
      <Button 
        title="Go Sale"
        onPress={() => props.navigation.navigate('Sale')}
      />
    </View>
  );
}

export default HomeScreen;
