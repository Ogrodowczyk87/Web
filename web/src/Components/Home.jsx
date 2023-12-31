import React from "react";
import portret from "../Assets/Images/my-image.jpg"

function Home() {
    return <div className="home_wrapper">
        <div className="home">
            <div className="home_description">
                <h1 className="home_title">Hello </h1>
                <p className="home_my-name">  I'm Rafal Ogrodowczyk</p>
                <p className="home_description"><span className="home_span">Junior Front End Developer</span></p>
            </div>
        </div>
        <div className="home_picture">
            <img className="picture" src={portret} alt="portret" />
        </div>
    </div>;
}

export default Home;