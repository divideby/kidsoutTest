import React, { Component } from "react";

import { KidsoutButton } from "../../components";

class HomeScreen extends Component {
  render() {
    return (
      <KidsoutButton
        label={"Подтверждение заказа"}
        onPress={() => this.props.navigation.navigate("Order")}
      />
    );
  }
}

export default HomeScreen;
