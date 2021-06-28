import React from 'react'
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <>
        <di className="footer-section">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Subscribe for the next lessons
                </p>

                <p className="footer-subscription-text">
                    Contact us whenever you want 
                </p>


            <div className="input-areas">
            <form>
                    <input
                     type="text"
                     name="email"
                     className="text-input"
                     placeholder="Enter Your email" 
                    />
                    <Button checkStyle="btn--outline">Subscribe</Button>
            </form>
            </div>
            </section>

            <div className="footer_links">
                <div className="footer_links_wrapper">
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>

                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>

                <div className="footer_links_wrapper">
                    <div class='footer-link-items'>
                    <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>

                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
        </div>
        </di>

        </>
    )
}

export default Footer
