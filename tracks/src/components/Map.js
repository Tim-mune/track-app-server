import React from "react";
import { Text, StyleSheet } from "react-native";
import MapView, { Circle } from "react-native-maps";
import useGlobalContext from "../context/appContext";
import { ActivityIndicator } from "react-native-paper";
const Map = () => {
  const { currentLocation } = useGlobalContext();

  const { coords } = currentLocation;

  if (!coords) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }
  return (
    <MapView
      style={styles.mapStyles}
      initialRegion={{
        ...coords,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
      region={{
        ...coords,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    >
      <Circle
        center={coords}
        radius={50}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.3)"
      />
    </MapView>
  );
};
const styles = StyleSheet.create({
  mapStyles: {
    height: 300,
  },
});
export default Map;
