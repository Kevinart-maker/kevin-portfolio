import { NavLink } from "react-router-dom";
import Seo from './Seo';

const Home = () => {
    return (
        <div className="home-container">
            <Seo
            title="Kevin Odeyemi | React Frontend Developer - Modern Web & App Interfaces"
            description="Welcome to the portfolio of Kevin Odeyemi, a React frontend developer crafting modern, responsive websites and mobile apps with clean UI/UX design and scalable performance."
            canonical="https://kevin.clabedautos.com/"
            schemaMarkup={{
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'Kevin Odeyemi',
                url: 'https://kevin.clabedautos.com/',
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

                <div id="wrapper">
                    <h1 className='glitch' data-text="I'M KEVIN ODEYEMI">I'M KEVIN ODEYEMI</h1>
                </div>
                <p className='text'>
                    Hello! I'm your friendly neighborhood frontend developer, specializing in <strong>ReactJS</strong>, <strong>JavaScript</strong>, and modern <strong>web development</strong>. By day (and sometimes night), I bring the web to life, turning zeros and ones into dynamic, interactive <strong>web applications</strong> and creative <strong>projects</strong> through clean, efficient code.
                    <br /><br />
                    A true <strong>UI/UX design</strong> enthusiast at heart—whether it's responsive, intuitive, or user-centric <strong>web design</strong>, I've got it covered. I embrace the beauty of minimalism, where simplicity and order reign supreme. When I'm not shaping the digital world, you'll find me diving into thought-provoking <strong>technology articles</strong> or losing myself in the rhythm of <strong>Pop music</strong> and <strong>Jazz</strong>, allowing the melodies to sweep me away.
                    <br /><br />
                    Feel free to <strong>contact me</strong> anytime—I'd love to connect with fellow <strong>developers</strong>, <strong>designers</strong>, and anyone passionate about creating amazing digital experiences!
                </p>

                <div className='more'>
                    <NavLink to='/about'>
                        <span>See More About Me</span> 
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
                    <a href="https://www.behance.net/kevinart2">
                        <i className="fa-brands fa-square-behance"></i>
                    </a>
                </div>
        </div>
    );
}
 
export default Home;