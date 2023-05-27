const reducer = (state, action) => {
  if (action.type === "REGISTER_BEGIN") {
    return { ...state, loading: true };
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
  if (action.type === "LOGIN") {
    return { ...state, loading: true };
  }
  if (action.type === "LOGIN_SUCCESS") {
    return {
      ...state,
      loading: false,
      Msg: action.payload.msg,
      user: action.payload.user,
    };
  }
  if (action.type === "LOGIN-FAIL") {
    return { ...state, loading: false, Msg: "something went wrong" };
  }
  if (action.type === "AUTOSIGNIN") {
    return { ...state, user: action.payload };
  }
  if (action.type === "SIGNOUT") {
    return { ...state, user: null };
  }
  if (action.type === "ADDRECORD") {
    return { ...state, currentLocation: action.payload };
  }
  if (action.type === "STARTRECORD") {
    return { ...state, recording: true };
  }
  if (action.type === "STOPRECORD") {
    return { ...state, recording: false };
  }
  if (action.type === "ADDCURRRECORD") {
    return { ...state, locations: [...state.locations, action.payload] };
  }
  if (action.type === "CHANGENAME") {
    return { ...state, name: action.payload };
  }
};
export default reducer;
