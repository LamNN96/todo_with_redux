import { ADD_TASK, EDIT_TASK } from '../actions/index';

const initialState = {
    tasks: [{
        id: 1,
        title: 'Task 1',
        description: 'Desc 1'
    }]
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            let newTasks = [...state.tasks, {
                id: state.tasks.length + 1,
                title: action.payload.title,
                description: action.payload.description
            }]

            return {
                tasks: newTasks
            }
        case EDIT_TASK:
            let newTasksEdited = state.tasks.map(task =>
                (task.id == action.payload.id)
                    ? action.payload
                    : task)
            return {
                tasks: newTasksEdited
            }

        default:
            return state;
    }
}

export default taskReducer;