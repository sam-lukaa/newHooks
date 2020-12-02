import { useReducer, useEffect } from "react";
import axios from "axios"
import Reducer from "../reducer/index";

const useDataApi = (initialUrl, initialData, result) => {
  const url = initialUrl;

  const [state, dispatch] = useReducer(Reducer, {
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
  }, [url]);

  return [state];
};

export default useDataApi;