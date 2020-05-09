import React, { useRef, useEffect } from 'react';
import Video from './Video/Video'
import gsap from "gsap";
import './Home.css'
import windVideo from '../../assets/wind.mp4'
import windIcon from '../../assets/wind.png'
/* <button onClick={() => props.changePage("About")}>Hi There</button> */
const Home = (props) => {
    let app,
        wind,
        video,
        loaded,
        projectWind,
        numberNextToCenterLine,
        titleBlock,
        line,
        centerName,
        rightNumbers,
        about,
        projects,
        experience,
        titleWind,
        contact,
        overlayBlackMask;
    app = wind = video = loaded = projectWind = titleBlock = titleWind = line = numberNextToCenterLine = centerName = rightNumbers = about = projects = experience = numberNextToCenterLine = contact = overlayBlackMask = useRef(
        null
    );
    let playVideo = function () {
        video.currentTime = 25.6;
        video.play();
    };
    let playVideoReturning = function () {
        video.currentTime = 19;
        video.play();
    };
    useEffect(() => {
        overlayBlackMask.style.opacity = "0";
        overlayBlackMask.style.display = "none";
        video.removeAttribute("controls");
        if (props.isReturning == true) {
            let tl_play_vid = gsap.timeline();
            tl_play_vid
                .to(".Home", 0, { backgroundColor: "black", delay: 0.6 })
                .call(playVideoReturning)
            projectWind.style.opacity = "0";
            gsap.from(".titleBlock", 1, { opacity: 0, x: "-300px", delay: 1.6 });
            gsap.from(line, 1, { attr: { x2: "0%" }, delay: 2 });

            gsap.from(numberNextToCenterLine, 1, {
                x: "-100px",
                opacity: 0,
                delay: 1.9,
            });
            gsap.from([centerName, rightNumbers], 1, {
                x: "-100px",
                opacity: 0,
                delay: 2.6,
            });
            gsap.from([about, projects, experience, contact], 1, {
                x: "-100px",
                opacity: 0,
                delay: 2.8,
            });
        } else {
            let tl_play_vid = gsap.timeline();
            tl_play_vid
                .to(".Home", 0, { backgroundColor: "black", delay: 0.5 })
                .call(playVideo)
                .to(projectWind, 1, {
                    x: "50",
                    opacity: 0,
                    ease: "power1.inOut",
                    delay: 3.9,
                });

            gsap.from(".titleBlock", 1, { opacity: 0, x: "-300px", delay: 6.4 });
            gsap.from(line, 1, { attr: { x2: "0%" }, delay: 6.8 });

            gsap.from(numberNextToCenterLine, 1, {
                x: "-100px",
                opacity: 0,
                delay: 6.7,
            });
            gsap.from([centerName, rightNumbers], 1, {
                x: "-100px",
                opacity: 0,
                delay: 7.4,
            });
            gsap.from([about, projects, experience, contact], 1, {
                x: "-100px",
                opacity: 0,
                delay: 7.7,
            });
        }

    }, []);


    const changePageHandler = (pageName) => {
        overlayBlackMask.style.display = "";
        gsap.to(overlayBlackMask, .5, { opacity: 1 })
            .eventCallback("onComplete", () => props.changePage(pageName))

    }

    return (
        <div className="Home" ref={(el) => (app = el)}>
            <div className="screen">
                <video controls loop muted className="video" ref={(el) => (video = el)}>
                    <source src={windVideo} type="video/mp4" />
                </video>
            </div>
            <div>
                <h1 className="title" ref={el => titleWind = el}>
                    <div className="titleBlock">W</div>
                    <div className="titleBlock">i</div>
                    <div className="titleBlock">n</div>
                    <div className="titleBlock">d</div>
                </h1>
            </div>
            <div className="buttons">
                <h4 className="about" ref={(el) => (about = el)} onClick={() => changePageHandler("About")}>
                    About
                </h4>
                <h4 className="projects" ref={(el) => (projects = el)} onClick={() => changePageHandler("Projects")}>
                    Projects
                </h4>
                <h4 className="experience" ref={(el) => (experience = el)} onClick={() => changePageHandler("Experience")}>
                    Experience
                </h4>
                <h4 className="contact" ref={(el) => (contact = el)}>
                    Contact
                </h4>
            </div>
            <h4 className="centerName" ref={(el) => (centerName = el)}>
                SWE <br />
                2020
            </h4>
            <h1 className="rightNumbers" ref={(el) => (rightNumbers = el)}>
                1 &mdash; 5
            </h1>
            <svg className="centerLine">
                <line
                    x1="0"
                    y1="0"
                    x2="100%"
                    y2="0"
                    className="line"
                    ref={(el) => (line = el)}
                />
            </svg>
            <h2 className="numberNextToCenterLine" ref={(el) => (numberNextToCenterLine = el)}>
                01
            </h2>
            <div className="overlayBlackMask" ref={el => overlayBlackMask = el}></div>
            <p className="projectWindNew" ref={(el) => (projectWind = el)}>
                {props.isReturning ? "" : "Project Wind"}
            </p>
        </div>
    );
}

export default Home;
