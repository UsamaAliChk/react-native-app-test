import {StyleSheet} from 'react-native';

const placeOrderStyles = StyleSheet.create({
  image_and_date_section: {
    display: 'flex',
    flexDirection: 'row',
    margin: 15,
  },
  straightLine: {
    borderTopWidth: 1,
    borderColor: '#b3b3b3',
    marginTop: 10,
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  swipeToPlaceOrder: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 5,
    marginTop: 15,
    marginBottom: 15,
  },
  swipe: {
    backgroundColor: '#F4CA22',
    height: 55,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  swipeLeft: {
    height: 55,
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFEF9F',
    marginRight: 5,
  },
});

export default placeOrderStyles;
