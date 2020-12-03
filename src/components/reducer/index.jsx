function Reducer(draft, action) {
  const { type, payload } = action;

  switch (type) {
    case "INIT_FETCH": {
      draft.loading = true;
      return;
    }
    case "SUCCESS_FETCH": {
      draft.loading = false;
      draft.data = payload;
      return;
    }

    case "FAIL_FETCH": {
      draft.loading = false;
      draft.error = true;
      return;
    }
    default:
      throw new Error();
  }
}

export default Reducer;

//? The commented sections are for example purposes in documentation, available in the README.md

// eslint-disable-next-line no-lone-blocks
{
  /* function Reducer(state, action) {
   const { type, payload } = action;
   switch (type) {
     case "INIT_FETCH":
       return {
         ...state,
         loading: true,
       };
     case "SUCCESS_FETCH":
       return {
         ...state,
         loading: false,
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
*/
}
