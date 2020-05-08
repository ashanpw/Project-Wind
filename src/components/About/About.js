import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import './About.css';
import face from '../../assets/face.jpg';
import codeIcon from '../../assets/code.png';
import pointerIcon from '../../assets/pointer.png';
import neuralnetIcon from '../../assets/neuralnet.png';
import cloudIcon from '../../assets/cloud.png';
import gorillaImage from '../../assets/gorilla.jpg';

const About = (props) => {
    useEffect(() => {
        // Intro
        gsap.from(".centerImage", 1.2, { width: 0, ease: "power1.inOut" })
        gsap.from([".nameAbout", ".windDesc", ".sideText", ".backToMain", ".jobTitleSWE"], 1, { opacity: 0 })
        gsap.from(".bottomLine", 1.5, { width: "0vw", delay: 0.5 })
        // Second part
        gsap.to([".flexContainerBody"], 1.7, { y: "-100vh", delay: 2.8, ease: "power1.inOut" })
        gsap.to(".bottomLine", 1, { opacity: 0, delay: 3 })
        gsap.to(".centerLine", 1, { opacity: 0, delay: 3.5 })

        gsap.to([".nameAbout", ".jobTitleSWE", ".windDesc"], 1.7, {
            color: "black",
            y: "-62.5vh",
            delay: 2.8,
            ease: "power1.inOut",
        });
        gsap.to(".About", 1.5, { backgroundColor: "rgb(238, 238, 238)", delay: 3.5 })
        gsap.to([".skillsFlexContainer", ".descUnderPfp"], 1, { color: "black", delay: 4, ease: "power1.in" })
        gsap.to(".backToMain", 1, { color: "black", delay: 4 })
        gsap.to([".flexContainerBody", ".rightColumnText"], 1, { color: "black", delay: 4.2, ease: "power1.in" })
        gsap.to(".skillIcons", 1, { opacity: 1, delay: 4, ease: "power1.in" })
        gsap.to(".windDesc", 1, { opacity: .8, delay: 3.2, ease: "power1.in" })

    }, [])

    const returnHomeHandler = () => {
        gsap.to([".About", ".flexContainerBody"], 1, { backgroundColor: "black" })
        gsap.to(["img", ".sideText"], 1, { opacity: "0" })
        props.changePage("Home")
    }
    return (
        <div className="About">
            <h5 className="backToMain" onClick={returnHomeHandler}>Back to Main</h5>
            <svg className="bottomLine">
                <line x1="0" y1="0" x2="100%" y2="0" />
            </svg>
            {/* Full screen div -> */}
            <div className="topDiv">
                <img src={gorillaImage} className="centerImage" />
                <p className="sideText">0x1</p>
                <div className="flexContainerHeader">
                    <div className="flexItem">
                        <h1 className="nameAbout">Ashan</h1>
                        <p className="jobTitleSWE">SWE</p>

                    </div>
                    <div className="flexItem">
                        <p className="windDesc">
                            Wind is something that believes in dancing on every leaf and filling
                            every pore of your skin with its intangible presence.
                    </p>
                    </div>
                </div>
            </div>

            {/* SECOND SCREEN */}

            <div className="flexContainerBody">
                <div className="flexItemLeft">
                    <img src={face} className="face" />
                    <p className="descUnderPfp">
                        Humans have enabled computers to see and understand our world. However, this is just the beginning.
                        I aim to advance what we can see through computers and machine learning to bring forth a dominant and better future.
                    </p>
                    <p className="skillsTitle">Skills</p>
                    <div className="skillsFlexContainer">
                        <div>
                            <img src={pointerIcon} className="skillIcons" />
                            <p> ReactJS</p>
                            <p>NodeJS</p>
                            <p>Flask</p>
                        </div>
                        <div>
                            <img src={neuralnetIcon} className="skillIcons" />
                            <p>Tensorflow</p>
                            <p>Pytorch</p>
                            <p>OpenCV</p>
                        </div>
                        <div>
                            <img src={cloudIcon} className="skillIcons" />
                            <p>Firebase</p>
                            <p>Firestore</p>
                            <p>AWS</p>
                        </div>
                        <div>
                            <img src={codeIcon} className="skillIcons" />
                            <p>Android</p>
                            <p>NumPy</p>
                            <p>Git</p>
                        </div>
                    </div>
                </div>
                <div className="flexItemRight">

                    <br />
                    <p className="rightColumnText">
                        My name is Ashan Panduwawala and I am a senior pursuing Computer Science at the University of Maryland, College Park.
                        With a vast array of skills in Web Development, Cloud, Machine Learning, Computer Vision, and Software Engineering, I am prepared to tackle
                        any situation brought before me. Please take a look at my projects and experience to see how I have applied my knowledge in these areas.
                    </p>
                    <br />
                    <p>Thanks for visiting and I hope you will <u>see</u> what I have to offer (sorry that was a bad joke). Have a nice day!</p>
                    <br />
                    <p className="rightColumnTextResumeInfo">University of Maryland, College Park</p>
                    <p className="rightColumnTextResumeInfo">Intended Graduation: December 2020</p>
                    <p className="rightColumnTextResumeInfo">B.S. Computer Science</p>
                    <p className="rightColumnTextResumeInfo">Overall GPA: 3.55</p>
                    <p className="rightColumnTextResumeInfo">Relevant Coursework: Machine Learning, Computer Vision, Data Science, Linear Algebra, Algorithms, Discrete Mathematics</p>


                </div>
            </div>
        </div>
    );
}

export default About;