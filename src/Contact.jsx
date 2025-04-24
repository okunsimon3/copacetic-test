import './Contact.css'
import { NavIcon } from './components/NavIcon';

const Contact = () => (
    <div className="contact-page">
        <NavIcon />
        <div className='contact-container'>
            <div className='contact-left'>
                <h1>Get In Touch</h1>
            </div>
            <form className='contact-form' 
            name='contact'
            method='POST'
            data-netlify='True'
            action="/success"
            >
                <input type="hidden" name="form-name" value="contact" />
                <div>
                    <label>First Name
                        <input type="text" name="first-name" />
                    </label>
                </div>
                <div>
                    <label>Email
                        <input type="email" name="email" />
                    </label>
                </div>
                <div>
                    <label>More Info
                        <textarea name="message"></textarea>
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
);

export default Contact;