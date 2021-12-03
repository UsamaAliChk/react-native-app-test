import React from 'react';
import {View, Text} from 'react-native';
import underLineTextStyles from './style';

export default function index({title}) {
  return (
    <View style={underLineTextStyles.container}>
      <Text style={underLineTextStyles.textWithUnderline}>{title}</Text>
    </View>
  );
}
