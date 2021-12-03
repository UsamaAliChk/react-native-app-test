import React, {useState} from 'react';
import {View, Image} from 'react-native';
import imageWithMaskStyle from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

export default function index({image}) {
  const [hide, setHide] = useState(false);
  return (
    <View>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1612387049695-637b743f80ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80',
        }}
        style={imageWithMaskStyle.image}
      />
      {hide ? null : <View style={imageWithMaskStyle.mask}></View>}
      {hide ? null : (
        <FontAwesomeIcon
          icon={faTimes}
          style={imageWithMaskStyle.closeButton}
          size={30}
          color="white"
          onPress={() => setHide(true)}
        />
      )}
    </View>
  );
}
