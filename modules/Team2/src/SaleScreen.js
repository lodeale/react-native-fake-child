import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

const SaleScreen = (props) => {
  return (
    <View>
      <Text>Sale Screen </Text>
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

export default SaleScreen;
