import React from 'react';
import {View, Text} from 'react-native';
import buttonStyle from './style';
import commonStyles from '../style';

export default function index({title, backGround}) {
  return (
    <View style={[buttonStyle.buttonBox, {backgroundColor: backGround}]}>
      <Text style={commonStyles.boldText}>{title}</Text>
    </View>
  );
}
