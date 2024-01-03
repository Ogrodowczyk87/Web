import React from "react";
import portret from "../Assets/Images/my-image.jpg"

function Home() {
    return <div className="home_wrapper">
        <div className="home">
            <div className="home_description">
                <h1 className="home_title">Hello, I'm  </h1>
                <p className="home_my-name">Rafal Ogrodowczyk</p>
                <p className="home_description">I'm a <span className="home_span">Junior Front End developer</span></p>
            </div>
        </div>
        <div>
            <img className="picture" src={portret} alt="portret" />
        </div>
    </div>;
}

export default Home;
