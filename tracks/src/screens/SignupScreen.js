import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import useGlobalContext from "../context/appContext";
const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { signUp, loading } = useGlobalContext();
  return (
    <View style={styles.viewStyles}>
      <Spacer />
      <Text h2 style={styles.textStyles}>
        create account
      </Text>
      {loading && (
        <Text h2 style={styles.textStyles}>
          create account
        </Text>
      )}

      <Input
        label="Name"
        value={name}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyles}
        onChangeText={(newName) => setName(newName)}
      />
      <Input
        label="Email"
        value={email}
        style={styles.inputStyles}
        autoComplete="email"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newemail) => setEmail(newemail)}
      />
      <Input
        label="Password"
        secureTextEntry={true}
        value={password}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyles}
        onChangeText={(newPassword) => setPassword(newPassword)}
      />

      <Spacer />
      <Button
        title="Sign up"
        style={styles.buttonStyles}
        onPress={() => signUp(name, email, password)}
      />
    </View>
  );
};
SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
const styles = StyleSheet.create({
  textStyles: {
    textTransform: "capitalize",
    marginBottom: 50,
    letterSpacing: 1,
    color: "#fff",
  },
  view1Styles: {},
  viewStyles: {
    flex: 1,
    marginTop: 0,
    marginBottom: 5,
    alignItems: "center",
    minWidth: "100%",
    maxWidth: "100%",
    justifyContent: "center",
    backgroundColor: "#0F5CF0",
  },
  buttonStyles: {
    backgroundColor: "#14EB21",
  },
  inputStyles: {
    color: "#FFF",
    letterSpacing: 2,
  },
});

export default SignupScreen;
