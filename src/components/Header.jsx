import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BsThreeDots } from "react-icons/bs";
import { Slide } from 'react-reveal';

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
                <li>
                    <Link className="nav-link" to='/'>Open</Link>
                    {splitLocation[1] === "" ?
                        <Slide right>
                            <div className="nav-link-border-container">
                                <div className="nav-link-border"></div>
                            </div>
                        </Slide>
                        :
                        <div className="nav-link-border-container">
                            <div className="nav-link-border-none"></div>
                        </div>
                    }
                </li>
                <li>
                    <Link className="nav-link" to='/closed'>Closed</Link>
                    {splitLocation[1] === "closed" ?
                        <Slide left>
                            <div className="nav-link-border-container">
                                <div className="nav-link-border"></div>
                            </div>
                        </Slide>
                        :
                        <div className="nav-link-border-container">
                            <div className="nav-link-border-none"></div>
                        </div>
                    }
                </li>
            </ul>
        </div>
    )
}
