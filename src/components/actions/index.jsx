import { useEffect } from "react";
import { useImmerReducer } from "use-immer";
import axios from "axios";
import Reducer from "../reducer/index";

const useDataApi = (initialUrl, initialData) => {
  const url = initialUrl;

  const [state, dispatch] = useImmerReducer(Reducer, {
    loading: false,
    error: false,
    pageLimit: 10,
    totalRecords: 100,
    data: initialData,
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "INIT_FETCH" });

      try {
        const res = await axios.get(url);
        dispatch({ type: "SUCCESS_FETCH", payload: res.data });
      } catch (err) {
        dispatch({ type: "FAIL_FETCH" });
      }
    };
    fetchData();
  }, [url, dispatch]);

  return [state];
};

export default useDataApi;

//? The commented sections are for example purposes in documentation, available in the README.md

// eslint-disable-next-line no-lone-blocks
{
  /*

import { useEffect, useReducer } from "react";
import axios from "axios";
import Reducer from "../reducer/index";

const useDataApi = (initialUrl, initialData) => {
  const url = initialUrl;

   const initialState = {
   loading: false,
   error: false,
   pageLimit: 10,
   totalRecords: 100,
   data: initialData,
   
   const [state, dispatch] = useReducer(Reducer, intitialState);
   

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "INIT_FETCH" });

      try {
        const res = await axios.get(url);
        dispatch({ type: "SUCCESS_FETCH", payload: res.data });
      } catch (err) {
        dispatch({ type: "FAIL_FETCH" });
      }
    };
    fetchData();
  }, [url]);

  return [state];
};

export default useDataApi;
*/
}
