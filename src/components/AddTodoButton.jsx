import React from 'react'
import { useDispatch } from 'react-redux'
import { setRenderAddTodoForm } from '../redux/actions/render-add-to-form-actions'
import { GoPlusSmall } from "react-icons/go";

export default function AddTodoButton() {
    const dispatch = useDispatch();
    return (
        <div>
            <GoPlusSmall className="add-todo-button" onClick={() => dispatch((setRenderAddTodoForm(true)))}></GoPlusSmall>
        </div>
    )
}
