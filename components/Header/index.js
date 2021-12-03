import React from 'react';
import {View, Text} from 'react-native';
import Header from './style';
import LinearGradient from 'react-native-linear-gradient';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {Input} from '../../common/index';

export default function index() {
  return (
    <View>
      <LinearGradient colors={['#408198', '#72b696']} style={Header.background}>
        <FontAwesomeIcon icon={faArrowLeft} size={20} style={Header.arrow} />
        <Input placeholder="Search" Search />
      </LinearGradient>
    </View>
  );
}
