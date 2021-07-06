import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { IoIosCheckmark } from "react-icons/io";

export default function TodoCard(props) {
    return (
        <div className="todo-card">
            <div className="grouped-div">
                {props.todo.completed === true ? <IoIosCheckmark className="checked-symbol-filled"></IoIosCheckmark> : <div className="checked-symbol"></div>}
                <div className="todo-title-user">
                    <p>{props.todo.title}</p>
                    <p className="user-name">User: {props.todo.userId}</p>
                </div>
            </div>
            {props.todo.completed === true ? <div className="edit-button"></div> :
               <BsThreeDots className="three-dots-edit edit-button"
                    onClick={() => {
                        props.setSelectedEditTodo(props.todo.id)
                        props.setEditTodo({
                            userId: props.todo.userId,
                            title: props.todo.title,
                            completed: props.todo.completed
                        })
                        return props.setToggleEditMenu(true);
                    }}>
                </BsThreeDots>
            }
        </div>
    )
}
