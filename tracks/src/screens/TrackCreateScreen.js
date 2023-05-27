import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import "../_mock";
import {
  SafeAreaView,
  NavigationEvents,
  withNavigationFocus,
} from "react-navigation";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import useGlobalContext from "../context/appContext";
import useLocation from "../customHooks/useLocationHook";
import TrackForm from "../components/TrackForm";
import Spacer from "../components/Spacer";
const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation, recording } = useGlobalContext();
  const [error] = useLocation(addLocation, isFocused, recording);
  // console.log(isFocused);
  return (
    <SafeAreaView forceInset={{ top: "always" }} style={{ marginTop: 50 }}>
      {error && <Text>Please enable location services</Text>}
      <Text h2 style={styles.textStyles}>
        Create a track
      </Text>
      <Map />
      <Spacer />
      <TrackForm />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  textStyles: {
    fontSize: 30,
    letterSpacing: 1,
  },
});
export default withNavigationFocus(TrackCreateScreen);
