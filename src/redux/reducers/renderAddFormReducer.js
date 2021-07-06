import { SET_ADD_TODO_FORM } from '../action-types/render-add-todo-form-action-types';

const initialState = false

export const renderAddForm = (state = initialState, action) => {
    switch(action.type) {
        case SET_ADD_TODO_FORM:
            return state = action.val
        default:
            return state;
    }
}
