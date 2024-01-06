import React, { useEffect } from "react";
import { preLoaderAnim } from "../Assets/Animations/index"

const PreLoader = () => {
    useEffect(() => {
        preLoaderAnim();
    }, []);
    return (
        <div className="preloader">
            <div className="texts-container">
                <span>Developer,</span>
                <span>Curator,</span>
                <span>Vibes.</span>
            </div>
        </div>
    );
};

export default PreLoader;