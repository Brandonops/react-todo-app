import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoCard from './TodoCard';
import { FiArrowLeft } from 'react-icons/fi';
import { editTodoData } from '../redux/actions/todo-data-actions';
import { setRenderAddTodoForm } from '../redux/actions/render-add-to-form-actions';
import { Slide } from 'react-reveal';

export default function OpenedTodos(props) {
    const [toggleEditMenu, setToggleEditMenu] = useState(false)
    const [selectedEditTodo, setSelectedEditTodo] = useState("")
    const [editTodo, setEditTodo] = useState({
        userId: 1,
        title: "",
        completed: false
    })
    const dispatch = useDispatch();
    const todoData = useSelector((state) => state.todoDataReducer.filter((todo) => {
        return todo.completed === false
    }));
    const searchData = todoData.filter(todo => todo.title.includes(props.searchCriteria));
    return (
        <div>
            {
                !toggleEditMenu ?
                    <div>
                        <div className="card-container">
                            {
                                (searchData ? searchData : todoData).map((todo, index) => {
                                    return (
                                        <TodoCard
                                            key={index}
                                            todo={todo}
                                            setEditTodo={setEditTodo}
                                            setToggleEditMenu={setToggleEditMenu}
                                            toggleEditMenu={toggleEditMenu}
                                            setSelectedEditTodo={setSelectedEditTodo}
                                        />
                                    )
                                })
                            }

                        </div>
                    </div> :
                    <div className="edit-form">
                        <Slide bottom>
                            <div className="form-small-border"></div>
                            <div className="form-header">
                                <FiArrowLeft className="backArrow" onClick={() => setToggleEditMenu(false)}></FiArrowLeft>
                                <h2 className="form-title">Edit ToDo</h2>
                                <div></div>
                            </div>
                            <form className="todo-form"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const todo = {
                                        userId: editTodo.editTodo.userId,
                                        id: selectedEditTodo,
                                        title: editTodo.editTodo.title,
                                        completed: editTodo.editTodo.completed,
                                    }
                                    console.log(todo)
                                    fetch(`https://jsonplaceholder.typicode.com/todos/${selectedEditTodo}`, {
                                        method: 'PUT',
                                        body: JSON.stringify({
                                            todo
                                        }),
                                        headers: {
                                            'Content-type': 'application/json; charset=UTF-8',
                                            'Accept': 'application/json'
                                        },
                                    })
                                        .then((response) => response.json())
                                        .then((json) => {
                                            console.log(json)
                                            return dispatch(editTodoData(json.todo))
                                        });
                                }
                                }>
                                <input className="input-form" onChange={(e) => {
                                    return setEditTodo((prevState) => ({
                                        editTodo: {
                                            ...prevState.editTodo,
                                            title: e.target.value
                                        }
                                    }));
                                }}
                                    placeholder={editTodo.title}
                                    type="text"
                                    value={editTodo.title} />
                                <select className="input-form select-input" onChange={(e) => {
                                    return setEditTodo((prevState) => ({
                                        editTodo: {
                                            ...prevState.editTodo,
                                            userId: e.target.value
                                        }
                                    }));
                                }}
                                    value={editTodo.userId}
                                >
                                    <option value="" selected disabled hidden>User</option>
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
                                        return setEditTodo((prevState) => ({
                                            editTodo: {
                                                ...prevState.editTodo,
                                                completed: false
                                            }
                                        }));
                                    } else {
                                        return setEditTodo((prevState) => ({
                                            editTodo: {
                                                ...prevState.editTodo,
                                                completed: true
                                            }
                                        }));
                                    }
                                }
                                }
                                    value={editTodo.completed}
                                >
                                    <option value="" selected disabled hidden>Status
                                    </option>
                                    <option value="false">
                                        Open
                                    </option>
                                    <option value="true">
                                        Closed
                                    </option>
                                </select>
                                <button className="finish-button" type="submit" onClick={() => {
                                    setTimeout(() => {
                                        setToggleEditMenu(false)
                                    }, 500)
                                }}>Finish</button>
                                <button className="quit-button" onClick={() => setToggleEditMenu(false)}>Quit</button>
                            </form>
                        </Slide>
                    </div>
            }
        </div>
    )
}
