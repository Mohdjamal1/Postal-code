const initialState = {
  loading: false,
  data: [],
  error: null
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DATA_FETCHING":
      return { ...state, loading: true };
    case "DATA_FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload, error: null };
    case "DATA_FETCH_ERROR":
      return { ...state, loading: false, data: [], error: action.payload };
    case "CLEAR_DATA":
      return { ...state, data: [] };
    default:
      return state;
  }
};

export default dataReducer;
