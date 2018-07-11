import React, { Component } from "react";
import { Text } from "react-native";

const KidsoutText = props => (
  <Text
    style={{ fontFamily: props.bold ? "Lato-Bold" : "Lato-Regular" }}
    {...props}
  >
    {props.children}
  </Text>
);

export default KidsoutText;
