import { SET_ADD_TODO_FORM} from "../action-types/render-add-todo-form-action-types";

export const setRenderAddTodoForm = (val) => {
    return {
      type: SET_ADD_TODO_FORM,
      val,
      };
  };
