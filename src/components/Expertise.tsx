import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'; // Import faNodeJs
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const frontend = [
    "HTML",
    "CSS",
    "React.js",
    "JavaScript",
    "TypeScript",
    "Bootstrap",
    "Tailwind CSS"
];

const backend = [
    "Node.js",
    "Express.js",
    "JWT",
    "MySQL"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Frontend Developer</h3>
                    <p>I have built a diverse array of user-friendly web applications from scratch, specializing in creating responsive and interactive interfaces. With a strong proficiency in frontend development, I focus on delivering seamless and engaging user experiences.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {frontend.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faNodeJs} size="3x"/> {/* Changed faDocker to faNodeJs */}
                    <h3>Backend Developer</h3>
                    <p>I have developed robust and scalable server-side solutions for a variety of web applications. With expertise in backend development, I ensure efficient functionality, security, and performance for every project.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {backend.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;
