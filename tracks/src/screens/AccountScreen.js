import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import useGlobalContext from "../context/appContext";

const AccountScreen = () => {
  const { signOut } = useGlobalContext();
  return (
    <SafeAreaView forceInset={{ top: "always" }} style={{ marginTop: 50 }}>
      <Text style={styles.textStyles}>Sign out </Text>
      <Button title="Sign out" onPress={() => signOut()} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  viewStyles: {},
  textStyles: {
    fontSize: 30,
    letterSpacing: 1,
    fontWeight: "bold",
  },
});
export default AccountScreen;
