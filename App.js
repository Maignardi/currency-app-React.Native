import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//https://free.currencyconverterapi.com/api/v5/convert?q=USD_BRL&compact=ultra&apiKey=7c5ef455b88d735bc6ad
import Conversor from './src/conversor';

class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Conversor moedaA="USD" moedaB="BRL" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;