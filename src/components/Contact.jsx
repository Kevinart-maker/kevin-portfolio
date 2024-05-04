import { useForm, ValidationError } from '@formspree/react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
    const [state, handleSubmit] = useForm("xwkgapwp");
    if (state.succeeded) {
        return <p>Thanks for contacting!</p>;
    }
    
    
    return (
        <div className="contact">
            <h1 className='page-heading'>Contact.</h1>
            <p>Get in touch or shoot me an email directly on <strong>kevinodeyemi76@gmail.com</strong></p>


            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                </label>
                <input 
                    type="text"
                    id='name' 
                    name='name'
                    placeholder='Name'
                />
                <input
                    id="email"
                    type="email" 
                    name="email"
                    placeholder='Email'
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <textarea
                    id="message"
                    name="message"
                    placeholder='Message'
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Send Message
                </button>
            </form>

            <div className='more'>
                <NavLink to='/'>
                    <span>Go Back Home</span> 
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
 
export default Contact;