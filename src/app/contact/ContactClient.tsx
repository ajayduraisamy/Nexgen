'use client';

import { useState } from 'react';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhoneAlt,
} from 'react-icons/fa';

const services = [
    "AI Development", "Machine Learning", "Deep Learning", "Web Development", "Android Development",
    "Database Development", "IoT Development", "Embedded Development", "Cybersecurity Development",
    "UI/UX Development", "Blockchain Development", "Game Development", "Digital Marketing", "UI/UX Design"
];

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        formData.append('access_key', '8a2bf5a9-999a-4210-ace6-87be4a7d737d');

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: json,
        });

        const result = await response.json();
        if (result.success) {
            setSubmitted(true);
            event.currentTarget.reset();
        }
    }

    return (
        <section className="t-[112px] sm:pt-[112px] md:pt-[120px] lg:pt-[128px] bg-white py-20 px-4 md:px-10 font-[Mooli] text-[#1c2e4a]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Left Panel */}
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-5xl font-extrabold text-[#1c2e4a] mb-6 font-muli">Get in Touch</h2>
                        <p className="text-xl text-gray-700 mb-6 leading-relaxed font-muli">
                            Reach out to us for any service queries, collaborations, or project consultations — we’re here to help.
                        </p>

                        <div className="space-y-5">
                            <div className="flex items-center gap-4 text-gray-800 text-lg font-muli">
                                <FaMapMarkerAlt className="text-2xl text-green-500 " />
                                DRNEXGEN  Vijayanagar, Bangalore
                            </div>
                            <div className="flex items-center gap-4 text-gray-800 text-lg font-muli">
                                <FaEnvelope className="text-2xl text-blue-500 " />
                                contact@drnexgen.com
                            </div>
                            <div className="flex items-center gap-4 text-gray-800 text-lg font-muli">
                                <FaPhoneAlt className="text-2xl text-yellow-500 " />
                                +91 98765 43210
                            </div>
                        </div>

                        <div className="flex gap-5 mt-6 text-gray-700 text-xl">
                            <a href="https://facebook.com" target="_blank" className="hover:text-blue-600 transition"><FaFacebookF /></a>
                            <a href="https://instagram.com" target="_blank" className="hover:text-pink-500 transition"><FaInstagram /></a>
                            <a href="https://twitter.com" target="_blank" className="hover:text-sky-500 transition"><FaTwitter /></a>
                            <a href="https://linkedin.com" target="_blank" className="hover:text-blue-700 transition"><FaLinkedin /></a>
                        </div>
                    </div>

                    <div className="mt-3 rounded-xl overflow-hidden shadow-xl border border-gray-300">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.311542171779!2d77.53950207484668!3d12.885625217042888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158cc7b58c6b%3A0xb42eeb03052839d7!2sVijayanagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1689062951309!5m2!1sen!2sin"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Right Panel */}
                <div className="bg-white p-10 shadow-2xl rounded-2xl border border-gray-200">
                    <h3 className="text-4xl font-bold mb-8 text-center text-[#1c2e4a] font-muli">Contact Form</h3>
                    <form onSubmit={handleSubmit} className="space-y-6 text-lg font-muli">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            required
                            className="w-full p-4 rounded-lg border border-gray-300 bg-white placeholder:text-gray-500 text-gray-800"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                            className="w-full p-4 rounded-lg border border-gray-300 bg-white placeholder:text-gray-500 text-gray-800"
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            className="w-full p-4 rounded-lg border border-gray-300 bg-white placeholder:text-gray-500 text-gray-800"
                        />

                        <select
                            name="service"
                            required
                            className="w-full p-4 rounded-lg bg-white text-gray-800 border border-gray-300"
                        >
                            <option value="" disabled selected className="text-gray-500">Select a Service</option>
                            {services.map((service, index) => (
                                <option key={index} value={service}>{service}</option>
                            ))}
                        </select>

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            required
                            className="w-full p-4 h-40 rounded-lg border border-gray-300 bg-white placeholder:text-gray-500 text-gray-800"
                        />

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-4 rounded-lg transition-all duration-300 shadow-lg text-xl"
                        >
                            Send Message
                        </button>

                        {submitted && (
                            <p className="text-green-600 text-center mt-4 font-semibold">Thank You For Contacting Us! We’ll get back to you soon.</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
