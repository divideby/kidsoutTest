import React, { Component } from "react";
import { Text } from "react-native";

const KidsoutText = props => (
  <Text
    {...props}
    style={[
      {
        color: "black",
        fontSize: 15,
        fontFamily: props.bold ? "Lato-Bold" : "Lato-Regular"
      },
      props.style
    ]}
  >
    {props.children}
  </Text>
);

export default KidsoutText;
