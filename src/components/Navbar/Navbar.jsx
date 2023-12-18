import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";

const Navbar = () =>{
    return(
        <div className="navbar">
            <img className="logo" src={logo}/>
            <img className="avatar" src={avatar}/>
        </div>
    )
}

export default Navbar