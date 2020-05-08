import React from 'react';
import Video from './Video/Video'
import gsap from "gsap";
import './Home.css'
/* <button onClick={() => props.changePage("About")}>Hi There</button> */
const Home = (props) => {
    return (
        <div className="Home">
            <Video />
            {/* <p className="projectWindNew">Project Wind</p> */}
        </div>
    );
}

export default Home;
