import React from 'react';
import {Text} from 'react-native';

interface Props {
  firstName?: String;
  lastName?: String;
}

export default function Saludar({firstName = 'Mundo', lastName = '!!'}: Props) {
  return (
    <Text>
      Hola {firstName} {lastName}
    </Text>
  );
}
