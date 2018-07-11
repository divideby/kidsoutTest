import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import { KidsoutText } from "../../components";

const OrderScreen = ({
  cost,
  commission,
  child,
  features,
  location,
  comment
}) => (
  <View>
    <View>
      <KidsoutText>Сумма заказа</KidsoutText>
      <KidsoutText>cost</KidsoutText>
    </View>
  </View>
);

function mapStateToProps(state) {
  return {
    order: state.order
  };
}

export default connect(mapStateToProps)(OrderScreen);
