import React from "react";
import portret from '../Pictures/portret.jpg'

function Home() {
    return <div>
        <div className="home">
            <div>
                <h1 className="home_title">Hello, I'm Rafal
                    I'm a <span>Junior Front End developer</span>
                </h1>
                <p className="home_subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur culpa dolorem velit, a iusto aspernatur.
                </p>
                <div>project bottom or animation</div>
            </div>
        </div>
        <div>
            <img src={portret} />
        </div>
    </div>;
}

export default Home;
