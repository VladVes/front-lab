import { createSelector } from "reselect";
import unicId from "uniqid";

const getTasks = state => state.tasks;

export const tasksSelector = createSelector(getTasks, tasks =>
  tasks.map(task => ({ id: unicId(), ...task }))
);

export const usersStateSelector = state => state.users.state;

export const usersSelector = createSelector(
  state => state.users.entities,
  entities => entities
);
