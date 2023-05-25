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
    } catch (error) {
      console.log(error);
      dispatch({ type: "REGISTER_FAIL" });
      setTimeout(() => clearMsg(), 3000);
    }
  };
  const signIn = async (name, email, password) => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () => {
    try {
      // make request to Api
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <AppContext.Provider value={{ ...state, signUp }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export default useGlobalContext;
