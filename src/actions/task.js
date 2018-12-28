export const ADD_TASK = "add_task";
export const EDIT_TASK = "edit_task";
export const TOGGLE_TASK = "toggle_task";

export const addTask = task => {
  return {
    type: ADD_TASK,
    payload: task
  };
};

export const editTask = task => {
  return {
    type: EDIT_TASK,
    payload: task
  };
};

export const toggleTask = taskID => {
  return {
    type: TOGGLE_TASK,
    payload: taskID
  };
};
