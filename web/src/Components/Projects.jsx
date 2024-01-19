import React from "react";
import Card from "./sub/Card"

function Projects() {

    return <div className="projects">
        <div className="project-title">
            <h3>My work</h3>
        </div>
        <div className="card-wrapper">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>;
}

export default Projects;
