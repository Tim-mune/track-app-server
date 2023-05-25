import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
import customFetch from "../components/customFetch";

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const initialState = {
    name: "",
    loading: false,
    email: "",
    user: null,
    errorMsg: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const signUp = async (name, email, password) => {
    dispatch({ type: "REGISTER_BEGIN" });
    console.log(state);
    try {
      const res = await customFetch.post("/register", {
        name,
        email,
        password,
      });
      dispatch({ type: "REGISTER_SUCCESS", payload: { user: res.data } });
      console.log(state);
      console.log(res.data);
      console.log(state.user);
      //   console.log({ email, password, name });
    } catch (error) {
      console.log("theres an error");
      console.log(error);
      dispatch({ type: "REGISTER_FAIL" });
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
      console.log(error);
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
