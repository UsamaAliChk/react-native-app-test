import React from 'react';
import {View, Text} from 'react-native';
import sectionStyles from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import commonStyles from '../style';

export default function index({titles}) {
  return (
    <View style={sectionStyles.container}>
      <View>
        {titles.map(title => {
          return (
            <Text
              style={
                title.bold
                  ? commonStyles.boldText
                  : {marginLeft: 12, color: 'black', fontSize: 16}
              }>
              {title.value}
            </Text>
          );
        })}
      </View>

      <FontAwesomeIcon icon={faChevronRight} />
    </View>
  );
}
