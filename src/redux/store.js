import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
import { financialReducer } from "./reducers/financialReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  financial: financialReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
