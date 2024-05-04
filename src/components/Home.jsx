import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-container">
                <div id="wrapper">
                    <h1 className='glitch' data-text="I`M KEVIN ODEYEMI">I`M KEVIN ODEYEMI</h1>
                </div>
                <p className='text'>
                    Your friendly neighborhood frontend developer, ReactJS and JavaScript engineer. I spend my days (and often nights) painting the Internet canvas with <strong>PROJECTS</strong> and lines of code, turning zeroes and ones into immersive, interactive experiences,
                    <br /><br />
                    Bona fide <strong>Design</strong> enthusiast - responsive or user-friendly, I`ve got it covered. I tread the path of minimalism, finding beauty in simplicity and order. When I`m not crafting beautiful web experiences, you can find me reading <strong>ARTICLES</strong> or swaying to the rhythm of Pop Music & Jazz, losing myself in the captivating flow of melodies. anyways you can <strong>CONTACT ME</strong>
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
                </div>
        </div>
    );
}
 
export default Home;