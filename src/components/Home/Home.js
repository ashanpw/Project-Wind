import React, { useRef, useEffect } from 'react';
import gsap from "gsap";
import './Home.css';
import windVideoWeb from '../../assets/wind.webm';
import windVideoMp4 from '../../assets/wind.mp4';
/* <button onClick={() => props.changePage("About")}>Hi There</button> */
const Home = (props) => {
    let video,
        projectWind,
        numberNextToCenterLine,
        line,
        centerName,
        rightNumbers,
        about,
        projects,
        experience,
        contact,
        overlayBlackMask;
    video = projectWind = line = numberNextToCenterLine = centerName = rightNumbers = about = projects = experience = numberNextToCenterLine = contact = overlayBlackMask = useRef(
        null
    );
    let playVideo = function () {
        video.play();
    };
    let playVideoReturning = function () {
        let randVid = Math.floor(Math.random() * Math.floor(5));
        video.currentTime = randVid < 2 ? 0 : 29.3;
        video.play();
    };
    useEffect(() => {
        overlayBlackMask.style.opacity = "0";
        overlayBlackMask.style.display = "none";
        video.removeAttribute("controls");
        if (props.isReturning === true) {
            let tl_play_vid = gsap.timeline();
            tl_play_vid
                .to(".Home", 0, { backgroundColor: "black" })
                .call(playVideoReturning)
            projectWind.style.opacity = "0";
            gsap.from(".titleBlock", 1.5, { opacity: 0, x: "-300px", delay: 1.4 });
            gsap.from(line, 1, { attr: { x2: "0%" }, delay: 1.8 });

            gsap.from(numberNextToCenterLine, 1, {
                x: "-100px",
                opacity: 0,
                delay: 1.7,
            });
            gsap.from([centerName, rightNumbers], 1, {
                x: "-100px",
                opacity: 0,
                delay: 2.4,
            });
            gsap.from([about, projects, experience, contact], 1, {
                x: "-100px",
                opacity: 0,
                delay: 1.6,
            });
        } else {
            let tl_play_vid = gsap.timeline();
            tl_play_vid
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
        gsap.to(overlayBlackMask, .4, { opacity: 1 })
            .eventCallback("onComplete", () => props.changePage(pageName))

    }
    return (
        <div className="Home">
            <div className="screen">
                <video controls loop muted className="video" ref={(el) => (video = el)}>
                    <source src={windVideoWeb} type="video/webm" />
                    <source src={windVideoMp4} type="video/mp4" />
                </video>
            </div>
            <div>
                <h1 className="title">
                    <div className="titleBlock">W</div>
                    <div className="titleBlock">i</div>
                    <div className="titleBlock">n</div>
                    <div className="titleBlock">d</div>
                </h1>
            </div>

            <h4 className="about" ref={(el) => (about = el)} onClick={() => changePageHandler("About")}>About</h4>
            <h4 className="projects" ref={(el) => (projects = el)} onClick={() => changePageHandler("Projects")}>Projects</h4>
            <h4 className="experience" ref={(el) => (experience = el)} onClick={() => changePageHandler("Experience")}>Experience</h4>
            <h4 className="contact" ref={(el) => (contact = el)} onClick={() => changePageHandler("Contact")} >Contact</h4>
            <h4 className="centerName" ref={(el) => (centerName = el)} onClick={() => window.open("https://mylittlepony.hasbro.com/en-us", "_blank")}>
                SWE <br /> 2020
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
