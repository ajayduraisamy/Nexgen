'use client';

import Image from 'next/image';
import { useState } from 'react';

const services = ["AI Development", "Machine Learning", "Deep Learning", "Web Development", "Android Development", "Database Development", "IoT Development", "Embedded Development", "Cybersecurity Development", "UI/UX Development", "Blockchain Development", "Game Development",  "Digital Marketing", "UI/UX Design"];
export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const formKey = process.env.NEXT_PUBLIC_WEB3FORM_ACCESS_KEY;
        formData.append('access_key', formKey || '');

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
            //console.log(result);
            setSubmitted(true);
            event.currentTarget.reset();
        }
    }

    return (
        <section className="py-20 px-4 enquery-section text-white">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">Contact Us</h2>
                <p className="text-light-600 dark:text-gray-300 mt-2 max-w-2xl mx-auto">
                    We're here to help you with your final year project or tech requirement.
                </p>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-8">

                {/* Left Side - Image */}
                <div className="flex-1 flex justify-center">
                <Image
  src="https://res.cloudinary.com/diazxuntv/image/upload/v1752242811/reach_pculyp.avif"
  alt="Contact Us"
  width={600}
  height={550} 
  className="rounded-xl shadow-xl w-full object-cover border border-[#1e293b]"
/>

                </div>

                {/* Right Side - Card Form */}
                <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-2xl w-full max-w-md transition-all duration-500">

                    <h3 className="text-2xl text-white text-center font-bold mb-4">Send us a message</h3>
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder:text-gray-300 border border-gray-300 dark:border-gray-600"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder:text-gray-300 border border-gray-300 dark:border-gray-600"
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Your Phone Number"
                            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder:text-gray-300 border border-gray-300 dark:border-gray-600"
                        />
                    <select
  name="service"
  className="w-full p-3 rounded-lg bg-white/20 text-white placeholder:text-gray-300 border border-gray-300 dark:border-gray-600"
  required
>
  <option value="" disabled selected className="text-gray-500">
    Select a Service
  </option>
  {services.map((service, index) => (
    <option key={index} value={service} className="text-black">
      {service}
    </option>
  ))}
</select>

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            required
                            className="w-full p-3 h-22 rounded-lg bg-white/20 text-white placeholder:text-gray-300 border border-gray-300 dark:border-gray-600"
                        />
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                        >
                            Submit Form
                        </button>
                        {submitted && (
                            <p className="text-green-400 mt-2 text-center text-lg">Thank you! We'll get back to you soon.</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
      
      
    );
}
