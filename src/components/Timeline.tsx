import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Freelance Full-Stack Developer – Rab Di Rasoi</h3>
            <p>
              Designed and developed Rab Di Rasoi, a full-stack bakery website to streamline online orders and showcase products. Built using React, Node.js, Express, and MySQL, featuring secure authentication, dynamic product management, and a seamless user experience."
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">NASA Space Apps Challenge – Participant</h3>
            <h4 className="vertical-timeline-element-title">4th Place (College Level, 60+ Teams)</h4>
            <p>
              We developed a 3D Orrery to visualize planetary orbits and celestial mechanics, securing 4th place among 60+ teams at the college level. My task was to use React Three Fiber and GSAP to create an interactive and visually dynamic 3D orrery with realistic orbital motion and smooth animations, enhancing user engagement and educational value.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;