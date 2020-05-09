import React, { useRef, useEffect } from 'react'
import './PreHome.css'
import wind from '../../assets/wind.png'
import gsap from "gsap";
const PreHome = (props) => {
    let logo, sideLine1, sideLine2, name, instrutions, rect, svg, projectWind,
        rect1,
        rect2,
        rect3,
        rect4,
        rect5,
        rect6,
        rect7,
        rect8,
        rect9, loaded;
    logo = sideLine1 = sideLine2 = name = instrutions = rect = svg = projectWind = rect1 = rect2 = rect3 = rect4 = rect5 = rect6 = rect7 = rect8 = rect9 = loaded = useRef(null);



    const logoClickHandler = (e) => {
        gsap.to(logo, .5, { opacity: 0, ease: "power3.out", delay: .05 })
        gsap.to(sideLine2, .8, { attr: { y1: "0%", ease: "power3.out" } })
        gsap.to(name, .8, { y: -50, opacity: 0, delay: .5 })
        gsap.to(instrutions, .8, { y: 50, opacity: 0, delay: .5 })

        gsap.to(rect, 1.5, { width: "100%", ease: "power3.inOut", delay: 1.2 })
        gsap.to(projectWind, 0, { visibility: "visible", opacity: 1, delay: 3 })
        gsap.to(svg, 1.5, { x: "40vw", width: "0%", delay: 3, ease: "power3.inOut" })
        gsap.to(svg, 1, { fill: "black", delay: 4 })
            .eventCallback("onComplete", () => props.changePage("Home"), { delay: 523 });

    }

    useEffect(() => {

        for (let i = 1; i <= 9; i++) {
            let tl_loading1 = gsap.timeline();
            tl_loading1.to(eval("rect" + i), 1.5, {
                width: "100%",
                ease: "power3.inOut",
                delay: i / 5 + 0.3,
            });
            if (i == 9) {
                tl_loading1.to(
                    [rect1, rect2, rect3, rect4, rect5, rect6, rect7, rect8, rect9],
                    1.4,
                    { x: "200%", ease: "power4.inOut", delay: .2 }
                );
                gsap.to(loaded, 0.1, { opacity: "0", delay: 4.34 })
                gsap.to(logo, 0.1, { opacity: "1", delay: 4.3 });
            }
        }
        gsap.to(loaded, 0.5, { opacity: 1, delay: 2 });

        gsap.from(name, 1, { opacity: 0, y: -20, ease: "power2.inOut", delay: 5.4 })
        gsap.from(instrutions, 1, { opacity: 0, y: 20, ease: "power2.inOut", delay: 5.4 })
        gsap.to(sideLine1, 1, { attr: { y1: "0%", ease: "power4.inOut" }, delay: 5.6 })
        gsap.to(sideLine2, 1, { attr: { y1: "90%", ease: "power2.in" }, delay: 6.3 })


    }, [])
    return (
        <div className="PreHome">

            <div className="lineInstructions">
                <svg height="30vh" width="40vw" className="svgLine" ref={el => svg = el}>
                    <line x1="0%" y1="100%" x2="0" y2="100%" className="sideLine" stroke="grey" ref={el => sideLine1 = el} />
                    <line x1="0" y1="100%" x2="0" y2="100%" className="sideLine" stroke="white" ref={el => sideLine2 = el} />
                    <rect width="0%" height="100%" fill="white" ref={el => rect = el} />
                </svg>
            </div>
            <h3 className="name" ref={el => name = el}>Ashan Panduwawala <br /> Portfolio Website</h3>
            <p className="instructions" ref={el => instrutions = el}>Click the wind icon <br /> to begin</p>
            <div className="box">
                <svg width="100%" height="100%" className="svgLoading">
                    <rect
                        width="0%"
                        height="11%"
                        className="rect1"
                        ref={(el) => (rect1 = el)}
                    />
                    <rect
                        width="0%"
                        height="11%"
                        y="10%"
                        className="rect2"
                        ref={(el) => (rect2 = el)}
                    />
                    <rect
                        width="0%"
                        height="11%"
                        y="20%"
                        className="rect3"
                        ref={(el) => (rect3 = el)}
                    />
                    <rect
                        width="0%"
                        height="11%"
                        y="30%"
                        className="rect4"
                        ref={(el) => (rect4 = el)}
                    />
                    <rect
                        width="0%"
                        height="11%"
                        y="40%"
                        className="rect5"
                        ref={(el) => (rect5 = el)}
                    />
                    <rect
                        width="0%"
                        height="11%"
                        y="50%"
                        className="rect6"
                        ref={(el) => (rect6 = el)}
                    />
                    <rect
                        width="0%"
                        height="11%"
                        y="60%"
                        className="rect7"
                        ref={(el) => (rect7 = el)}
                    />
                    <rect
                        width="0%"
                        height="11%"
                        y="70%"
                        className="rect8"
                        ref={(el) => (rect8 = el)}
                    />
                    <rect
                        width="0%"
                        height="11%"
                        y="80%"
                        className="rect9"
                        ref={(el) => (rect9 = el)}
                    />

                    <text
                        x="50%"
                        y="50%"
                        className="loaded"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        ref={(el) => (loaded = el)}
                    >
                        100%
                        </text>
                </svg>
            </div>
            <p className="projectWind" ref={el => projectWind = el}>Project Wind</p>
            <div className="imageContainer">
                <img src={wind} className="icon" onClick={logoClickHandler.bind(this)} ref={el => logo = el} />
            </div>
        </div >
    )
}


export default PreHome;