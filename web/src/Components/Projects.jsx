import React from "react";
import portret from "../Assets/Images/portret.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Card() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    const data = [
        {
            name: 'Ice Scream Shop',
            img: portret,
            description: 'lorem10'
        },
        {
            name: 'Software house',
            img: portret,
            description: 'lorem10'
        },
        {
            name: 'Film Service',
            img: portret,
            description: 'lorem10'
        },
        {
            name: 'In progres',
            img: portret,
            description: 'lorem10'
        }
    ]
    return <div className="projects">
        <div className="projects-wrapper"></div>
        <div className="project-title">
            <p>Some of my work</p>
        </div>
        <div className="cards-wrapper">
            <Slider {...settings}>
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
            </Slider>
        </div>
    </div>;
}

export default Card;
