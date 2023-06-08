import React from 'react';
import {View, Text, Button} from 'react-native';

export const SettingsScreen = (props: any) => {
  const {navigation} = props;

  const goToHome = (pageName: String) => {
    navigation.navigate(pageName);
  };

  return (
    <View>
      <Text>SETTINGS SCREEN</Text>
      <Text>SETTINGS SCREEN</Text>
      <Text>SETTINGS SCREEN</Text>
      <Text>SETTINGS SCREEN</Text>
      <Text>SETTINGS SCREEN</Text>
      <Text>SETTINGS SCREEN</Text>
      <Text>SETTINGS SCREEN</Text>
      <Text>SETTINGS SCREEN</Text>
      <Text>SETTINGS SCREEN</Text>
      <Text>SETTINGS SCREEN</Text>
      <Button title="Go to home" onPress={() => goToHome('Home')} />
    </View>
  );
};
