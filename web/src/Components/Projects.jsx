import React from "react";
import  portret  from "../Assets/Images/portret.jpg"

function Card() {

    const data = [
        {
            name: 'Ice Scream Shop',
            img:  portret ,
            description: 'lorem10'
        },
        {
            name: 'Software house',
            img:  portret ,
            description: 'lorem10'
        },
        {
            name: 'Film Service',
            img:  portret ,
            description: 'lorem10'
        }
    ]
    return <div className="projects">
        <div>
            {data.map((data) => (
                <div className="card-container">
                    <div className="image-container">
                        <img className="projects-image" src={data.img} alt="" />
                    </div>
                    <div className="card-description">
                        <p>{data.name}</p>
                        <p>{data.description}</p>
                        <button>Git hub</button>
                    </div>
                </div>
            ))}
        </div>
    </div>;
}

export default Card;
