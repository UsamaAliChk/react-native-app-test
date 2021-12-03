import {StyleSheet} from 'react-native';

const Address = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  headerText: {
    fontSize: 20,
    color: 'black',
    marginLeft: 65,
    fontWeight: 'bold',
  },
  state_and_zipCode: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
  },
});

export default Address;
