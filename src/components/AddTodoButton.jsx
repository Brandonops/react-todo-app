import React from 'react'
import { useDispatch } from 'react-redux'
import { setRenderAddTodoForm } from '../redux/actions/render-add-to-form-actions'
import { GoPlusSmall } from "react-icons/go";
import ReactTooltip from 'react-tooltip';

export default function AddTodoButton() {
    const dispatch = useDispatch();
    
    return (
        <div>
            <ReactTooltip place="bottom" type="dark" effect="solid"/>
            <GoPlusSmall data-tip="Add a new Todo" className="add-todo-button" onClick={() => dispatch((setRenderAddTodoForm(true)))}></GoPlusSmall>
        </div>
    )
}
