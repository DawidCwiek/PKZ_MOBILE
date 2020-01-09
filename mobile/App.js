import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginPage from "./src/Views/LoginPage";
import MenuPage from "./src/Views/MenuPage";
import KitchenPage from "./src/Views/KitchenPage";

const MainNavigator = createStackNavigator({
  Login: {
    screen: LoginPage,
    navigationOptions: {
      headerShown: false
    }
  },
  Menu: {
    screen: MenuPage,
    navigationOptions: {
      headerShown: false
    }
  },
  Kitchen: {
    screen: KitchenPage,
    navigationOptions: {
      headerShown: false
    }
  }
});

const App = createAppContainer(MainNavigator);

export default App;
