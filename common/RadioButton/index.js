import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import commonStyles from '../style';
import radioButtonStyles from './style';

export default function index({title, selected, pressed, subText}) {
  console.log(selected);
  return (
    <TouchableOpacity
      style={radioButtonStyles.container}
      onPress={() => pressed()}>
      <View
        style={
          selected ? radioButtonStyles.circleSelected : radioButtonStyles.circle
        }></View>
      <View style={{marginLeft: 10}}>
        <Text style={[commonStyles.boldText, {fontSize: 16}]}>{title}</Text>
        {subText ? (
          <Text style={commonStyles.boldAndBig}>{subText}</Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
}
