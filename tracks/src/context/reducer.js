const reducer = (state, action) => {
  if (action.type === "REGISTER_BEGIN") {
    return { ...state, loading: true };
  }
  if (action.type === "REGISTER_SUCCESS") {
    return { ...state, loading: false, user: action.payload.user };
  }
  if (action.type === "REGISTER_FAIL") {
    return { ...state, loading: false, errorMsg: "Register failed" };
  }
};
export default reducer;
