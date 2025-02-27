import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
    return (
        <div className="footer">
            {/* Logo Section */}
            <div className="footer-logo">
                <img src={footer_logo} alt="Shopper Logo" />
                <p>SHOPPER</p>
            </div>

            {/* Navigation Links */}
            <ul className="footer-links">
                {["Company", "Products", "Offices", "About", "Contact"].map((link) => (
                    <li key={link}>{link}</li>
                ))}
            </ul>

            {/* Social Media Icons */}
            <div className="footer-social-icon">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagram_icon} alt="Instagram" />
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                    <img src={pintester_icon} alt="Pinterest" />
                </a>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                    <img src={whatsapp_icon} alt="WhatsApp" />
                </a>
            </div>

            {/* Copyright */}
            <div className="footer-copyright">
                <hr />
                <p>Copyright © {new Date().getFullYear()} - All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
