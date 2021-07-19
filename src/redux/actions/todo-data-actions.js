import { ADD_NEW_TODO, EDIT_TODO, SET_TODO_DATA} from "../action-types/todo-data-action-types";



export const setTodoData = (todoData) => {
  return {
    type: SET_TODO_DATA,
    todoData,
    };
};

export const addTodoData = (todoData) => {
  return {
    type: ADD_NEW_TODO,
    todoData,
    };
};

export const editTodoData = (editTodo) => {
  console.log(editTodo)
  return {
    type: EDIT_TODO,
    editTodo,
    };
};