import { ADD_TASK, EDIT_TASK, TOGGLE_TASK } from "../actions/task";

const initialState = {
  tasks: [
    {
      id: 1,
      title: "Task 1",
      description: "Desc 1",
      isDone: false
    }
  ]
};

const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      let newTasks = [
        ...state.tasks,
        {
          id: state.tasks.length + 1,
          title: action.payload.title,
          description: action.payload.description,
          isDone: false
        }
      ];

      return {
        tasks: newTasks
      };
    case TOGGLE_TASK:
      let newTasksToggled = state.tasks.map(task =>
        task.id == action.payload ? { ...task, isDone: !task.isDone } : task
      );
      console.log(newTasksToggled);
      return {
        tasks: newTasksToggled
      };
    case EDIT_TASK:
      let newTasksEdited = state.tasks.map(task =>
        task.id == action.payload.id ? action.payload : task
      );
      return {
        tasks: newTasksEdited
      };

    default:
      return state;
  }
};

export default TaskReducer;
