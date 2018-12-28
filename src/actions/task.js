import { ADD_TASK, EDIT_TASK } from './index';

export const addTask = task => {
    return {
        type : ADD_TASK,
        payload : task
    }
}
export const editTask = task => {
    return {
        type : EDIT_TASK,
        payload : task
    }
}