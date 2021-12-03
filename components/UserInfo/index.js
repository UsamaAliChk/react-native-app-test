import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Address from './style';
import {Input, Dropdown, Line, CheckBox, Section, Button} from '../../common';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

export default function index() {
  const [state, setState] = useState('Select');

  return (
    <View>
      <View style={Address.header}>
        <FontAwesomeIcon icon={faChevronLeft} />
        <Text style={Address.headerText}>Enter new shipping address</Text>
      </View>
      <Input title="Your Name" />
      <Input title="Phone Number" />
      <Input title="Address" />
      <Input title="City" />
      <View style={Address.state_and_zipCode}>
        <View style={{width: '50%'}}>
          <Dropdown
            title="State"
            value={state}
            style={{width: 200}}
            setState={setState}
            options={[
              {label: 'Punjab', value: 'Punjab'},
              {label: 'KPK', value: 'KPK'},
              {label: 'Sindh', value: 'Sindh'},
              {label: 'Bilochistan', value: 'Bilochistan'},
            ]}
          />
        </View>
        <View style={{width: '50%'}}>
          <Input title="Zip Code" />
        </View>
      </View>
      <CheckBox title="make this my default address" />
      <Line />
      <Section
        titles={[
          {value: 'Delivery instructions (optional)', bold: true},
          {value: 'Notes, prefrences, access codes and more'},
        ]}
      />
      <Line />
      <Button title="Use this address" backGround="#F4CA22" />
    </View>
  );
}
