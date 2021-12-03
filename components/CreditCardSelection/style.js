import {StyleSheet} from 'react-native';

const cardSelectionStyling = StyleSheet.create({
  addCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 3,
  },
  button: {
    flex: 1,
    marginTop: 8,
  },
  back: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
  },
});

export default cardSelectionStyling;
