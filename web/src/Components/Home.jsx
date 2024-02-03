import React, { useRef } from "react";
import github from '../Assets/Images/github.svg'
import { motion, useTime, useTransform, } from "framer-motion"
import arrow from "../Assets/Images/arrow.png"

function Home() {

    const time = useTime()
    const rotate = useTransform(
        time,
        [0, 4000], // For every 4 seconds...
        [0, 360], // ...rotate 360deg
        { clamp: false }
    )

    const parentRef = useRef()

    return <div className="home_wrapper" ref={parentRef}>
        <div className="home" >
            {/* //! drag item don't work */}
            <motion.div className="home_svg"
                drag
                dragConstraints={parentRef}
                dragElastic={0.7}
                style={{ rotate }}
            >
                <a href="https://github.com/Ogrodowczyk87" target="_blank" >
                    <img className="home__svgIcon" src={github} alt="Coding Beauty logo"></img>
                </a>
                {/* //!mike arrowin saperate div? */}
                <div className="home_arrow">
                    <img src={arrow} />
                    <p>DRAG ME!</p>
                </div>
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