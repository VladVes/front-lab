import { createAction } from "redux-actions";
import axios from "axios";

// simple
export const incrementAction = { type: "INCREMENT", payload: {} };
export const decrementAction = { type: "DECREMENT", payload: {} };
export const userAddAction = {
  type: "USER_ADD",
  payload: {
    user: { name: "John", id: 1 }
  }
};
export const userDeleteAction = { type: "USER_DELETE", payload: { id: 1 } };

// createAction returns function that return new func that receive the payload and return action object { type: ..., payload: ... }.
export const addUser = createAction("USER_ADD");

console.log("action addUser:", addUser);

export const addTask = createAction("TASK_ADD");
export const updateCounter = createAction("COUNTER_UPDATE");

export const getUserRequest = createAction("GET_USER_REQUEST");
export const getUserSuccess = createAction("GET_USER_SUCCESS");
export const getUserFailure = createAction("GET_USER_FAILURE");

export const getUser = () => async dispatch => {
  dispatch(getUserRequest());
  try {
    const response = await axios.get("https://randomuser.me/api/");
    console.log("ASYNC ACTION - response: ", response.data.results[0]);
    dispatch(getUserSuccess({ user: response.data.results[0] }));
  } catch (e) {
    console.log("ASYNC ACTION - error: ", e);
    dispatch(getUserFailure());
  }
};
