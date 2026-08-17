import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import logger from "redux-logger";

import rootReducer from "../reducers/reducers";

const initState = {
  counter: 10
  // users: [{ id: 0, name: "SuperUser" }]
};

export const store = createStore(
  rootReducer,
  initState,
  compose(
    applyMiddleware(thunk)
    // applyMiddleware(logger)
  )
);
