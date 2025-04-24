import './components/Contact.css'

const Contact = () => (
    <div className="contact-page">
        <div className='contact-container'>
            <div className='contact-left'>
                <h1>Get In Touch</h1>
                <p>Hello</p>
            </div>
            <form className='contact-form' 
            name="contact v1" 
            method='post' 
            data-netlify="true" 
            onSubmit="submit"
            >
                <input type="hidden" name="form-name" value="contact v1" />
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
                    <label>Description
                        <textarea name="comments"></textarea>
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
);

export default Contact;