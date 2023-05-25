const reducer = (state, action) => {
  if (action.type === "REGISTER_BEGIN") {
    return { ...state, loading: true, Msg: "" };
  }
  if (action.type === "REGISTER_SUCCESS") {
    return {
      ...state,
      loading: false,
      user: action.payload,
      isSignedIn: true,
      msg: "please wait... redirecting",
    };
  }
  if (action.type === "REGISTER_FAIL") {
    return { ...state, loading: false, Msg: "Register failed" };
  }
  if (action.type === "CLEAR") {
    return { ...state, Msg: "" };
  }
};
export default reducer;
