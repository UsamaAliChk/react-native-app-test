import React from 'react';
import {View, Text, Image} from 'react-native';
import {ImageMask, UnderlineText} from '../../common';
import {Header} from '../index';
import placeOrderStyles from './style';
import commonStyles from '../../common/style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

export default function index() {
  return (
    <View>
      <Header />
      <ImageMask />
      <View style={placeOrderStyles.image_and_date_section}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1612387049695-637b743f80ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80',
          }}
          style={{height: 70, width: 80}}
        />
        <View>
          <Text style={commonStyles.boldAndBig}>Ariving Nov 12,2021</Text>
          <Text style={commonStyles.normalText}>FREE Prime Delivery</Text>
          <Text style={commonStyles.normalText}>Sold By Floems</Text>
        </View>
      </View>
      <View style={placeOrderStyles.straightLine}></View>
      <View style={placeOrderStyles.section}>
        <UnderlineText title="Ship To" />
        <Text
          style={[commonStyles.boldAndBig, {color: 'black', marginLeft: 42}]}>
          Ali Khan
        </Text>
      </View>
      <View style={placeOrderStyles.straightLine}></View>
      <View style={placeOrderStyles.section}>
        <UnderlineText title="Pay With" />
        <Text
          style={[commonStyles.boldAndBig, {color: 'black', marginLeft: 32}]}>
          Visa
        </Text>
        <Text style={commonStyles.normalText}>*0379</Text>
      </View>

      <View style={placeOrderStyles.straightLine}></View>
      <View style={placeOrderStyles.section}>
        <UnderlineText title="Total" />
        <Text
          style={[commonStyles.boldAndBig, {color: 'black', marginLeft: 60}]}>
          $33.99
        </Text>
      </View>

      <View style={placeOrderStyles.swipeToPlaceOrder}>
        <View style={placeOrderStyles.swipe}>
          <FontAwesomeIcon icon={faChevronRight} size={12} />
          <FontAwesomeIcon icon={faChevronRight} size={12} />
          <FontAwesomeIcon icon={faChevronRight} size={12} />
        </View>
        <View style={placeOrderStyles.swipeLeft}>
          <Text style={commonStyles.boldAndBig}>Swipe Left To Place Order</Text>
        </View>
      </View>

      <Text style={[commonStyles.normalText, {marginLeft: 5}]}>
        By placing order, you agree to amazon's privacy notice and condition of
        use.
      </Text>
    </View>
  );
}
