import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';

const HeaderSection = (props) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>{props.children}</Text>
        </View>
        <View>
          <Image
            source={require('../../assets/beastie.png')}
            style={styles.logo}
          />
        </View>
        <View>
          <Text style={styles.text}>Menu</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 50,
    resizeMode: 'contain',
  },
  container: {
    paddingTop: 10,
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 8,
    backgroundColor: '#333',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#fff',
    fontFamily: 'arial',
    fontSize: 24,
    paddingTop: 10,
  }
});

export default HeaderSection;
