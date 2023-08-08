import React from "react";
import "./Process.css";


const Process = () =>{

    const data = [
        {
            id: "01",
            title: "Cross-Platform Mobile App Development (Android and iOS)",
            contents: ["Build versatile mobile applications compatible with both Android and iOS platforms, reaching a wider audience and enhancing your brand's mobile presence."] 
        },
        {
            id: "02",
            title: "E-commerce Website Development and Integration",
            contents: ["Develop feature-rich e-commerce platforms that enable secure online transactions, product showcasing, and seamless integration with payment gateways for a smooth shopping experience."] 
        },
        {
            id: "03",
            title: "Custom School or Educational Institution Websites",
            contents: ["Draft tailored websites for educational institutions, providing a platform for efficient communication, course management, event promotion, and student engagement"] 
        }
    ]
    return(
        <section id="process" data-aos="fade">
            <div className="process-heading">
                <h3>Projects</h3>
                <div className="process-container">
                    {
                        data.map(process=>(
                            <div className="process-box" key={process.id}>
                                <span>{process.id}</span>
                                <strong>{process.title}</strong>
                                <ul>
                                    {
                                        process.contents.map(content =>(
                                            <li key={content}>{content}</li>
                                        ) )
                                    }
                                </ul>

                            </div>
                        ))
                    }

                </div>

            </div>
        </section>
    )
}
export default Process;