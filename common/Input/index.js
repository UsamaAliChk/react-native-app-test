import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import InputBox from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faSearch,
  faMicrophone,
  faImage,
} from '@fortawesome/free-solid-svg-icons';
import commonStyles from '../style';

export default function index({Search, title, ...props}) {
  const [showMic, setShowMic] = useState(true);
  return (
    <View>
      {Search ? (
        <View style={InputBox.Box}>
          <FontAwesomeIcon
            icon={faSearch}
            size={12}
            style={InputBox.searchIcon}
          />
          <TextInput
            {...props}
            style={InputBox.searchInput}
            onFocus={() => setShowMic(false)}
            onBlur={() => setShowMic(true)}
          />

          {showMic ? (
            <View style={InputBox.mic_and_image_icon}>
              <FontAwesomeIcon
                icon={faImage}
                color={'#c7c7c7'}
                style={{marginRight: 15}}
              />
              <FontAwesomeIcon icon={faMicrophone} color={'#c7c7c7'} />
            </View>
          ) : null}
        </View>
      ) : (
        <View>
          {title ? <Text style={commonStyles.boldText}>{title}</Text> : null}
          <TextInput {...props} style={InputBox.Input} />
        </View>
      )}
    </View>
  );
}
