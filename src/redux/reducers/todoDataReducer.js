import { ADD_NEW_TODO, EDIT_TODO, SET_TODO_DATA } from '../action-types/todo-data-action-types';

const initialState = []

export const todoDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TODO_DATA:
            return state = action.todoData
        case ADD_NEW_TODO:
            return state = [action.todoData, ...state]
        case EDIT_TODO:
            return state.map((todo) => todo.id === action.editTodo.id ? 
                { ...todo,
                userId: action.editTodo.userId,
                id: action.editTodo.id,
                title: action.editTodo.title,
                completed: action.editTodo.completed
            } :
                todo
            )
        default:
            return state;
    }
}
