import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {
  ImageMask,
  Line,
  UnderlineText,
  RadioButton,
  Section,
} from '../../common';
import {Header} from '../index';
import addressSelectionStyle from './style';

export default function index() {
  const [select, setSelect] = useState({one: false, two: false, three: false});
  const [address, setAddress] = useState('');
  return (
    <View>
      <Header />
      <ImageMask />
      <View style={addressSelectionStyle.back}>
        <UnderlineText title="Back" />
      </View>
      <Line />
      <RadioButton
        pressed={() => {
          setSelect({one: true, two: false, three: false});
          setAddress('Address One');
        }}
        selected={select.one}
        title="Address One"
      />
      <RadioButton
        pressed={() => {
          setSelect({one: false, two: true, three: false});
          setAddress('Address Two');
        }}
        selected={select.two}
        title="Address Two"
      />
      <RadioButton
        pressed={() => {
          setSelect({one: false, two: false, three: true});
          setAddress('Address Three');
        }}
        selected={select.three}
        title="Address Three"
      />
      <View style={{marginTop: 50}}>
        <Line />
        <Section titles={[{value: 'Add new shiping address'}]} />
        <Line />
        <Section titles={[{value: 'More ship options'}]} />
        <Line />
      </View>
    </View>
  );
}
