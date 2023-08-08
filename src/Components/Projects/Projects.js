
import React from 'react';



import "./Projects.css";
import Project1 from "../../assets/images/project1.jpg";
import Project2 from "../../assets/images/project2.jpeg";
import Project3 from "../../assets/images/project3.jpg";
import Project4 from "../../assets/images/project4.jpeg";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';


const Projects = () =>{

    const data = [
        {
            src: Project1,
            url: "#!"
        },
        {
            src: Project2,
            url: "#!"
        },
        {
            src: Project3,
            url: "#!"
        },
        {
            src: Project4,
            url: "#!"
        },
    ]
    return(
        <section id="projects">
            <div className="project-heading">
                <h3>Recent Projects</h3>
                
            </div>

            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        //   768: {
        //     slidesPerView: 4,
        //     spaceBetween: 40,
        //   },
        //   1024: {
        //     slidesPerView: 5,
        //     spaceBetween: 50,
        //   },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {
            data.map(project => (
                <SwiperSlide key={project.src}>
                    <div className="project-box">
                        <a href={project.url}>
                            <img src={project.src} alt="project"/>
                            <div className="p-overlayer">
                                <strong>Outserved Reports</strong>

                            </div>

                        </a>

                    </div>
                    
                </SwiperSlide>

            ))
        }
        
       
      </Swiper>


            <div className="github-link">
                <a href="https://github.com/izunwaonu" className="btn-link">
                My Github <i className="fa-brands fa-github"></i>
                </a>

            </div>
            
        </section>
    )
}
export default Projects; 