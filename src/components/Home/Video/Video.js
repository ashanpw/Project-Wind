import React, { useEffect } from 'react';
import ReactPlayer from 'react-player'
import wind from '../../../assets/wind.mp4'
import './Video.css'
const Video = () => {
    useEffect(() => {

    }, [])
    return (
        <div >
            <video controls loop muted>
                <source src={wind} type="video/mp4" style={{
                    position: "absolute",
                    width: "100vw",
                    height: "90vh",

                    objectFit: "cover",
                }} />
            </video>
        </div>

    )
}

export default Video