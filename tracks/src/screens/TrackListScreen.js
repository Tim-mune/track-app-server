import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text>TrackListScreen</Text>
      <Button
        title="go to track detail"
        onPress={() => navigation.navigate("Trackdetail")}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default TrackListScreen;
