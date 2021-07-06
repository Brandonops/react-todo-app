import React from 'react'
import {BiSearch} from "react-icons/bi";

export default function Search(props) {
    return (
        <div className="search-container">
            <input className="search-bar" placeholder="Search Todo's" onChange={(e) => props.setSearchCriteria(e.target.value)} type="text"/>
            <BiSearch className="search-icon"></BiSearch>
        </div>
    )
}
