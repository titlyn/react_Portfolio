import {useEffect} from "react";
import me from "../assets/me.jpg"
import laravel from "../assets/laravel.png"
import vue from "../assets/vue.png"
import typescript from "../assets/typescript.png"
import cv from "../assets/Cv-Aina.pdf"
import javascript from "../assets/javascript.png"
import figma from "../assets/figma.png"
import html from "../assets/html&css.png"
import react from "../assets/react.png"
import portfolio from "../assets/portfolio.png"
import wcc from "../assets/wcc.png"
import rakoto from "../assets/background.png"
import wcc4 from "../assets/wcc4.png"

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
                <li><a href="#footer">Contacts</a></li>
            </ul>

                <div className="h-right">
                    <a href="#">Follow me</a>
                    <a href="https://www.facebook.com/ghostRakoto.ghost">
                        <div className="ico"></div>
                    </a>

                    <a href="https://www.instagram.com/ra_ko_to?utm_source=qr&r=nametag">
                        <div className="insta">
                        </div>
                    </a>
                    <a href="https://mg.linkedin.com/in/aina-rakotomanana-nomenjanahary-aabaa824b"><div className="in"></div></a>
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

            <div className="home-image">
                <img src={rakoto} alt="" />
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
                    <img src={portfolio} alt="" />
                    <h6>Portfolio</h6>
                    <h4>React with Typescript web portfolio</h4>
                </div>

                <div className="box">
                    <img src={wcc} alt="" />
                    <h6>Weekly Coding Challenge</h6>
                    <h4>Making a Html,Css and Javascript website challenge during the week-end.</h4>
                </div>

                <div className="box">
                    <img src={wcc4} alt="" />
                    <h6>Weekly Coding Challenge</h6>
                    <h4>Making a Html,Css and Javascript website challenge during the fourth week-end.</h4>
                </div>
            </div>
        </section>

        <section className="footer" id="footer">
            <div className="footer-box">
                <h3>Services</h3>
                <a href="#">Web development</a>
                <a href="#">Web Design</a>
                <a href="#">Mobile development</a>
                <a href="#">Mobile design</a>
            </div>

            <div className="footer-box">
                <h3>Contact</h3>
                <a href="mailto:nyaina163@gmail.com">Email : <span>nyaina163@gmail.com</span></a>
                <a href="https://mg.linkedin.com/in/aina-rakotomanana-nomenjanahary-aabaa824b">Linkedin : <span>Rakotomanana Nomenjanahary Aina</span></a>
                <a href="#">Phone : <span>034 41 991 48 / 032 73 078 77</span></a>
                <a href="#">Whatsapp : <span>+ 261 32 73 078 77</span></a>
            </div>

            <div className="footer-box">
                <h3>Social Media</h3>
                <a href="https://www.facebook.com/ghostRakoto.ghost">Facebook : <span>Ra Ko To</span></a>
                <a href="https://www.instagram.com/ra_ko_to?utm_source=qr&r=nametag">Instagram : <span>Ra Ko To</span></a>
                <a href="https://mg.linkedin.com/in/aina-rakotomanana-nomenjanahary-aabaa824b">Linkedin : <span>Aina</span></a>
            </div>
        </section>

        <div className="copyright">
            <p>Copyright 2023 by Aina</p>
        </div>
        </div>
    );
}

export default Portfolio;