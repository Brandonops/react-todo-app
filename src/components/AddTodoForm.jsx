import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { FiArrowLeft } from 'react-icons/fi';
import { addTodoData } from '../redux/actions/todo-data-actions';
import { setRenderAddTodoForm } from '../redux/actions/render-add-to-form-actions';
import { Slide } from 'react-reveal';

export default function AddTodoForm() {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState({
        userId: 1,
        title: "",
        completed: true,
    });

    return (
        <div className="edit-form add-form">
            <Slide bottom>
            <div className="form-small-border"></div>
            <div className="form-header">
                <FiArrowLeft className="backArrow" onClick={() => dispatch(setRenderAddTodoForm(false))}></FiArrowLeft>
                <h2 className="form-title">Add ToDo</h2>
                <div></div>
            </div>
            <form className="todo-form" onSubmit={(e) => {
                e.preventDefault();
                const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
                const uniqid = randLetter + Date.now();
                const todo = {
                    userId: newTodo.newTodo.userId,
                    id: uniqid,
                    title: newTodo.newTodo.title,
                    completed: newTodo.newTodo.completed,
                }
                fetch('https://jsonplaceholder.typicode.com/todos/', {
                    method: 'POST',
                    body: JSON.stringify({
                        todo
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((json) => {
                        return dispatch(addTodoData((json.todo)))
                    });
            }
            }>
                <input className="input-form" onChange={(e) => {
                    return setNewTodo((prevState) => ({
                        newTodo: {
                            ...prevState.newTodo,
                            title: e.target.value
                        }
                    }));
                }}
                    type="text" />
                <select className="input-form select-input" onChange={(e) => {
                    return setNewTodo((prevState) => ({
                        newTodo: {
                            ...prevState.newTodo,
                            userId: e.target.value
                        }
                    }));
                }}
                    value={newTodo.userId}
                >
                    <option value="" selected="selected" disabled>User</option>
                    <option value={1}>
                        User 1
                    </option>
                    <option value={2}>
                        User 2
                    </option>
                    <option value={3}>
                        User 3
                    </option>
                </select>
                <select className="input-form select-input" onChange={(e) => {
                    if (e.target.value === "false") {
                        return setNewTodo((prevState) => ({
                            newTodo: {
                                ...prevState.newTodo,
                                completed: false
                            }
                        }));
                    } else {
                        return setNewTodo((prevState) => ({
                            newTodo: {
                                ...prevState.newTodo,
                                completed: true
                            }
                        }));
                    }
                }
                }
                    value={newTodo.completed}
                >
                    <option value="" selected="selected" disabled>Status</option>
                    <option value="false">
                        Open
                    </option>
                    <option value="true">
                        Closed
                    </option>
                </select>
                <button className="finish-button" type="submit"
                onClick={() =>{
                    setTimeout(() => {
                        dispatch(setRenderAddTodoForm(false))
                    }, 500)
                }}
                >Finish</button>
                <button className="quit-button" onClick={() => dispatch(setRenderAddTodoForm((false)))}>Quit</button>
            </form>
            </Slide>
        </div >
    )
}
