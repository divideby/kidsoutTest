import React, { Component } from "react";
import { TouchableOpacity, Image } from "react-native";

const IconButton = props => (
  <TouchableOpacity
    {...props}
    style={[
      {
        alignItems: "center",
        justifyContent: "center",
        width: 40,
      },
      props.style
    ]}
  >
    <Image source={props.icon}/>
  </TouchableOpacity>
);

export default IconButton;
