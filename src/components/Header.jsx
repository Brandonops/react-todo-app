import React from 'react'
import { Link, useLocation} from 'react-router-dom'
import { BsThreeDots } from "react-icons/bs";

export default function Header() {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    return (
        <div className="todo-header">
            <div className="logo-container">
                <h1 className="header-logo">ToDo's</h1>
                <BsThreeDots className="three-dots"></BsThreeDots>
            </div>
            <ul>
                <li className={splitLocation[1] === "" ? "active" : ""}>
                    <Link to='/'>Open</Link>
                </li>
                <li className={splitLocation[1] === "closed" ? "active" : ""}>
                    <Link to='/closed'>Closed</Link>
                </li>
            </ul>
        </div>
    )
}
