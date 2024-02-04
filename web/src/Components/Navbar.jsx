import React, { useState } from "react";
import { Link } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu'
import { motion } from 'framer-motion'

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
            <Link to="/">
                <motion.button className="nav_button"
                    whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        boxShadow: "0px 0px 8px rgb(255,255,255)",
                    }}
                >
                    Home
                </motion.button>
            </Link>
            <Link to="/aboutME">
                <motion.button className="nav_button"
                    whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        boxShadow: "0px 0px 8px rgb(255,255,255)",
                    }}
                >
                    About Me
                </motion.button>
            </Link>
            <Link to="/projects">
                <motion.button className="nav_button"
                    whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        boxShadow: "0px 0px 8px rgb(255,255,255)",
                    }}
                >
                    My Projects
                </motion.button>
            </Link>

            <Link to="/education">
                <motion.button className="nav_button"
                    whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        boxShadow: "0px 0px 8px rgb(255,255,255)",
                    }}
                >
                    Education
                </motion.button>
            </Link>
        </div>
    </div>;
}

export default Navbar;
