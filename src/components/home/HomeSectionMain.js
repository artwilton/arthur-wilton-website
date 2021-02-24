import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import video from '../../../src/assets/home/home_screen_video_main.mp4'
import preview from '../../../src/assets/home/home_screen_video_main.jpg'

function HomeSectionMain(props) {
    return (
        <section id='Section-01'>


            <video id="homeScreenVideo" poster={preview} autoPlay muted loop>
                <source src={video} type="video/mp4"/>
            </video>
            
            <Container fluid="md" className="text-center align-items-center align-middle">
                <h1 className="align-self-center">HomeSectionMain</h1>
                <div className="videoOverlay"></div>
            </Container>
            
        </section>
    );
}

export default HomeSectionMain;