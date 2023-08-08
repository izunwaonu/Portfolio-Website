import React from "react";
import "./Home.css";
import Izunwaonu from "../../assets/images/izunwaonu.jpg";


const Home = ()=> {
    return(
       <section id="home">
        <div className="home-text" data-aos="fade-down">
            <strong>Hello, I'm</strong>
            <h1>Justus Izuchukwu Onuh</h1>
            <p> I am a seasoned Front-End Developer and UI/UX Designer with over five years of experience, 
                dedicated to crafting seamless and visually captivating digital experiences. 
                Proficient in HTML, CSS, JavaScript, React.js, etc. 
                I excel in transforming innovative design concepts into interactive and 
                user-friendly interfaces. My deep understanding of user-centered design 
                principles and my ability to bridge the gap between aesthetics and functionality 
                have consistently resulted in engaging and intuitive web applications. 
                With a proven track record of collaborating effectively with multidisciplinary 
                teams and a constant drive to refine my skills, I am committed to delivering impactful 
                and responsive solutions that elevate user engagement and satisfaction.
            </p>
            <a href="#summery" className="btn-link">Scroll Down</a>

        </div>
        <div className="home-img" data-aos="fade-up">
            <div className="img-box">
                <img src={Izunwaonu} alt="Izunwaonu"/>
                <h2>Justus Izuchukwu Onuh <br/> <span>IZUNWAONU</span> <br/><span> Front End Developer </span></h2>
                <div className="social">
                    <a href="https://www.facebook.com/izunwonu">
                    <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/onuh-justus-izuchukwu-9340a121b/">
                    <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/izunwaonu">
                    <i className="fa-brands fa-github"></i>
                    </a>

                </div>
                <a href="mailto:admin@izunwaonu.com.ng" className="hire-me">Hire me</a>

            </div>
            
        </div>

       </section>


    )
}
export default Home;