/**
 * Contact component 
 * Uses state to track and set form values 
 * Calls email sending methods from email.js files 
 * Renders a modal window on successful form submission 
 * Renders a partially auto-filled from when redirectedm from /products
 */
import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Contact.css';
import { sendTemplatedEmails } from '../email/emailService';
import { contactNotification, contactAutoReply } from '../email/emailTemplates';
import SawIcon from '/assets/conards-woodwords-background.png';

const Contact = () => {

    const location = useLocation();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [interest, setInterest] = useState('');
    const [interestLabel, setInterestLabel] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [prefilled, setPrefilled] = useState(false);
    const form = useRef();
    const firstNameInputRef = useRef(null);

    /**
     * Handler to pre-fill form fields if we arrived here via "Request a Custom Quote" button
     */
    useEffect(() => {
        if (location.state) {
            if (location.state.interest) setInterest(location.state.interest);
            if (location.state.interestLabel) setInterestLabel(location.state.interestLabel);
            if (location.state.message) setMessage(location.state.message);
            setPrefilled(true);
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });

        setTimeout(() => {
            firstNameInputRef.current?.focus();
        }, 5000);
    }, [location.state]);

    /**
     * Handler for sending emails after contact form submission 
     * TemplateID, ServiceID, and publicKey are taken from emailjs
     * First email sent is with contact object data (names, email, message, etc)
     * Second email sent is an auto reply to the user who filled out the contact form 
     * @param {Object} evt - event object for form submission 
     */

    const sendEmail = (evt) => {
        evt.preventDefault();

        const formData = {
            firstName,
            lastName,
            email,
            phoneNum,
            interest,
            interestLabel,
            message
        };

        sendTemplatedEmails([
            contactNotification(formData),
            contactAutoReply(formData)
        ])
        .then(() => {
            setSuccess(true);
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhoneNum('');
            setInterest('');
            setInterestLabel('');
            setMessage('');
            setPrefilled(false);
            evt.target.reset();
        })
        .catch((error) => {
            console.log('Failed: ', error.text);
        });
    }

    useEffect(() => {
        const handleEscape = (evt) => {
            if (evt.key === 'Escape') setSuccess(false);
        };
        if (success) document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [success]);

    return ( 
        <>
        <div className="contact-form-container">
            <div className="contact-container">
                <h2 className="section-header">Contact</h2>
                <div className="watermark">
                    <img src={DarkLogo} alt="Watermark" />
                </div>
                {prefilled && (
                    <div className="prefill-banner">
                        <span>We've pre-filled some details from your product selection.</span>
                        <button className="prefill-banner-close" onClick={() => setPrefilled(false)}
                        aria-label="Dismiss"
                        >
                            &times;
                        </button>
                    </div>
                )}
                    <form className="contact-form" onSubmit={sendEmail} ref={form}>
                        <div className="first-name">
                            <label htmlFor="first-name">First Name</label>
                            <input 
                                    ref={firstNameInputRef}
                                    type="text" 
                                    id="first-name" 
                                    name="firstName" 
                                    required
                                    placeholder="First Name"
                                    onChange={(evt) => setFirstName(evt.target.value)}
                                />
                        </div>
                        <div className="last-name">
                            <label htmlFor="last-name">Last Name</label>
                            <input 
                                type="text" 
                                id="last-name" 
                                name="lastName" 
                                required
                                placeholder="Last Name"
                                onChange={(evt) => setLastName(evt.target.value)}
                            />
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required
                                placeholder="JohnDoe@gmail.com"
                                onChange={(evt) => setEmail(evt.target.value)}
                            />    
                        </div>
                        <div className="phone-number">
                            <label htmlFor="phone-number">Phone Number</label>
                            <input 
                                type="tel" 
                                id="phone-number" 
                                name="phoneNum"
                                placeholder="(555) 555-5555" 
                                onChange={(evt) => setPhoneNum(evt.target.value)}
                            />    
                        </div>
                        <div className="interest">
                            <label htmlFor="interest">What is your area of interest?</label>
                            <select 
                                id="interest" 
                                name="interest" 
                                required
                                value={interest}
                                onChange={(evt) => {
                                    setInterest(evt.target.value);
                                    setInterestLabel(evt.target.options[evt.target.selectedIndex].text);
                                }}
                            >
                                <option value="">Select One</option>
                                <option value="Custom">Quote for Custom Order</option>
                                <option value="General">General Inquiry</option>
                                <option value="Vendor">I'm a vendor looking to resell</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="message">
                            <label htmlFor="message">Message</label>
                            <textarea 
                                id="message" 
                                name="message"
                                rows="15" 
                                cols="60" 
                                required 
                                placeholder="Type your message here..."
                                value={message}
                                onChange={(evt) => setMessage(evt.target.value)}
                            />
                        </div>
                        <div className="button-container">
                            <button className="quote-button" type="submit">Send Message</button>
                        </div>
                    </form>
                    { /* Success modal */ }
                    {success && (
                        <div className="modal-overlay" onClick={() => setSuccess(false)}>
                            <div className="modal-content" onClick={(evt) => evt.stopPropagation()}>
                                <button 
                                    className="modal-close" 
                                    onClick={() => setSuccess(false)}
                                    aria-label="Close"
                                >
                                    &times;
                                </button>
                                <div className="modal-watermark">
                                    <img src={SawIcon} alt="Watermark" />
                                </div>
                                <h3 className="modal-title">Message Sent</h3>
                                <p className="modal-message">
                                    Thank you for reaching out! I've received your message and will be in touch soon.
                                </p>
                                <button className="modal-dismiss" onClick={() => setSuccess(false)}>
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                    <div className="map">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98503.07421436363!2d-104.85170123195803!3d39.50949996567448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c91ce239a3d55%3A0xd49aeed43d2e2426!2sParker%2C%20CO!5e0!3m2!1sen!2sus!4v1783113736922!5m2!1sen!2sus" 
                            style={{width: '100%', height: 'auto'}} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin">
                        </iframe>
                    </div>
            </div>
        </div>
        </>
     );
}
 
export default Contact;
