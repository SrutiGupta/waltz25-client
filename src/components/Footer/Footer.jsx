import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer">
                <div className="footer-top">
                    <div className="footer-left">
                        <h1>WALTZ <span className="highlight">2025</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque consectetur doloribus? Obcaecati, quisquam quia dicta officiis temporibus soluta! Animi?</p>
                    </div>
                    <div className="footer-right">
                        <div className="footer-links">
                            <ul>
                                <li><Link to="#">About us</Link></li>
                                <li><Link to="#">FAQs</Link></li>
                                <li><Link to="#">SPP</Link></li>
                                <li><Link to="#">About Theme</Link></li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <ul>
                                <li><Link to="#">Workshops</Link></li>
                                <li><Link to="#">Exhibitions</Link></li>
                                <li><Link to="#">Initiatives</Link></li>
                                <li><Link to="#" className="highlight-link">Guest Lectures</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-line"></div>
                <div className="footer-bottom">
                    <div className="footer-contact">
                        <p>Connect with us on:</p>
                        <div className="footer-icons">
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                        <p>&copy; WALTZ 2025, All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
