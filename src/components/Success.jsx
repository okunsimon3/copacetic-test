import { Link } from 'react-router-dom';

const Success = () => (
    <div className="success-page">
        <h1>Thanks for reaching out!</h1>
        <p>We’ll get back to you as soon as possible.</p>
        <Link to="/" className="back-home-link">
        ← Back to Home
        </Link>
    </div>
);

export default Success;