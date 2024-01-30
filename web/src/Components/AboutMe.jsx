import React from "react";
import avatar from "../Assets/Images/avatar.jpg"

function AboutMe() {
    return (
        <div className="aboutMe_container">
            <h2 className="aboutMe_title">AboutMe</h2>
            <div className="home_picture">
                <img className="picture" src={avatar} alt="portret" />
            </div>
        </div>)
}

export default AboutMe;
