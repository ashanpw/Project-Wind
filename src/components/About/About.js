import React from 'react';
import './About.css';
import face from '../../assets/face.jpg';
import codeIcon from '../../assets/code.png';
import pointerIcon from '../../assets/pointer.png';
import neuralnetIcon from '../../assets/neuralnet.png';
import cloudIcon from '../../assets/cloud.png';
import gorillaImage from '../../assets/gorilla.jpg';

const About = (props) => {
    return (
        <div className="About">
            <h5 className="backToMain" style={{ color: "white" }}>Back to Main</h5>
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
                    <div className="skillsFlexContainer">
                        <div>
                            <img src={pointerIcon} className="skillIcons" />
                            <p> React</p>
                            <p>Node.js</p>
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