import './components/Contact.css'

const Contact = () => (
    <div>
        <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" />
        <button type="submit">Send</button>
        </form>
    </div>
);

export default Contact;