import React from "react";
import logo from "../images/logo.svg"
import "../styles/home.css"

const Header = () => {
    return (
        <header>
            <a href="#"><img src={logo}/></a>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>New</li>
                    <li>Popular</li>
                    <li>Trending</li>
                    <li>Categories</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;