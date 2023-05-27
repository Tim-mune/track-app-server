import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import useGlobalContext from "../context/appContext";

const AccountScreen = () => {
  const { signOut } = useGlobalContext();
  return (
    <View style={styles.viewStyles}>
      <Text>Sign out </Text>
      <Button title="Sign out" onPress={() => signOut()} />
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    justifyContent: "center",
    gap: 30,
  },
});
export default AccountScreen;
