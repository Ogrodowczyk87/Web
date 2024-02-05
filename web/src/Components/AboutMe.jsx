import React from "react";
import avatar from "../Assets/Images/avatar.jpg"

function AboutMe() {
    return (
        <div className="aboutMe_container">
            <div className="home_picture">
                <img className="picture" src={avatar} alt="portret" />
            </div>
            <h2 className="aboutMe_title">AboutMe</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, cum libero in
                possimus nesciunt quos quas similique. Atque,
                rem excepturiLorem ipsum, dolor sit amet consectetur
                adipisicing elit. Fugiat, cum libero in
                possimus nesciunt quos quas similique. Atque, rem excepturiLorem ipsum, dolor sit amet consectetur
                adipisicing elit. Fugiat, cum libero in
                possimus nesciunt quos quas similique. Atque, rem excepturi.</p>
            <p>Atque, rem excepturiLorem ipsum, dolor sit amet consectetur
                adipisicing elit. Fugiat, cum libero in
                possimus nesciunt quos quas similique. Atque, rem excepturi.</p>
            <p>Here are a few of the other activities tha I love to do!</p>
            <p>Social media</p>
            
        </div>)
}

export default AboutMe;
