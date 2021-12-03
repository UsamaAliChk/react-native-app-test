import {StyleSheet} from 'react-native';

const InputBox = StyleSheet.create({
  searchInput: {
    height: 40,
    width: 320,
    margin: 10,
    borderWidth: 1,
    color: 'black',
    backgroundColor: 'white',
    paddingLeft: 38,
    borderRadius: 5,
  },
  Input: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    marginTop: 10,
    flex: 1,
    borderWidth: 1,
    padding: 20,
    borderRadius: 5,
  },
  Box: {
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    zIndex: 4,
    position: 'relative',
    left: 40,
  },
  mic_and_image_icon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    right: 80,
  },
});

export default InputBox;
