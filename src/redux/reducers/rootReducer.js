import { combineReducers } from "redux";
import { todoDataReducer } from "./todoDataReducer";
import { renderAddForm } from "./renderAddFormReducer"

const rootReducer = combineReducers({
    renderAddForm,
    todoDataReducer,
})

export default rootReducer;