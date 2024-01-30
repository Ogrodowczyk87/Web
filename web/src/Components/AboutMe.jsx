import React from "react";
import avatar from "../Assets/Images/avatar.jpg"

function AboutMe() {
    return (
        <div className="AboutMe_container">AboutMe
            <div className="home_picture">
                <img className="picture" src={avatar} alt="portret" />
            </div>
        </div>)
}

export default AboutMe;
