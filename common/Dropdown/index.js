import React from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Dropdown from './style';
import commonStyles from '../style';

export default function index({value, setState, options, title}) {
  return (
    <View>
      {title ? <Text style={commonStyles.boldText}>{title}</Text> : null}
      <View style={Dropdown.dropdown}>
        <Picker selectedValue={value} onValueChange={value => setState(value)}>
          {options.map((option, i) => {
            return (
              <Picker.Item key={i} label={option.label} value={option.value} />
            );
          })}
        </Picker>
      </View>
    </View>
  );
}
