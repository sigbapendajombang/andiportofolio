import './Footer.css';
import React from "react";
import { useGlobalContext } from "../context/GlobalContext";

const Footer = () => {
    const { profile } = useGlobalContext();

    return (
        <footer className="portfolio-section footer contact-section footer-section" id="contact">
            <div className="container">
                <div className="footer-content">
                    <p className="eyebrow">Get in touch</p>
                    <h2>Have a mapping problem<br />in mind?</h2>
                    <p>
                        Tell me what you’re working on. I’d be happy to talk through it.
                    </p>

                    <div className="footer-links">
                        <a
                            href={`mailto:${profile.contact.email}`}
                            className="footer-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {profile.contact.email}
                        </a>
                        <a
                            href={profile.contact.linkedin}
                            className="footer-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                        <a
                            href={profile.contact.github}
                            className="footer-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            href={`https://wa.me/${profile.contact.whatsapp.replace(/\+/g, "")}`}
                            className="footer-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WhatsApp
                        </a>
                    </div>

                    <div className="copyright">
                        <p>
                            © {new Date().getFullYear()} {profile.name} · Kediri, Indonesia
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
