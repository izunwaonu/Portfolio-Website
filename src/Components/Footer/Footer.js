import React from "react";
import "./Footer.css";

const Footer = ()=>{
    return(
        <footer>
            <span>Copyright &copy;2023</span>
            <div className="social-links">
                <a href="#!">
                    <i className="fa-brands fa-facebook"></i>
                     
                </a>
                <a href="#!">
                    <i className="fa-brands fa-instagram"></i>
                     
                </a>
                <a href="#!">
                    <i className="fa-brands fa-youtube"></i>
                </a>

                
            </div>
            <a href="#!" className="footer-logo">Izunwaonu</a>
        </footer>
    )
}
export default Footer;