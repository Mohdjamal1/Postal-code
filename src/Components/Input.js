import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../Redux/Actions/FetchData";

//main function
const Input = () => {
  const dispatch = useDispatch();
  const [code, setCode] = useState("");

  const searchInfo = () => {
    if (code.trim() !== "") {
      console.log("Api calling");
      dispatch(fetchData(code));
      setCode("");
    }
  };

  return (
    <div className="inputContainer">
      <label className="form-label">Enter Postal Code</label>
      <br />
      <div className="row">
        <div className="col-md-6">
          <input
            className="form-control"
            type="number"
            onChange={(e) => setCode(e.target.value)}
            value={code}
          />
        </div>
        <button className="btn btn-primary col-1" onClick={() => searchInfo()}>
          search
        </button>
      </div>
    </div>
  );
};

export default Input;
