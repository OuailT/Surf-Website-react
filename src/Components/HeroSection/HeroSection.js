import React from 'react'
import { Button } from '../Button/Button'
import '../HeroSection/HeroSection.css'
import '../../App.css'

const HeroSection = () => {
    return (
        <div className="hero-container">
            <video src="../Video/video-1.mp4" muted loop autoPlay ></video>
            <h1>WSL Champions</h1>
            <p>What's is Really Next</p>
            <div className="hero-btns">

                <Button className="btns"
                        checkSize="btn--large"
                        checkStyle="btn--primary"
                        type="button">
                    GET STARTED
                </Button>

                <Button className="btns"
                        checkSize="btn--large"
                        checkStyle="btn--outline"
                        type="button">
                    READ MORE</Button>
            </div>

        </div>
    )
}

export default HeroSection
