import React from "react";
import ReactTypingEffect from "react-typing-effect";
import "./assets/style_home.css";
import "./assets/_typography.scss";

function Home() {
    return (
        <div className="fb-row-container full-height fb-scroll">
            <main
                role="main"
                className=
                "fb-main page--landing row-fluid no-shrink center-vertically fb-img-glitch">
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
            </main>
        </div>
    );
}

export default Home;
