/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Saludar from './components/Saludar';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola mundo</Text>
      <Saludar firstName="Alfredo Paz" />
      <Saludar firstName="John Doe" />
      <Saludar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 32,
  },
});

export default App;
