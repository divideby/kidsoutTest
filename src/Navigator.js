import { createStackNavigator } from 'react-navigation';

import HomeScreen from "./screens/HomeScreen";
import OrderScreen from "./screens/OrderScreen";

export default createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Order: {
    screen: OrderScreen
  },
});
