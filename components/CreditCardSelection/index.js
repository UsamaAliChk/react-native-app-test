import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {
  Button,
  Input,
  RadioButton,
  ImageMask,
  Line,
  Section,
  UnderlineText,
} from '../../common';
import {Header} from '../index';
import cardSelectionStyling from './style';

export default function index() {
  const [select, setSelect] = useState({one: false, two: false});
  return (
    <View>
      <Header />
      <ImageMask />
      <View style={cardSelectionStyling.back}>
        <UnderlineText title="Back" />
      </View>
      <Line />
      <View style={{marginBottom: 15}}>
        <RadioButton
          selected={select.one}
          pressed={() => {
            setSelect({one: true, two: false});
          }}
          title="Visa ****913"
          subText="Name of card holder"
        />

        <RadioButton
          selected={select.two}
          pressed={() => {
            setSelect({one: false, two: true});
          }}
          subText="Name of card holder"
          title="Visa ****41"
        />
      </View>

      <Line />
      <View style={cardSelectionStyling.addCard}>
        <View style={cardSelectionStyling.input}>
          <Input title="Gift cards & promotional codes" />
        </View>

        <View style={cardSelectionStyling.button}>
          <Button title="Add" />
        </View>
      </View>

      <View style={{marginTop: 10}}>
        <Line />
        <Section titles={[{value: 'Add new debit or credit card'}]} />
        <Line />
        <Section titles={[{value: 'More payment options'}]} />
        <Line />
      </View>
    </View>
  );
}
