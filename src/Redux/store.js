import { createStore, combineReducers, applyMiddleware } from "redux";
import dataReducer from "./Reducers/dataReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  dataReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
