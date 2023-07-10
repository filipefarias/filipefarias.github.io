import React from "react";
import './Contact.css'

function Contact(): JSX.Element {
    return <div className="contact-info">
        <i className="fa-brands fa-whatsapp"></i>
        <a href="https://api.whatsapp.com/send?phone=5551981666171&text=Olá, gostaria de conversar com você" target="_blank" rel="noopener">+55 51 98166-6171</a>
    </div>
}

export default Contact