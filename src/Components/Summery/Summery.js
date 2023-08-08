import React from "react";
import "./Summery.css";
import Cv from "../../assets/cv/CV-Justus-Onuh.pdf";


const Summery = ()=>{
    return(
        <section id="summery" data-aos="fade-right">
            <div className="summery-heading">
                <strong>My Skills</strong>
                <h2>HTML/CSS</h2>
                <h2>JavaScript</h2>
                <h2>Responsive Design</h2>
                <h2>Version Control/Git</h2>
                <h2>Web Performance Optimization</h2>
                {/* <h2>Cross-Browser Compatibility</h2>
                <h2>Testing and Debugging</h2>
                <h2>SEO Basics</h2>
                <h2>Communication</h2>
                <h2>Collaboration</h2> */}
                <a href={Cv} download className="btn-link"> Get CV <i className="fa-solid fa-download"></i></a>

            </div>
            <div className="summery-details" data-aos="fade-left">
                <p>Proficiency in creating structured, semantic HTML and styling it using CSS for responsive and visually appealing layouts.</p>
                <p>Strong understanding of JavaScript and its libraries/frameworks (e.g., React.js, Vue.js) to create dynamic and interactive user interfaces.</p>
                <p>Ability to design and develop websites and applications that function smoothly across various devices and screen sizes.</p>
                <p>Skill in creating intuitive and visually appealing user interfaces, considering user experience and usability principles.</p>
                {/* <p>Familiarity with version control systems like Git to collaborate effectively with other team members and manage codebase.</p>
                <p>Knowledge of techniques to optimize website speed and performance, including minification, lazy loading, and caching.</p>
                <p>Strong communication skills and ability to work collaboratively with designers, developers, and other stakeholders.</p>
                <p>Proficiency in testing, identifying, and fixing bugs and issues to ensure a seamless user experience.</p>
                <p>Understanding of basic SEO principles and techniques to optimize web content for search engines.</p>
                <p>Keeping up with industry trends, new tools, and technologies to continuously improve skills and stay relevant.</p>
                <p>Clearly articulating design and development concepts and decisions to team members and clients.</p> */}
            </div>

        </section>

    )
}
export default Summery;