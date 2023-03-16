import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({onSearch}) => {
    return (
        <>
        <div>
         <SearchBar onSearch = {onSearch} />
        </div>
        
        <div>
            <Link to="/abaut">ABAUT</Link>
        </div>

        <div>
            <Link to="/home">HOME</Link>
        </div>

        </>

    )
};

export default Nav;