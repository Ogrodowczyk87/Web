import React from "react";
import github from '../Assets/Images/github.svg'

function Home() {
    return <div className="home_wrapper">
        <div className="home">
            <div className="home_svg">
                <a href="https://github.com/Ogrodowczyk87" target="_blank" >
                    <img src={github} alt="Coding Beauty logo"></img>
                </a>
            </div>
            <div className="home_description">
                <h1 className="home_title">Hello </h1>
                <p className="home_myName">  I'm Rafal Ogrodowczyk</p>
                <p className="home_description"><span className="home_span">Junior Front End Developer</span></p>
            </div>
        </div>

    </div>;
}

export default Home;