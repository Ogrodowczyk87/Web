import React from "react";
import avatar from "../Assets/Images/avatar.jpg"

function AboutMe() {
    return (
        <div className="aboutMe_container">
            <div className="aboutMe_wrapper">
                <h2 className="aboutMe_title">AboutMe</h2>
                <div className="aboutMe_description">
                    <div>
                        <h3 className="aboutMe_MyName">Rafal Ogrodowczyk</h3>
                        <p>Atque, rem excepturiLorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Fugiat, cum libero in
                            possimus nesciunt quos quas similique. Atque, rem excepturi.</p>
                    </div>
                    <div className="home_picture">
                        <img className="picture" src={avatar} alt="portret" />
                    </div>

                    <div>
                        <h3 className="aboutMe_MyName">Rafal Ogrodowczyk</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, cum libero in
                            possimus nesciunt quos quas similique. Atque,
                            rem excepturiLorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Fugiat, cum libero in

                        </p>
                    </div>
                </div>

            </div>
        </div>)
}

export default AboutMe;
