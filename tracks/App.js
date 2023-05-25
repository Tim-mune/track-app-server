import React from "react";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { setNavigator } from "./src/navigationRef";
import { AppProvider } from "./src/context/appContext";
const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createMaterialBottomTabNavigator({
    trackListFlow: createStackNavigator({
      Tracklist: TrackListScreen,
      Trackdetail: TrackDetailScreen,
    }),
    Trackcreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});
// export default createAppContainer({switchNavigator});
const App = createAppContainer(switchNavigator);
export default () => {
  return (
    <AppProvider>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </AppProvider>
  );
};
