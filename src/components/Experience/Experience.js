import React from 'react';
import './Experience.css'
import yasuoVideo from '../../assets/yasuo.mp4'
const Experience = (props) => {
    const returnHomeHandler = () => {

    }
    return (
        <div className="Experience">
            <h5 className="backToMain" onClick={returnHomeHandler}>Back to Main</h5>
            <video controls loop muted className="videoYasuo">
                <source src={yasuoVideo} type="video/mp4" />
            </video>
            <div className="experienceFlexContainer">
                <div className="flexRowItem">
                    <div className="flexIndivBox">
                        <h1 style={{ margin: 0 }}>Experience</h1>
                        <p>0x1</p>
                        <svg className="lineUnderProjects">
                            <line x1="0" y1="0" x2="35%" y2="0" />
                        </svg>
                    </div>
                    <div className="flexIndivBox">
                        <p>"Technical skill is mastery of complexity, while creativity is mastery of simplicity" - Christopher Zeeman</p>
                    </div>

                </div>
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