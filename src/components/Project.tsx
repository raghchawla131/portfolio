import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import rabdirasoi from '../assets/images/rabdirasoi.png';
import yapspace from '../assets/images/yapspace.png';
import orrery from '../assets/images/orrery.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/raghchawla131/YapSpace" target="_blank" rel="noreferrer"><img src={yapspace} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/raghchawla131/YapSpace" target="_blank" rel="noreferrer"><h2>Yap Space</h2></a>
                <p>Built a dynamic social media platform using React (TSX), Express, and SQL, enabling users to share posts, engage in discussions, and connect seamlessly.</p>
            </div>
            <div className="project">
                <a href="https://github.com/raghchawla131/rabdirasoi" target="_blank" rel="noreferrer"><img src={rabdirasoi} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/raghchawla131/rabdirasoi" target="_blank" rel="noreferrer"><h2>Rab Di Rasoi</h2></a>
                <p>Designed and developed a bakery website for a client using React, Express, and SQL, providing an intuitive platform for browsing and managing orders.</p>
            </div>
            <div className="project">
                <a href="https://orrery.neerajx0.xyz/" target="_blank" rel="noreferrer"><img src={orrery} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://orrery.neerajx0.xyz/" target="_blank" rel="noreferrer"><h2>Orrery</h2></a>
                <p>Built an interactive 3D solar system simulation using React Three Fiber, OpenAI, GSAP, and Tailwind, enabling immersive exploration of celestial bodies.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;