import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import CheckBoxStyle from './style';
import commonStyles from '../style';

export default function index({title, ...props}) {
  const [selected, setSelected] = useState(false);
  return (
    <View style={CheckBoxStyle.box}>
      <CheckBox
        value={selected}
        onValueChange={() => setSelected(!selected)}
        {...props}
      />
      <Text style={[commonStyles.boldText, {fontWeight: 'normal'}]}>
        {title}
      </Text>
    </View>
  );
}
