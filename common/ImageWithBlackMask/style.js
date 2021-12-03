import {StyleSheet} from 'react-native';

const imageWithMaskStyle = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  mask: {
    width: '100%',
    height: 200,
    backgroundColor: 'black',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0.5,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  closeButton: {
    position: 'absolute',
    top: 155,
    right: 5,
  },
});

export default imageWithMaskStyle;
