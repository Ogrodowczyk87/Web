import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_y400bjt', 'template_ivty839', form.current, 'tOy6eti_W6cYsN6AH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='footer_container'>
            <p className='footer_title'>If you Have any queries you can send my message from here</p>
            <form ref={form} onSubmit={sendEmail} className='footer_form'>
                <label className='footer_label'>
                    Name
                </label>
                <input className="footer_input" type="text" name="from_name" />
                <label className='footer_label'>
                    Email
                </label>
                <input className="footer_input" type="email" name="from_email" />
                <div className='textarea_wrapper'>
                    <label className='footer_label'>
                        Message
                    </label>
                    <textarea className="footer_textarea" name="message" />
                    <motion.input className='footer_input' type="submit" value="Send"
                        whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            boxShadow: "0px 0px 8px rgb(255,255,255)",
                        }} />
                </div>
            </form>
        </div>
    );
};

export default ContactMe;