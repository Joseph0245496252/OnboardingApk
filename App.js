import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OnlineShoppingScreen from './compenents/OnlineShoppingScreen'
import AddToCartScreen from './compenents/AddToCartScreen'
import PaymentSuccessfulScreen from './compenents/PaymentSuccessfulScreen';

export default function App() {
  return (
    <View style={styles.container1}>
      {/* <OnlineShoppingScreen/> */}
      {/* <AddToCartScreen /> */}
      <PaymentSuccessfulScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
