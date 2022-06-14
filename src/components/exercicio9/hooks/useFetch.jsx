import { useReducer } from "react";

const initialState = {
  data: null,
  loading: false,
  fetching: false,
  error: null,
};

const dataReducer = (state, action) => {
  const actions = {
    fetchDataStart: () => ({
      ...state,
      loading: true,
      fetching: true,
      error: null,
    }),
    fetchDataSuccess: (data) => ({
      ...state,
      data,
      loading: false,
      fetching: false,
      error: null,
    }),
    addDataStart: () => ({
      ...state,
      loading: false,
      fetching: true,
      error: null,
    }),
    addDataSuccess: (data) => ({
      ...state,
      data: [...state.data, ...data],
      loading: false,
      fetching: false,
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

  const fetchMoreData = async (url) => {
    dispatch({ type: "addDataStart" });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "addDataSuccess", payload: data });
    } catch (error) {
      dispatch({ type: "fetchDataError", payload: error });
    }
  };

  return { ...state, fetchData, fetchMoreData };
};

export default useFetch;
