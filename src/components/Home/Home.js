import React, { useRef, useEffect } from 'react';
import Video from './Video/Video'
import gsap from "gsap";
import './Home.css'
import windVideo from '../../assets/wind.mp4'
/* <button onClick={() => props.changePage("About")}>Hi There</button> */
const Home = (props) => {
    let app,
        wind,
        rect,
        video,
        rect1,
        rect2,
        rect3,
        rect4,
        rect5,
        rect6,
        rect7,
        rect8,
        rect9,
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
        contact;
    app = wind = rect = video = rect1 = rect2 = rect3 = rect4 = rect5 = rect6 = rect7 = rect8 = rect9 = loaded = projectWind = titleBlock = line = numberNextToCenterLine = centerName = rightNumbers = about = projects = experience = numberNextToCenterLine = contact = useRef(
        null
    );
    let playVideo = function () {
        console.log("HEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");

        video.currentTime = 25.6;
        console.log(video.currentTime);
        video.play();
    };
    let invertColor = function () {
        video.currentTime = 19.7;
        video.style.filter = "invert(.8) contrast(140%) hue-rotate(40deg)";
    };

    useEffect(() => {
        gsap.to(app, 0, { css: { visibility: "visible" } });
        let tl = gsap.timeline();
        tl.from(wind, 2.5, { opacity: 0, ease: "power4.inOut" });
        let i;
        for (i = 1; i <= 9; i++) {
            let tl_loading1 = gsap.timeline();
            tl_loading1.to(eval("rect" + i), 1.5, {
                width: "100%",
                ease: "power3.inOut",
                delay: 2 + i / 5 + 0.2,
            });
            if (i == 9) {
                tl_loading1.to(
                    [rect1, rect2, rect3, rect4, rect5, rect6, rect7, rect8, rect9],
                    1.4,
                    { x: "200%", ease: "power4.inOut", delay: 0.18 }
                );
            }
        }
        video.removeAttribute("controls");
        gsap.to(loaded, 0.5, { opacity: 1, delay: 4 });
        gsap.to([wind, loaded], 0.1, { opacity: "0", delay: 6.2 });
        let tl_play_vid = gsap.timeline();
        tl_play_vid
            .to(projectWind, 0.5, { opacity: "1", delay: 6.2 })
            .to(projectWind, 1, { opacity: 1, delay: 0.4 })
            .call(playVideo)
            .to(projectWind, 1, {
                x: "50",
                opacity: 0,
                ease: "power1.inOut",
                delay: 3.8,
            });

        let tl_fadeout_resize = gsap
            .timeline()
            .to(video, 3, { opacity: "0", delay: 13.1 })
            .to(video, 0, {
                width: "100vw",
                height: "100vh",
                ease: "circ.out",
            })
            .call(invertColor)
            .to(video, 4, {
                opacity: 0.4,
                ease: "circ.out",
            });

        gsap.from(".titleBlock", 1, { opacity: 0, x: "-300px", delay: 14 });
        gsap.from(line, 1, { attr: { x2: "0%" }, delay: 14.4 });

        gsap.from(numberNextToCenterLine, 1, {
            x: "-100px",
            opacity: 0,
            delay: 14.3,
        });
        gsap.from([centerName, rightNumbers], 1, {
            x: "-100px",
            opacity: 0,
            delay: 15,
        });
        gsap.from([about, projects, experience, contact], 1, {
            x: "-100px",
            opacity: 0,
            delay: 15.3,
        });
    }, []);
    return (
        <div className="Home" ref={(el) => (app = el)}>
            <div className="screen">
                <video controls loop muted className="video" ref={(el) => (video = el)}>
                    <source src={windVideo} type="video/mp4" />
                </video>
            </div>
            <div className="loadingScreen">
                <div className="box">
                    <div className="item-1">
                        <img
                            src="wind.png"
                            ref={(el) => (wind = el)}
                            className="wind"
                            alt="Project Wind"
                        />
                    </div>

                    <svg width="100%" height="100%">
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
            </div>
            <p className="projectWind" ref={(el) => (projectWind = el)}>
                Project Wind
      </p>
            <div>
                <h1 className="title">
                    <div className="titleBlock">W</div>
                    <div className="titleBlock">i</div>
                    <div className="titleBlock">n</div>
                    <div className="titleBlock">d</div>
                </h1>
            </div>
            <div className="buttons">
                <h4 className="about" ref={(el) => (about = el)}>
                    About
        </h4>
                <h4 className="projects" ref={(el) => (projects = el)}>
                    Projects
        </h4>
                <h4 className="experience" ref={(el) => (experience = el)}>
                    Experience
        </h4>
                <h4 className="contact" ref={(el) => (contact = el)}>
                    Contact
        </h4>
            </div>
            <h1 className="centerName" ref={(el) => (centerName = el)}>
                Software Engineer <br />
        2020
      </h1>
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
            <h2
                className="numberNextToCenterLine"
                ref={(el) => (numberNextToCenterLine = el)}
            >
                01
      </h2>
        </div>
    );
}

export default Home;
