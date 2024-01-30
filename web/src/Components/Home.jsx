import React from "react";
import github from '../Assets/Images/github.svg'
import { motion, useTime, useTransform } from "framer-motion"

function Home() {

    const time = useTime()
    const rotate = useTransform(
        time,
        [0, 4000], // For every 4 seconds...
        [0, 360], // ...rotate 360deg
        { clamp: false }
    )



    return <div className="home_wrapper">
        <div className="home">
            <motion.div className="home_svg"
                style={{ rotate }}
            >
                <a href="https://github.com/Ogrodowczyk87" target="_blank" >
                    <img src={github} alt="Coding Beauty logo"></img>
                </a>
            </motion.div>
            <div className="home_description">
                <h1 className="home_title">Hello </h1>
                <p className="home_myName">  I'm Rafal Ogrodowczyk</p>
                <p className="home_description"><span className="home_span">Junior Front End Developer</span></p>
            </div>
        </div>

    </div >;
}

export default Home;