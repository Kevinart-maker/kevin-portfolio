import { NavLink } from "react-router-dom";
import data from '/src/data/data'
import iconsData from "../data/iconsData";
import Seo from "./Seo";

const About = () => {

    const iconData = iconsData.map(icon => {
        return(
            <div className="about-icons" key={icon.key}>
                <img src={icon.icons} className={icon.name === 'Next.js' ? 'filter' : ''} alt="icons" />
                <div className="text">
                    {icon.name}
                </div>
            </div>
        )
    })

    const aboutData = data.map(items => {
        return(
            <div className="stuff-one" key={items.id}>            
            <Seo
                title = "About Kevin Odeyemi | React Frontend Developer"
                description ="Learn more about Kevin Odeyemi, a React frontend developer with expertise in modern web and app interfaces, clean UI/UX design, and scalable performance."
                canonical = "https://kevin.clabedautos.com/about"
                schemaMarkup={{
                    '@context': 'https://schema.org',
                    '@type': 'WebSite',
                    name: 'Kevin Odeyemi',
                    url: 'https://kevin.clabedautos.com/about',
                    jobTitle: 'Frontend Developer',
                    sameAs: [
                    'https://github.com/kevinart-maker',      // Replace with your actual profiles
                    'https://linkedin.com/in/odeyemikevin',
                    'https://twitter.com/odeyemikevin',
                    ],
                    worksFor: {
                    '@type': 'Organization',
                    name: 'Freelance',
                    },
                }}
            />

                
                <div className="top">
                    <h2>
                        {items.subject}
                        <i className={items.icon}></i>
                    </h2>
                    <a href={items.link}>{items.subSubject}</a>
                </div>
                <p>{items.content}</p>
                {items.button && (<button onClick={items.button}>Download CV</button>)}
            </div>
        )
})
    
    return (
        <div className="about-container">
            <h1>About Me.</h1>

            <div className="about-stuff">
                {aboutData}
            </div>

            <div className="tech-icons">
                <h2>Technologies I work with...</h2>
                <div className="icons-container">
                    {iconData}
                </div>
            </div>
   
            <div className='more'>
                <NavLink to='/projects'>
                    <span>Let's continue to projects</span> 
                    <i className='fa-solid fa-arrow-right fa-shake'></i>
                </NavLink>
            </div>
            <div className='socials'>
                    <a href="https://x.com/OdeyemiKevin?t=2OOUHwfoOUdgJfbj57d9hg&s=08">
                        <i className='fa-brands fa-twitter'></i>
                    </a>
                    <a href="https://www.instagram.com/niveksti_?igsh=NTc4MTIwNjQ2YQ==">
                        <i className='fa-brands fa-instagram'></i>
                    </a>
                    <a href="https://www.facebook.com/kevinart2020?mibextid=ZbWKwL">
                        <i className='fa-brands fa-facebook'></i>
                    </a>
                    <a href="https://github.com/Kevinart-maker">
                        <i className='fa-brands fa-github'></i>
                    </a>
                    <a href="https://www.linkedin.com/in/kevin-odeyemi-06686524a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                        <i className='fa-brands fa-linkedin'></i>
                    </a>
            </div>
        </div>
    );
}
 
export default About;