import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <span className="name">
                Inshorts clone made by - {""}
                <a href="" target="">Siddharth Vaishnav</a>
            </span>
            <hr style={{width:"90%"}}/>
            <div className="iconContainer">
               
                <a href="https://www.instagram.com/code.siddharth/" target="">
                    <i className="fab fa-instagram fa-2x"></i>
                </a>
                <a href="https://github.com/siddharth17vaishnav" target="">
                    <i className="fab fa-github fa-2x"></i>
                </a>
                <a href="https://www.linkedin.com/in/siddharth-vaishnav-6b44ba185" target="">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                
            </div>
        </div>
    )
}


export default Footer
