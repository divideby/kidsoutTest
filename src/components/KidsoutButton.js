import React, { Component } from "react";
import { TouchableOpacity } from "react-native";

import { mainColor } from "../constants/colors";
import KidsoutText from "./KidsoutText";

const KidsoutButton = props => (
  <TouchableOpacity
    {...props}
    style={[
      {
        height: 44,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: mainColor,
        borderRadius: 3,
      },
      props.style
    ]}
  >
    <KidsoutText style={{ color: "white" }}>{props.label}</KidsoutText>
  </TouchableOpacity>
);

export default KidsoutButton;
