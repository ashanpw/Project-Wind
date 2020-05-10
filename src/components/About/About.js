import React, { useEffect } from "react";
import gsap from "gsap";
import "./About.css";
import face from "../../assets/face.png";
import codeIcon from "../../assets/code.png";
import pointerIcon from "../../assets/pointer.png";
import neuralnetIcon from "../../assets/neuralnet.png";
import cloudIcon from "../../assets/cloud.png";
import pcSetupImage from "../../assets/pcSetup.jpg";

const About = (props) => {
    useEffect(() => {
        // Intro
        gsap.to(".centerImage", 1.2, {
            width: "47.5vw",
            ease: "power1.inOut",
            delay: 0.5,
        });
        gsap.to([".nameAbout", ".backToMain", ".jobTitleSWE"], 1, {
            opacity: 1,
            delay: 0.5,
        });
        gsap.to([".windDesc", ".sideText"], 1, { opacity: 0.7, delay: 0.5 });
        gsap.to(".bottomLine", 1.5, { width: "10vw", delay: 1 });

        // Second part
        gsap.to([".flexContainerBody"], 1.7, {
            y: "-100vh",
            delay: 2.8,
            ease: "power1.inOut",
        });
        gsap.to(".bottomLine", 1, { opacity: 0, delay: 3.1 });
        gsap.to(".centerLine", 1, { opacity: 0, delay: 3.6 });

        gsap.to([".nameAbout", ".jobTitleSWE", ".windDesc"], 1.7, {
            color: "black",
            y: "-62.5vh",
            delay: 2.9,
            ease: "power1.inOut",
        });
        gsap.to(".About", 1.5, {
            backgroundColor: "rgb(20, 20, 20)",
            delay: 3.4,
        });
        gsap.to([".skillsFlexContainer", ".descUnderPfp"], 1, {
            color: "black",
            delay: 4.1,
            ease: "power1.in",
        });
        gsap.to(".backToMain", 1, { color: "black", delay: 4.3 });
        gsap.to([".flexContainerBody", ".rightColumnText"], 1, {
            color: "black",
            delay: 4.4,
            ease: "power1.in",
        });
        gsap.to(".skillIcons", 1, {
            opacity: 1,
            delay: 4.1,
            ease: "power1.in",
        });
        gsap.to(".face", 1, { opacity: 1, delay: 3.1, ease: "power1.in" });
        gsap.to(".windDesc", 1, {
            opacity: 0.85,
            delay: 3.3,
            ease: "power1.in",
        });
    }, []);

    const returnHomeHandler = () => {
        gsap.to([".About"], 0.4, { opacity: 0 }).eventCallback(
            "onComplete",
            () => {
                props.changePage("HomeReturn");
            }
        );
    };
    return (
        <div className="About">
            <h5 className="backToMain" onClick={returnHomeHandler}>
                Back to Main
            </h5>
            <svg className="bottomLine">
                <line x1="0" y1="0" x2="100%" y2="0" />
            </svg>
            {/* Full screen div -> */}
            <div className="topDiv">
                <img src={pcSetupImage} className="centerImage" alt="" />
                <p className="sideText">0x1</p>
                <div className="flexContainerHeader">
                    <div className="flexItem">
                        <h1 className="nameAbout">Ashan</h1>
                        <p className="jobTitleSWE">SWE</p>
                    </div>
                    <div className="flexItem">
                        <p className="windDesc">
                            Wind is something that believes in dancing on every
                            leaf and filling every pore of your skin with its
                            intangible presence.
                        </p>
                    </div>
                </div>
            </div>

            {/* SECOND SCREEN */}

            <div className="flexContainerBody">
                <div className="flexItemLeft">
                    <img src={face} className="face" alt="" />
                    <h2 className="vision">Vision</h2>
                    <p className="descUnderPfp">
                        Humans have enabled computers to see and understand our
                        world. However, this field is still at its beginning. I
                        aim to advance what we can see through computers and
                        machine learning to bring forth a dominant and better
                        future.
                    </p>
                    <h3 className="hTags skillsTitle">Skills</h3>
                    <div className="skillsFlexContainer">
                        <div>
                            <img
                                src={pointerIcon}
                                className="skillIcons"
                                alt=""
                            />
                            <p> ReactJS</p>
                            <p>NodeJS</p>
                            <p>Flask</p>
                        </div>
                        <div>
                            <img
                                src={neuralnetIcon}
                                className="skillIcons"
                                alt=""
                            />
                            <p>Tensorflow</p>
                            <p>Pytorch</p>
                            <p>OpenCV</p>
                        </div>
                        <div>
                            <img
                                src={cloudIcon}
                                className="skillIcons"
                                alt=""
                            />
                            <p>Firebase</p>
                            <p>Firestore</p>
                            <p>AWS</p>
                        </div>
                        <div>
                            <img src={codeIcon} className="skillIcons" alt="" />
                            <p>Android</p>
                            <p>NumPy</p>
                            <p>Git</p>
                        </div>
                    </div>
                </div>
                <div className="flexItemRight">
                    <h2 className="hTags">About Me</h2>
                    <p className="rightColumnText">
                        I'm Ashan Panduwawala, currently a senior pursuing
                        Computer Science at the University of Maryland, College
                        Park. With expertise in Web Development, Cloud
                        Computing, Machine Learning, Computer Vision, and
                        Software Engineering, I'm well-prepared to tackle
                        various challenges. Feel free to explore my projects and
                        experiences to see how I've applied my skills in these
                        areas.
                    </p>

                    <h2 className="hTagsPadded">Programming Languages:</h2>
                    <p className="rightColumnTextResumeInfo">
                        Advanced in: Java, Python, JavaScript, HTML/CSS
                    </p>
                    <p className="rightColumnTextResumeInfo">
                        Proficient in: Ruby, OCaml, C, Matlab
                    </p>
                    <br />
                    <h2 className="hTagsPadded">Academics</h2>
                    <ul>
                        <li className="rightColumnTextResumeInfo">
                            University of Maryland, College Park
                        </li>
                        <li className="rightColumnTextResumeInfo">
                            Intended Graduation: December 2020
                        </li>
                        <li className="rightColumnTextResumeInfo">
                            B.S. Computer Science
                        </li>
                        <li className="rightColumnTextResumeInfo">
                            Overall GPA: 3.63
                        </li>
                        <li className="rightColumnTextResumeInfo">
                            Relevant Coursework: Data Structures, Machine
                            Learning, Computer Vision, Data Science, Linear
                            Algebra, Algorithms, Discrete Mathematics
                        </li>
                    </ul>
                    <h2 className="hTagsPadded">Extracurricular</h2>
                    <ul>
                        <li className="rightColumnTextResumeInfo">
                            Vice President of Association for Computing
                            Machinery (ACM)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
