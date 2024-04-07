import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ setLibraryStatus, libraryStatus, darkMode, toggleDarkMode }) => {
    return (
        <nav>
            <h1 className="songs">Songs</h1>
            <label className="switch">
                <input onClick={toggleDarkMode} type="checkbox" />
                <span className="slider"></span>
            </label>



            <button onClick={() => {
                setLibraryStatus(!libraryStatus);
            }} >
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
            
        </nav>
    );
};

export default Nav;
