import React from "react";
import {Image} from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";
import "./assets/style_home.css";
import "./assets/_typography.scss";

function Home() {
    return (
        <div className="fb-row-container full-height fb-scroll">
            <div className="pitt-container">
                <img
                    className="pittsburgh-image"
                    src={process.env.PUBLIC_URL + "/img/home/pittsburgh.png"}
                    alt="Home"
                    fluid
                />
            </div>
            <div className="fb-container fb-centered-main">
                <h1 className="fb-glitch" data-text='Pitt CyberSecurity Club'>
                    Pitt CyberSecurity Club
                </h1>
                <ReactTypingEffect
                    className="typed-text"
                    text="The University of Pittsburgh's Premier Hacking Club"
                    speed={100}
                    eraseDelay={5000}
                />
            </div>
        </div>
    );
}

export default Home;
