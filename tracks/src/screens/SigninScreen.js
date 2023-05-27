import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import useGlobalContext from "../context/appContext";
import { useState } from "react";
import { navigate } from "../navigationRef";
const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, loading, user, Msg, autoSignIn } = useGlobalContext();

  useEffect(() => {
    autoSignIn();
  }, []);

  return (
    <>
      <View style={styles.viewStyles}>
        <Text h2 style={styles.textStyles}>
          welcome ,
          <Text h2 style={{ color: "#CEEC13" }}>
            to Tracks .
          </Text>
        </Text>
        <Spacer />
        <Text h2 style={styles.textStyles}>
          Login to your account
        </Text>
        <Text h2 style={{ fontSize: 30, color: "#14eb33", letterSpacing: 1 }}>
          {Msg}
        </Text>

        {loading && (
          <Text h2 style={{ fontSize: 30, color: "#14eb33", letterSpacing: 1 }}>
            processing...
          </Text>
        )}
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
          title="Sign in"
          style={styles.buttonStyles}
          onPress={() => signIn(email, password)}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Spacer />
          <Text h4 style={{ color: "#fff9", marginTop: 10 }}>
            Dont have an account? Sign up instead
          </Text>
        </TouchableOpacity>
        {/* this works too */}
        {user && navigation.navigate("mainFlow")}
      </View>
    </>
  );
};
SigninScreen.navigationOptions = () => {
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
    fontSize: 25,
    color: "#CEEC13",
  },
  inputStyles: {
    color: "#FFF",
    letterSpacing: 2,
  },
});
export default SigninScreen;
