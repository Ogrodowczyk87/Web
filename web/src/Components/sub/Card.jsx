import React from "react";
import progress from "./progress.jpg"

function Card() {
    return <div className="card">
        <img className="progress-picture" src={progress} alt="progress" />
        <h2>My Project card</h2>
        <p>I make this projectto show my all skills</p>
    </div>;
}

export default Card;
