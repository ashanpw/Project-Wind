import React, { useEffect } from 'react';
import ReactPlayer from 'react-player'
import wind from '../../../assets/wind.mp4'
import './Video.css'
import windVideo from '../../../assets/wind.mp4'
const Video = () => {
    useEffect(() => {

    }, [])
    return (
        <div style={{ margin: 0 }} >
            <video controls loop muted className="video" >
                <source src={windVideo} type="video/mp4" />
            </video>
        </div>

    )
}

export default Video