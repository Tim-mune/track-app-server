import { createContext, useContext, useReducer } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import reducer from "./reducer";

import customFetch from "../components/customFetch";
import { navigate } from "../navigationRef";

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const initialState = {
    loading: false,
    user: null,
    Msg: "",
    isSignedIn: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearMsg = () => {
    dispatch({ type: "CLEAR" });
  };

  const signUp = async (name, email, password) => {
    dispatch({ type: "REGISTER_BEGIN" });
    setTimeout(() => clearMsg(), 3000);
    try {
      const res = await customFetch.post("/register", {
        name,
        email,
        password,
      });
      await AsyncStorage.setItem("token", res.data.token);
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
      setTimeout(() => clearMsg(), 3000);
      navigate("Tracklist");
    } catch (error) {
      console.log(error);
      dispatch({ type: "REGISTER_FAIL" });
      setTimeout(() => clearMsg(), 3000);
    }
  };
  const signIn = async (email, password) => {
    dispatch({ type: "LOGIN" });
    setTimeout(() => clearMsg(), 3000);
    try {
      const res = await customFetch.post("/login", { email, password });
      console.log(res.data);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { msg: res.data.msg, user: res.data.token },
      });
      setTimeout(() => clearMsg(), 3000);
    } catch (error) {
      await dispatch({ type: "LOGIN_FAIL" });
      console.log(error.response.msg);
      setTimeout(() => clearMsg(), 3000);
    }
  };
  const autoSignIn = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      dispatch({ type: "AUTOSIGNIN", payload: token });
      navigate("trackListFlow");
    }
    return;
  };

  const signOut = async () => {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "SIGNOUT" });
    // navigate("loginFlow");
  };

  return (
    <AppContext.Provider
      value={{ ...state, signUp, signIn, signOut, autoSignIn }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export default useGlobalContext;
