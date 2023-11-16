export const dataFetching = () => {
  return {
    type: "DATA_FETCHING"
  };
};

export const dataFetchSuccess = (data) => {
  return {
    type: "DATA_FETCH_SUCCESS",
    payload: data
  };
};

export const dataFetchError = (error) => {
  return {
    type: "DATA_FETCH_ERROR",
    payload: error
  };
};

export const clearData = () => {
  return {
    type: "CLEAR_DATA"
  };
};

export function fetchData(code) {
  return function (dispatch) {
    dispatch(dataFetching());
    fetch(`https://api.zippopotam.us/in/${code}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(dataFetchSuccess(data));
      })
      .catch((err) => dispatch(dataFetchError(err.message)));
  };
}
