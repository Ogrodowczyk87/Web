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
            description: 'This page i collaborate with couple my friends, help me to understand how to share work with others peoples'
        },
        {
            name: 'Software house',
            img: portret,
            description: 'My first page when I learn hwo to code I use pure HTML, SCSS and some JS'
        },
        {
            name: 'Film Service',
            img: portret,
            description: 'I build this project to improve my JS skills'
        },
        {
            name: 'In progres',
            img: portret,
            description: 'ln progres'
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
                            <div className="description-container">
                                <p className="name">{data.name}</p>
                                <p className="description">{data.description}</p>
                            </div>
                            <div className="button-wrapper">
                                <button className="button">Git hub</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </div>;
}

export default Card;
