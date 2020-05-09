import React, { useEffect, useRef } from "react";
import './Experience.css'
import gsap from "gsap";
import yasuoVideo from '../../assets/yasuo.mp4'
const Experience = (props) => {
    let videoYasuo = useRef(null)
    const returnHomeHandler = () => {
        gsap.to([".Experience"], 0.4, { opacity: "0" }).eventCallback("onComplete", () => {
            props.changePage("HomeReturn")
        })

    }
    useEffect(() => {
        // Intro
        videoYasuo.removeAttribute("controls");
        videoYasuo.currentTime = 4.8;
        videoYasuo.play()
        gsap.to(".videoYasuo", 1.2, { width: "47.5vw", ease: "power1.inOut", delay: .5 })
        gsap.to([".nameAbout", ".backToMain", ".jobTitleSWE"], 1, { opacity: 1, delay: .5 })
        gsap.to([".windDesc", ".sideText"], 1, { opacity: .7, delay: .5 })
        gsap.to(".bottomLine", 1.5, { width: "10vw", delay: 1 })
    }, [])
    return (
        <div className="Experience">
            <div></div>
            <h5 className="backToMain" onClick={returnHomeHandler}>Back to Main</h5>
            <svg className="bottomLine">
                <line x1="0" y1="0" x2="100%" y2="0" />
            </svg>

            <div className="topDiv">
                <video controls loop muted className="videoYasuo" ref={el => videoYasuo = el} >
                    <source src={yasuoVideo} type="video/mp4" />
                </video>
                <p className="sideText">0x1</p>
                <div className="flexContainerHeader">
                    <div className="flexItem">
                        <h1 className="nameAbout">Experience</h1>
                        <p className="jobTitleSWE">SWE</p>

                    </div>
                    <div className="flexItem">
                        <p className="windDesc">
                            "Technical skill is mastery of complexity, while creativity is mastery of simplicity" - Christopher Zeeman
                        </p>
                    </div>
                </div>
            </div>




            <div className="experienceFlexContainer">
                <div className="flexRowItem">
                    <div className="flexIndivBox">
                        <h2 className="jobTitle">Software Development Engineer Intern</h2>
                        <h3 className="company one">Amazon</h3>
                        <p className="jobDetails">
                            Amazon Web Services <br />
                            May 2020 - Present
                        </p>
                    </div>
                    <div className="flexIndivBox">
                        <ul className="expDescription">
                            <li>Placement in the Amazon Web Services Team. Current details of position still unknown.</li>
                        </ul>
                    </div>
                </div>
                <div className="flexRowItem">
                    <div className="flexIndivBox">
                        <h2 className="jobTitle">Undergraduate Researcher</h2>
                        <h3 className="company one">UMD</h3>
                        <p className="jobDetails">
                            Computer Vision <br />
                            January 2020 - May 2020
                        </p>
                    </div>
                    <div className="flexIndivBox">
                        <ul className="expDescription">
                            <li>Developed a driver drowsiness detection system with 2 other students that uses cameras to understand a user's state.</li>
                            <li>Trained multiple convolutional neural networks to detect blinks, yawns, and the action a driver is performing such as reaching for the radio, texting or calling, and reaching to the back of the vehicle.</li>
                            <li>Once completed, the results will be submitted to multiple computer vision conferences to see if our paper is accepted.</li>
                        </ul>
                    </div>
                </div>
                <div className="flexRowItem">
                    <div className="flexIndivBox">
                        <h2 className="jobTitle">Teaching Assistant</h2>
                        <h3 className="company two">UMD</h3>
                        <p className="jobDetails">
                            Organization of Programming Languages <br />
                            August 2019 - December 2019
                        </p>
                    </div>
                    <div className="flexIndivBox">
                        <ul className="expDescription">
                            <li>Reinforced and complemented concepts presented in lecture with coding examples and detailed analysis of material involving Ruby, OCaml, Rust, and various uses of each.</li>
                            <li>Hosted 4-5 office hours every week to answer students’ questions about assignments, class material, or code.</li>
                            <li>Facilitated the organization of the class by writing exams, ensuring projects are bug-free before they are released, and coordinating with professors on the material to be taught.</li>
                        </ul>
                    </div>
                </div>
                <div className="flexRowItem">
                    <div className="flexIndivBox">
                        <h2 className="jobTitle">Software Engineering Intern</h2>
                        <h3 className="company three">Finra</h3>
                        <p className="jobDetails">
                            CAT Team <br />
                            May 2019 - August 2019
                        </p>
                    </div>
                    <div className="flexIndivBox">
                        <ul className="expDescription">
                            <li>Transformed high-volume stock market event data received by exchanges such as the NYSE and NASDAQ into meaningful information to be used by internal consumers. Utilized Scala, Spark, and SQL to perform ETL on the event data as a csv file.</li>
                            <li>Found a flaw in the implementation of Gatling performance-testing scripts, which tested the retrieval of stock orders from an Amazon EMR cluster. The scripts failed to support different order types, making the tests unrealistic.</li>
                            <li>Rewrote the test suite by parsing randomized JSON objects and creating a custom post-request body for each. Then pipelined these scripts into a Jenkins automation server to be run on production data from an Amazon S3 bucket.</li>
                            <li>Reduced suite code by 33% (~65 lines) by eliminating redundant code and combining similar functions into one.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Experience