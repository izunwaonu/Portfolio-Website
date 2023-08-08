import React from "react";
import "./Carrer.css";
import Cv from "../../assets/cv/CV-Justus-Onuh.pdf";



const Carrer = () =>{

    const carrers = [
        {
            title: "Front-end Developer",
            name: "Software",
            year: "2019-2020"
        },
        {
            title: "Front-end Developer, UI/UX Designer",
            name: "Software",
            year: "2019-2020"
        }
    ]
    const educations = [
        {
            title: "Bigard Memorial Seminary Enugu",
            name: "Philosophy",
            year: "2015-2019"
        },
        {
            title: "Human Resources Development Center, Nsukka",
            name: "Computer Programing",
            year: "2019-2020"
        }
    ]
    return (
        <section id="carrer">
            <div className="carrer-education">
                <div className="carrer" data-aos="fade-right">
                    <h3>Carrer</h3>
                    <div className="c-b-container">
                        {
                            carrers.map((carrer, index)=>(
                                <div className="c-box" key={index}>
                                    <h4>{carrer.title}</h4>
                                    <strong>{carrer.name}</strong>
                                    <span>{carrer.year}</span>

                                </div>

                            ))
                        } 

                    </div>


                </div>
                <div className="carrer edu" data-aos="fade-left">
                    <h3>Education</h3>
                    <div className="c-b-container">
                        {
                            educations.map((carrer, index)=>(
                                <div className="c-box" key={index}>
                                    <h4>{carrer.title}</h4>
                                    <strong>{carrer.name}</strong>
                                    <span>{carrer.year}</span>

                                </div>

                            ))
                        } 

                    </div>


                </div>
                
            </div>
            <div className="btn-c">
                    <a href={Cv} download className="btn-link">
                        Get CV <i className="fa-solid fa-download"></i>
                    </a>

                </div>
            
        </section>
    )
}
export default Carrer;