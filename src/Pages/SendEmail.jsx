import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const SendEmail = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_p7bl98r', // Replace with your Service ID
            'template_ienp7wo', // Replace with your Template ID
            {
                name: formData.name,
                email: formData.email,
                message: formData.message
            },
            'Mf3eCE0KsRvpT8lwn' // Replace with your Public Key
        )
        .then((result) => {
            alert('Message sent successfully!');
        })
        .catch((error) => {
            console.error('Failed to send the message:', error);
            alert('Failed to send the message. Please try again.');
        });
    };

    return (
        <form onSubmit={sendEmail}>
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
            />
            <button type="submit">Send Mail!</button>
        </form>
    );
};

export default SendEmail;
