import React, { Component } from "react";
import { Text } from "react-native";

const KidsoutText = props => (
  <Text
    style={{ fontFamily: props.bold ? "Lato-Regular" : "Lato-Bold" }}
    {...props}
  />
);

export default KidsoutText;
