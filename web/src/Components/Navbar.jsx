import React, { useState } from "react";
import { Link } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu'

function Navbar() {

    const [expendNavbar, setExpandNavbar] = useState(false)
    //TODO "implementation navbar"
    //TODO "if expendNavbar is true then is open if not will be close"
    return <div className="navbar" id={expendNavbar ? "open" : "close"}>
        <div className="toggleButton">
            <button onClick={() => { setExpandNavbar((prev) => !prev) }}>
                <MenuIcon />
            </button>
        </div>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/education">Education & Expirence</Link>
        </div>
    </div>;
}

export default Navbar;
