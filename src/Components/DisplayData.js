import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearData } from "../Redux/Actions/FetchData";
const DisplayData = () => {
  const { loading, data, error } = useSelector((state) => state.dataReducer);
  console.log(data);
  const dispatch = useDispatch();
  const clear = () => {
    dispatch(clearData());
  };

  return (
    <div className="container">
      <p>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {data.length !== 0 ? (
              <div>
                {JSON.stringify(data) === "{}" ? (
                  <p>Data not found. Plz Enter Correct Postal Code.</p>
                ) : (
                  <div className="data">
                    <p>Post code: {data["post code"]}</p>
                    <p>
                      Place Name: {data.places && data.places[1]["place name"]}
                    </p>
                    <p>State: {data.places && data.places[1].state}</p>
                    <p>
                      State Abbreviation:{" "}
                      {data.places && data.places[1]["state abbreviation"]}
                    </p>
                    <p>Country: {data.country}</p>
                    <p>Longitude: {data.places && data.places[1].longitude}</p>
                    <p>Latitude: {data.places && data.places[1].latitude}</p>
                    <button
                      className="btn btn-secondary"
                      onClick={() => clear()}
                    >
                      Clear Data
                    </button>
                  </div>
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        )}
        {error && <div>Error: {error}</div>}
      </p>
    </div>
  );
};

export default DisplayData;
