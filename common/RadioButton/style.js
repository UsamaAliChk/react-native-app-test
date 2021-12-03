import {StyleSheet} from 'react-native';

const radioButtonStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 15,
  },
  circle: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleSelected: {
    height: 18,
    width: 18,
    borderRadius: 9,
    borderWidth: 6,
    borderColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  RadioButton: {
    borderWidth: 0,
  },
});

export default radioButtonStyles;
