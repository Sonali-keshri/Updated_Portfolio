import React from "react";
import "./experience.css";
import html from "../../assests/skills/html.jpg"
import css from "../../assests/skills/css.png"
import js from "../../assests/skills/javascript.png"
import java from "../../assests/skills/java.png"
import react from "../../assests/skills/react.png"
import redux from "../../assests/skills/redux.svg"
import node from "../../assests/skills/node.png"
import express from "../../assests/skills/express.png"
import mongo from "../../assests/skills/mongo.png"
import git from "../../assests/skills/git.png"
import bootstrap from "../../assests/skills/bootstrap.png"
import tailwind from "../../assests/skills/tailwind.png"
import { BsFillPatchCheckFill } from "react-icons/bs";

import certificate1 from "../../assests/certificates/reacttjs.png"
import certificate2 from "../../assests/certificates/javascript.png"
import certificate3 from "../../assests/certificates/advReact.png"
import certificate4 from "../../assests/certificates/redux.png"
import certificate5 from "../../assests/certificates/intro.png"



const Experience = () => {
  const skills = [
    { id: 1, src: html, alt: "HTML" },
    { id: 2, src: css, alt: "CSS" },
    { id: 3, src: js, alt: "Javascript" },
    { id: 4, src: react, alt: "ReactJS" },
    { id: 5, src: redux, alt: "Redux-Toolkit" },
    { id: 6, src: bootstrap, alt: "Bootstrap" },
    { id: 7, src: tailwind, alt: "Tailwind CSS" },
    { id: 8, src: node, alt: "NodeJS" },
    { id: 9, src: express, alt: "ExpressJS" },
    { id: 10, src: mongo, alt: "Mongo DB" },
    { id: 11, src: java, alt: "Java" },
    { id: 12, src: git, alt: "Git" },
  ];

  const certificates = [
    {
      id: 1,
      course: "Introduction to Frontend development",
      date: "Nov 2022",
      company: "certified-Meta",
      link: "https://coursera.org/share/4893003ee1230b2b1c33e14e59ca70d0",
      img: certificate5,
    },
    {
      id: 2,
      course: "Programming With JavaScript",
      date: "Dec 2022",
      company: "certified-Meta",
      link: "https://coursera.org/share/f8cb5974282d30c8733bb186ca3f165b",
      img: certificate2,
    },
    {
      id: 3,
      course: "Advanced React",
      date: "Jan 2023",
      company: "certified-Meta",
      link: "https://coursera.org/share/efa592cd8efcabea5c9ad2c99c31b432",
      img: certificate3,
    },
    {
      id: 4,
      course: "ReactJs Essentials",
      date: "Jul 2023",
      company: "certified-Linkedin Learn",
      link: "https://www.linkedin.com/learning/certificates/e657da436df9815d37d2dde1c1ce14f9176363e4ac913ab3326c5f4ef301b14b",
      img: certificate1,
    },
    {
      id: 5,
      course: "Redux Toolkit",
      date: "Apr 2023",
      company: "certified-Linkedin Learn",
      link: "https://www.linkedin.com/learning/certificates/02c6ca11de0ed4daa01b41b04cd8eb7ac0c497959f34fb5333759bfe4a50f150",
      img: certificate4,
    },
  ];

  const experiences = [
    {
      id: 1,
      role: "Full Stack Engineer Intern",
      company: "Campus Technology, Bangalore",
      duration: "Jul 2024 - Present",
     
    },
    {
      id: 2,
      role: "Software Development Intern",
      company: "Amardeep Educational Foundation, Remote",
      duration: "Aug 2023 - Feb 2024 (6 months)",
   
    },
  ];

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>Skills | Certification | Experience</h2>
      <div className="experience-cards">
        <div className="skills-card">
          {skills.map((skill) => (
            <div className="skill-div" key={skill.id}>
              <img src={skill.src} alt={skill.alt} className="skill-logo" />
              <p>{skill.alt}</p>
            </div>
          ))}
        </div>
        <div className="certification">
          <h3 className="text-light">Certificates</h3>
          <div className="certificate_content">
            {certificates.map((certificate) => (
              <article className="certificate" key={certificate.id}>
                <BsFillPatchCheckFill className="certificate-icons" />
                <div>
                  <a href={certificate.link} target="__blank">
                    {certificate.course}
                  </a>
                  <p className="text-light">
                    {certificate.date} <br />
                    {certificate.company}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience">
          <h3 className="text-light">Experience</h3>
          <div className="experience_content">
            {experiences.map((experience) => (
              <div className="experience-card" key={experience.id}>
                <h4>{experience.role}</h4>
                <p>{experience.company}</p>
                <p>{experience.duration}</p>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

