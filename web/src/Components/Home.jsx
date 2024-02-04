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

    return <div className="home_wrapper" >
        <div className="home" ref={parentRef} >
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
                <div className="home_arrow">
                    <img src={arrow} />
                    <p>DRAG ME!</p>
                </div>
            </motion.div>
            <div className="home_description">
                <motion.h1 className="home_title"
                    initial={{ y: -750 }}
                    animate={{ y: -10 }}
                    transition={{ delay: 0.6 }}
                >Hello </motion.h1>
                <motion.p className="home_myName"
                    initial={{ y: -750 }}
                    animate={{ y: -10 }}
                    transition={{ delay: 0.8 }}
                >  I'm Rafal Ogrodowczyk</motion.p>
                <motion.p className="home_description"
                    initial={{ y: -750 }}
                    animate={{ y: -10 }}
                    transition={{ delay: 1 }}

                ><span className="home_span">Junior Front End Developer</span></motion.p>
            </div>
        </div>

    </div >;
}

export default Home;