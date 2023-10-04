import React,{useEffect} from "react";
import me from "../assets/me.jpg"
import laravel from "../assets/laravel.png"
import vue from "../assets/vue.png"
import typescript from "../assets/typescript.png"
import cv from "../assets/Cv-Aina.pdf"
import javascript from "../assets/javascript.png"
import figma from "../assets/figma.png"
import html from "../assets/html&css.png"
import react from "../assets/react.png"


function Portfolio() {

    const handleClick = () => {
        const menu = document.querySelector("#menu-icon");
        const navbar = document.querySelector('.navbar');
        if(menu && navbar){
            menu.classList.toggle('bx-x');
            navbar.classList.toggle('open');
        }
        
    };

    useEffect(()=> {
        const handleScroll = () => {
            const header = document.querySelector("header");
            if(header){
                header.classList.toggle("sticky", window.scrollY>60);
            }
        };
        

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
        <header>
            <a href="#" className="logo">Ai<span>Na</span></a>

            <ul className="navbar">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About me</a></li>
                <li><a href="#skill">My skill</a></li>
                {/* <li><a href="#work">Projects</a></li> */}
                <li><a href="#footer">Contacts</a></li>
            </ul>

                <div className="h-right">
                    <a href="#">Follow me</a>
                    <a href="#"><div className="ico">f</div></a>
                    <a href="#">
                        <div className="insta">
                            <div className="one">
                                    <div className="dot"></div>
                                    <div className="circle">
                                        <div className="three">
                                            <div className="four"></div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </a>
                    <a href="#"><div className="in">in</div></a>
                    <div className="bx bx-menu" id="menu-icon" onClick={handleClick}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
        </header>

        <section id="home" className="home">
            <div className="home-text">
                <h5>Hello,</h5>
                <h1>I'm Aina <br /> a web developer</h1>
                <p>I'm here to make your web application </p>
                <a href="#about"><button className="btn">Get started</button></a>
            </div>
        </section>



        <section id="about" className="about">
            <div className="about-img">
                <img src={me} alt="" />
            </div>

            <div className="about-text">
                <h5>I'm Aina</h5>
                <h2>web developer and designer</h2>
                <p>I'm a junior web developer and designer based in Madagascar <br /> and currently study at Institut Supérieur Polytechnique de Madagascar</p>
                <a download={''} href={cv} className="btn">Download CV</a>
            </div>
        </section>

            <div className="center-text">
                <h2>My skills</h2>
            </div>

        <section id="skill" className="skill">
            <div className="skill-content">
                <div className="row">
                    <div className="row-img">
                        <img src={html} alt="" />
                    </div>
                    <p className="skill-desc">Html & Css</p>
                </div>

                <div className="row">
                    <div className="row-img">
                        <img src={javascript} alt="" />
                    </div>
                    <p className="skill-desc">Javascript</p>
                </div>

                <div className="row">
                    <div className="row-img">
                        <img src={typescript} alt="" />
                    </div>
                    <p className="skill-desc">Typescript</p>
                </div>

                <div className="row">
                    <div className="row-img">
                        <img src={figma} alt="" />
                    </div>
                    <p className="skill-desc">Figma</p>
                </div>

            </div>
        </section>

        <section id="skill" className="skill">
            <div className="skill-content">
                <div className="row">
                    <div className="row-img">
                        <img src={react} alt="" />
                    </div>
                    <p className="skill-desc">React</p>
                </div>

                <div className="row">
                    <div className="row-img">
                        <img src={vue} alt="" />
                    </div>
                    <p className="skill-desc">Vue</p>
                </div>

                <div className="row">
                    <div className="row-img">
                        <img src={laravel} alt="" />
                    </div>
                    <p className="skill-desc">Laravel</p>
                </div>

                <div className="row">
                    <div className="row-img">
                        <img src={me} alt="" />
                    </div>
                    <p className="skill-desc">Typescript</p>
                </div>
            </div>
        </section>

        <section className="project">
            <div className="center-text">
                <h2>All projects</h2>
            </div>

            <div className="project-content">
                <div className="box">
                    <img src={me} alt="" />
                    <h6>Atoo app</h6>
                    <h4>Making a web app for yammy moto & Fami moto society</h4>
                </div>

                <div className="box">
                    <img src={me} alt="" />
                    <h6>Atoo app</h6>
                    <h4>Making a web app for yammy moto & Fami moto society</h4>
                </div>

                <div className="box">
                    <img src={me} alt="" />
                    <h6>Atoo app</h6>
                    <h4>Making a web app for yammy moto & Fami moto society</h4>
                </div>
            </div>
        </section>

        <section className="footer" id="footer">
            <div className="footer-box">
                <h3>Services</h3>
                <a href="#">Email</a>
                <a href="#">Branding</a>
                <a href="#">Campaign</a>
                <a href="#">Offline</a>
            </div>

            <div className="footer-box">
                <h3>Contact</h3>
                <a href="#">Email : <span>nyaina163@gmail.com</span></a>
                <a href="#">Linkedin : <span>Rakotomanana Nomenjanahary Aina</span></a>
                <a href="#">Phone : <span>034 41 991 48 / 032 73 078 77</span></a>
                <a href="#">Whatsapp : <span>+ 261 32 73 078 77</span></a>
            </div>

            <div className="footer-box">
                <h3>Social Media</h3>
                <a href="#">Facebook : <span>Ra Ko To</span></a>
                <a href="#">Instagram : <span>Ra Ko To</span></a>
                <a href="#">Linkedin : <span>Aina</span></a>
            </div>
        </section>

        <div className="copyright">
            <p>Copyright 2023 by Aina</p>
        </div>
        </div>
    );
}

export default Portfolio;