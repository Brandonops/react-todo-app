import React from 'react'
import { useSelector } from 'react-redux';
import TodoCard from './TodoCard';
export default function ClosedTodos(props) {
    const todoData = useSelector((state) => state.todoDataReducer.filter((todo) => {
        return todo.completed === true
    }));
    const searchData = todoData.filter(todo => todo.title.includes(props.searchCriteria))
    return (
        <div>
            <div className="card-container">
                            {
                                (searchData ? searchData : todoData).map((todo, index) => {
                                    return (
                                        <TodoCard
                                            key={index}
                                            todo={todo}
                                        />
                                    )
                                })
                            }

                        </div>
        </div>
    );
};
