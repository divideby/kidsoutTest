import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";

class HomeScreen extends Component {
  render() {
    return(
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Order')}>
        <Text>Подтверждение заказа</Text>
      </TouchableOpacity>
    );
  }
}

export default HomeScreen;
