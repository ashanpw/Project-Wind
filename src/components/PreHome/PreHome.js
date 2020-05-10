import React, { useRef, useEffect } from "react";
import "./PreHome.css";
import wind from "../../assets/wind.png";
import gsap, { Power4, Power3, Power2 } from "gsap";

const PreHome = (props) => {
    let logo,
        sideLine1,
        sideLine2,
        name,
        instructions,
        rect,
        svg,
        projectWind,
        projectWindJapanese;
    logo =
        sideLine1 =
        sideLine2 =
        name =
        instructions =
        rect =
        svg =
        projectWind =
        projectWindJapanese =
            useRef(null);

    let hasBeenClickedOnce = false;

    let logoClickHandler = (e) => {
        if (!hasBeenClickedOnce) {
            hasBeenClickedOnce = true;
            gsap.to(logo, 0.5, { opacity: 0, ease: "power3.out", delay: 0.05 });
            gsap.to(sideLine2, 0.8, { attr: { y1: "0%", ease: "power3.out" } });
            gsap.to(name, 0.8, { y: -50, opacity: 0, delay: 0.5 });
            gsap.to(instructions, 0.8, { y: 50, opacity: 0, delay: 0.5 });

            gsap.to(rect, 1.5, {
                width: "100%",
                ease: "power3.inOut",
                delay: 1.2,
            });
            gsap.to(projectWind, 0, {
                visibility: "visible",
                opacity: 1,
                delay: 3.4,
            });
            gsap.to(".projectWindJapanese span", 1, {
                visibility: "visible",
                opacity: 1,
                delay: 2.7,
            });
            gsap.to(".projectWindJapanese", 1, {
                y: "1vh",
                ease: "power2.inOut",
                delay: 3.4,
            });
            gsap.to(".projectWindJapanese", 0, { opacity: 0, delay: 4.72 });
            gsap.to(svg, 1.5, {
                x: "40vw",
                width: "0vw",
                delay: 4,
                ease: "power3.inOut",
            });
            gsap.to(svg, 1, { fill: "black", delay: 5 }).eventCallback(
                "onComplete",
                () => props.changePage("Home"),
                { delay: 523 }
            );
        }
    };

    useEffect(() => {
        gsap.to(logo, 0.4, { opacity: "1", ease: "power3.in", delay: 0.5 });
        gsap.to([name, instructions], 1, {
            opacity: 1,
            ease: "power2.inOut",
            delay: 2.4,
        });
        gsap.from(name, 1, { y: -20, ease: "power2.inOut", delay: 2.4 });
        gsap.from(instructions, 1, { y: 20, ease: "power2.inOut", delay: 2.4 });
        gsap.to(sideLine1, 1, {
            attr: { y1: "0%", ease: Power2.easeOut },
            delay: 2.6,
        });
        gsap.to(sideLine2, 0.8, {
            attr: { y1: "90%", ease: Power2.easeIn },
            delay: 3.2,
        });
    }, []);
    return (
        <div className="PreHome">
            <div className="lineInstructions">
                <svg
                    height="30vh"
                    width="40vw"
                    className="svgLine"
                    ref={(el) => (svg = el)}
                >
                    <line
                        x1="0%"
                        y1="100%"
                        x2="0"
                        y2="100%"
                        className="sideLine"
                        stroke="grey"
                        ref={(el) => (sideLine1 = el)}
                    />
                    <line
                        x1="0"
                        y1="100%"
                        x2="0"
                        y2="100%"
                        className="sideLine"
                        stroke="white"
                        ref={(el) => (sideLine2 = el)}
                    />
                    <rect
                        width="0%"
                        height="100%"
                        fill="white"
                        ref={(el) => (rect = el)}
                    />
                </svg>
            </div>
            <h3 className="name" ref={(el) => (name = el)}>
                Ashan Panduwawala <br /> Portfolio Website
            </h3>
            <p className="instructions" ref={(el) => (instructions = el)}>
                Click the wind icon <br /> to begin
            </p>
            <p className="projectWind" ref={(el) => (projectWind = el)}>
                Project Wind
            </p>
            <p
                className="projectWindJapanese"
                ref={(el) => (projectWindJapanese = el)}
            >
                <b>
                    <span>Project Wind</span>
                </b>
            </p>
            <div className="imageContainer">
                <img
                    src={wind}
                    className="icon"
                    alt=""
                    onClick={logoClickHandler.bind(this)}
                    ref={(el) => (logo = el)}
                />
            </div>
        </div>
    );
};

export default PreHome;
