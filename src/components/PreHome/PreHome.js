import React, { useRef, useEffect } from 'react'
import './PreHome.css'
import wind from '../../assets/wind.png'
import gsap from "gsap";
const PreHome = (props) => {
    let logo, sideLine1, sideLine2, name, instrutions, rect, svg, projectWind;
    logo = sideLine1 = sideLine2 = name = instrutions = rect = svg = projectWind = useRef(null);



    const logoClickHandler = (e) => {
        gsap.to(logo, .5, { opacity: 0, ease: "power3.out", delay: .05 })
        gsap.to(sideLine2, .8, { attr: { y1: "0%", ease: "power3.out" } })
        gsap.to(name, .8, { y: -50, opacity: 0, delay: .5 })
        gsap.to(instrutions, .8, { y: 50, opacity: 0, delay: .5 })

        gsap.to(rect, 1.5, { width: "100%", ease: "power3.inOut", delay: 1.5 })
        gsap.to(projectWind, 0, { visibility: "visible", delay: 3 })
        gsap.to(svg, 1.5, { x: "40vw", width: "0%", delay: 3, ease: "power3.inOut" })
            .eventCallback("onComplete", () => props.changePage("Home"));

    }

    useEffect(() => {
        gsap.from(logo, 1, { opacity: 0, ease: "Power3.in" })
        gsap.from([name, instrutions], 1, { opacity: 0, ease: "power3.in", delay: 1.6 })
        gsap.to(sideLine1, .6, { attr: { y1: "0%" }, delay: 1.6 })
        gsap.to(sideLine2, .8, { attr: { y1: "90%" }, delay: 2 })
        gsap.to(sideLine2, 1, { width: "30vw" })
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
            <div className="imageContainer">
                <img src={wind} className="icon" onClick={logoClickHandler.bind(this)} ref={el => logo = el} />
            </div>

            <p className="projectWind" ref={el => projectWind = el}>Project Wind</p>


        </div >
    )
}


export default PreHome;