import React, { useEffect } from "react";
import './Contact.css';
import gsap from "gsap";
import Canny from '../../assets/CannyLandscape.png';
import Landscape from '../../assets/LandscapeRGB.png';
import email from '../../assets/email.png';
import linkedIn from '../../assets/linkedin.png';
import github from '../../assets/git.png';
const Contact = (props) => {
    useEffect(() => {
        let tlContact = gsap.timeline();
        tlContact.to([".h1BuildSomething"], 1, { opacity: 1, delay: 0.5 })
            .to(".canny", 2, { scale: 1.03, opacity: 1, delay: 0.7, ease: "power1.inOut" })
        gsap.to(".returnHomeContact", 1, { opacity: 1, delay: 3 })
        gsap.to(".h1BuildSomething", 1, { marginTop: "5vh", delay: 2.5 })
        gsap.to(".contactButton", 1, { opacity: 1, y: 30, stagger: { each: 0.3 }, delay: 3 })
        gsap.to(".cannyEdgeDesc", 3, { opacity: 2, delay: 5 })
    }, [])
    const showColorLandscape = () => {
        gsap.to([".landscape"], 2, { opacity: 1, ease: "power3.inOut" });
    }
    const returnHomeHandler = () => {
        gsap.to([".Contact"], 0.4, { opacity: "0" }).eventCallback("onComplete", () => {
            props.changePage("HomeReturn")
        })
    }
    return (
        <div className="Contact">
            <div className="cannyHolder">
                <img className="canny" src={Canny} alt="Vision" />
            </div>
            <img className="landscape" src={Landscape} alt="Vision" />
            <div className="contactContainer">
                <h1 className="h1BuildSomething" onClick={showColorLandscape}>Let's Build Something</h1>
                <div>
                    <img className="contactButton b1" src={email} alt="" onClick={() => window.open("mailto:someone@example.com?Subject=Hello%20again", "_blank")} />
                    <img className="contactButton b2" src={github} alt="" onClick={() => window.open("https://github.com/ashan399", "_blank")} />
                    <img className="contactButton b3" src={linkedIn} alt="" onClick={() => window.open("https://www.linkedin.com/in/ashanpandu/", "_blank")} />
                </div>

            </div>
            <p className="cannyEdgeDesc">Canny edge detection performed on an image by applying a guassian  filter, convolving two sobel filters to find edges, and using non-max supression to minimize edge width.</p>
            <h5 className="returnHomeContact" onClick={returnHomeHandler}>Back to Main</h5>
        </div>

    )
}

export default Contact
