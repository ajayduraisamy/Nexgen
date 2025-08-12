'use client';

import React, { useState, useEffect } from 'react';

export default function RequestServices() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORM_ACCESS_KEY,
        ...form,
      }),
    });

    if (response.ok) {
      setSubmitted(true);
      setForm({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }
  };

  const counters = [
    { label: 'Completed Projects', end: 250 },
    { label: 'Client Satisfaction', end: 98 },
    { label: 'Active Clients', end: 50 },
    { label: 'Years of Experience', end: 5 },
  ];

  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) => (count < counters[i].end ? count + 1 : count))
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-screen bg-gray-950 text-white py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start justify-between">
        {/* Left: Form */}
        <div className="w-full lg:w-1/2 bg-white text-black rounded-2xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Request a Service</h2>
          <p className="text-gray-700 mb-8">
            Let us know how we can help you. Fill the form and we’ll contact you shortly.
          </p>

          {submitted ? (
            <div className="text-green-600 text-lg">Thanks! We’ve received your request.</div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
                required
              />
              <select
                name="service"
                value={form.service}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
                required
              >
                <option value="">Select a Service</option>
                {[
                  'AI Development',
                  'Machine Learning',
                  'Deep Learning',
                  'Web Development',
                  'Android Development',
                  'Database Development',
                  'IoT Development',
                  'Embedded Development',
                  'Cybersecurity Development',
                  'UI/UX Development',
                  'Blockchain Development',
                  'Game Development',
                  'Digital Marketing',
                  'UI/UX Design',
                  'Other',
                ].map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                value={form.message}
                placeholder="Tell us about your requirement..."
                className="p-3 border border-gray-300 rounded-lg md:col-span-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
                required
              ></textarea>

              <button
                type="submit"
                className="w-full md:col-span-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold py-3 rounded-lg hover:scale-105 transition-transform duration-300"
              >
                Submit Request
              </button>
            </form>
          )}
        </div>

        {/* Right: Stats Cards */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {counters.map((item, i) => (
            <div
              key={item.label}
              className="bg-gradient-to-br from-purple-800 to-indigo-900 rounded-2xl p-6 text-center transform hover:rotate-1 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <h3 className="text-4xl font-extrabold text-white">{counts[i]}+</h3>
              <p className="mt-2 text-gray-300">{item.label}</p>
            </div>
          ))}

          {/* Extra Cards */}
          <div className="bg-gradient-to-r from-green-700 to-green-900 rounded-2xl p-6 text-center hover:-rotate-1 hover:scale-105 transition-all duration-300 shadow-2xl">
            <h3 className="text-4xl font-extrabold text-white">24/7</h3>
            <p className="mt-2 text-gray-300">Support Availability</p>
          </div>
          <div className="bg-gradient-to-r from-pink-600 to-pink-800 rounded-2xl p-6 text-center hover:rotate-2 hover:scale-105 transition-all duration-300 shadow-2xl">
            <h3 className="text-4xl font-extrabold text-white">100%</h3>
            <p className="mt-2 text-gray-300">Client-Centric Approach</p>
          </div>
        </div>
      </div>
    </section>
  );
}
