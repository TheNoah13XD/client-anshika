'use client';

import { FC, useState } from "react";

// components
import IconButton from "@/components/ui/IconButton";
import Input from "@/components/ui/Input";

const ContactPage: FC = ({}) => {

    const [form, setForm] = useState({
        name: "",
        text: "",
        email: ""
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
      
            if (response.ok) {
                console.log('Email sent successfully');
            } else {
                console.error('Error sending email');
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    const handleChange = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    return (
        <>
            <div className="contact-container">
                <div className="basics">
                    <h1>connect</h1>
                    <div className="subtitle">
                        <span>embark on an extraordinary</span>
                        <span>fashion journey. connect</span>
                        <span>with us.</span>
                    </div>
                </div>
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Input label="Hey! I'm " name="name" value={form.name} onChange={handleChange}/>
                            <Input className="input-pt" label="Looking for " name="text" value={form.text} onChange={handleChange}/>
                            <Input className="input-pt" label="And my email is " name="email" value={form.email} onChange={handleChange}/>
                        </div>
                        <div className="redirect">
                            <IconButton icon="north_east" />
                            <img src="/contact-thumbnail.png" alt="contact" />
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default ContactPage;