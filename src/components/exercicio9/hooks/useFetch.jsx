import { useReducer } from "react";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const dataReducer = (state, action) => {
  const actions = {
    fetchDataStart: () => ({
      ...state,
      loading: true,
      error: null,
    }),
    fetchDataSuccess: (data) => ({
      ...state,
      data,
      loading: false,
      error: null,
    }),
    fetchDataError: (error) => ({
      ...state,
      data: null,
      loading: false,
      error,
    }),
  };

  return actions[action.type] ? actions[action.type](action.payload) : state;
};

const useFetch = () => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const fetchData = async (url) => {
    dispatch({ type: "fetchDataStart" });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "fetchDataSuccess", payload: data });
    } catch (error) {
      dispatch({ type: "fetchDataError", payload: error });
    }
  };

  return { ...state, fetchData };
};

export default useFetch;
