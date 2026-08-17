import { combineReducers } from "redux";
import { handleActions } from "redux-actions";

import * as actions from "../actions/actions";

// simple reducer function
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return state + 1;
    }
    case 'DECREMENT': {
      return state - 1;
    }
    case 'COUNTER_UPDATE': {
      return action.payload.counter;
    }
    default: {
      return state;
    }
  }
};

// reducer created with handleActions
const users = handleActions(
  {
    [actions.getUserRequest](state) {
      return { ...state, state: "requested" };
    },
    [actions.getUserSuccess](
      state,
      {
        payload: { user }
      }
    ) {
      const { entities } = state;
      const newUser = { state: 'successed', ...user };
      return { entities: [...entities, newUser], state: 'successed' };
    },
    [actions.getUserFailure](state) {
      return { ...state, state: "failed" };
    }
  },
  {
    entities: []
  }
);

const tasks = handleActions(
  {
    [actions.addTask](
      state,
      {
        payload: { task }
      }
    ) {
      return [...state, task];
    }
  },
  []
);

export default combineReducers({ counter, users, tasks });
