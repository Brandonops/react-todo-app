import { BsThreeDots } from "react-icons/bs";
import { IoIosCheckmark } from "react-icons/io";
import { useDispatch } from 'react-redux';
import ReactTooltip from "react-tooltip";
import { editTodoData } from '../redux/actions/todo-data-actions';

export default function TodoCard(props) {
    const dispatch = useDispatch()

    return (
        <div className="todo-card">
            <div className="grouped-div">
                <div className="checked-symbol-container">
                    {props.todo.completed === true ? <IoIosCheckmark className="checked-symbol-filled"></IoIosCheckmark> : <div className="checked-symbol"></div>}
                </div>
                <div className="todo-title-user">
                    {props.todo.title > 15 ?
                    <p className="todo-title" style={{fontFamily: "sans-serif"}}> This title is too long... </p> :
                    <p className="todo-title" style={{fontFamily: "sans-serif"}}>{props.todo.title}</p> 
                    }
                    <p className="user-name">User: <span>{props.todo.userId} </span></p>
                </div>
            </div>
            {props.todo.completed === true ? <div className="edit-button"></div> :
                <div>
                    <ReactTooltip id='global' place="bottom" effect="solid" clickable={true} className="tooltip" style={{ background: "#070417" }}>
                        <p onClick={() => {
                            props.setSelectedEditTodo(props.todo.id)
                            props.setEditTodo({
                                userId: props.todo.userId,
                                title: props.todo.title,
                                completed: props.todo.completed
                            })
                            return props.setToggleEditMenu(true)
                        }}>Edit Todo</p>
                        <hr />
                        <p onClick={() => {
                            const editData = {
                                userId: props.todo.userId,
                                id: props.todo.id,
                                title: props.todo.title,
                                completed: true
                            }
                            dispatch(editTodoData(editData))
                            console.log(editData)
                        }}>Mark Completed</p>
                    </ReactTooltip>
                    <BsThreeDots data-tip data-for="global" data-event="click" className="three-dots-edit edit-button"
                        onClick={ () => {
                            props.setSelectedEditTodo(props.todo.id)
                            props.setEditTodo({
                                userId: props.todo.userId,
                                title: props.todo.title,
                                completed: props.todo.completed
                            })
                        }}
                    >
                    </BsThreeDots>
                </div>
            }
        </div >
    )
}
