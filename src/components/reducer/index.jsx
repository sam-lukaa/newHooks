function Reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "INIT_FETCH":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "SUCCESS_FETCH":
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    case "FAIL_FETCH":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      throw new Error();
  }
}

export default Reducer;
