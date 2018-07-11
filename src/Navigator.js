import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "react-navigation";

import HomeScreen from "./screens/HomeScreen";
import OrderScreen from "./screens/OrderScreen";
import { IconButton } from "./components";
import arrowBackIcon from "./components/assets/arrow-back/arrow-back.png";
import circleAddIcon from "./components/assets/circle-add/circle-add.png";
import favouriteIcon from "./components/assets/favourite/favourite.png";

export default createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Order: {
      screen: OrderScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <IconButton
            icon={arrowBackIcon}
            onPress={() => navigation.goBack()}
          />
        ),
        headerRight: (
          <View style={{ display: "flex", flexDirection: "row" }}>
            <IconButton icon={circleAddIcon} />
            <IconButton icon={favouriteIcon} />
          </View>
        ),
        title: "Подтверждение заказа"
      })
    }
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "white",
        shadowColor: "transparent",
        borderBottomWidth: 1,
        borderBottomColor: "#D9D9D9",
        elevation: 0
      },
      headerTitleStyle: {
        color: "black",
        fontSize: 15,
        fontFamily: "Lato-Regular",
        fontWeight: "normal"
      }
    }
  }
);
