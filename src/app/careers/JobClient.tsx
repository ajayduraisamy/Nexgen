'use client';

import { useState } from 'react';
import { jobOpenings } from '@/data/jobs';
import {
  FaUsers,
  FaHandshake,
  FaLightbulb,
  FaLaptopCode,
  FaChartLine,
  FaClock,
  FaGlobe,
  FaUserGraduate,
  FaHeart,
} from 'react-icons/fa';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append('access_key', '8a2bf5a9-999a-4210-ace6-87be4a7d737d');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Something went wrong. Please try again later.');
    }
  }

  return (
    <main className="min-h-screen p-6 md:p-16 bg-gradient-to-br from-[#f9fafb] via-[#e5e7eb] to-[#f9fafb] text-gray-900">
      {/* Hero */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-14 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-transparent bg-clip-text drop-shadow-xl mt-5">
        Careers at DRNEXGEN
      </h1>

      {/* Job Listings & Application */}
     

      {/* Meet Our Team */}
      <section className="mb-32 text-center">
        <h2 className="text-4xl font-extrabold text-indigo-700 mb-6">Meet Our Team</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">Our team consists of visionaries, technologists, and creators working together to build the future.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: 'Ava Patel', title: 'Chief Product Officer' },
            { name: 'Liam Chen', title: 'Head of Engineering' },
            { name: 'Noah Singh', title: 'UX/UI Designer' },
          ].map(({ name, title }, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-xl hover:scale-105 transition">
              <div className="w-24 h-24 mx-auto bg-indigo-100 rounded-full mb-4"></div>
              <h3 className="text-lg font-bold">{name}</h3>
              <p className="text-sm text-gray-500">{title}</p>
              <p className="text-xs text-gray-400 mt-2">10+ years of experience | Based in Bangalore</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Culture */}
      <section className="mb-32 text-center">
        <h2 className="text-4xl font-extrabold text-indigo-700 mb-6">Our Culture</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">We believe in transparency, innovation, and empathy. Our team is our strength.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { icon: <FaUsers />, label: 'Team First', desc: 'We grow together and support one another like family.' },
            { icon: <FaHandshake />, label: 'Integrity', desc: 'Trust and honesty drive all our actions.' },
            { icon: <FaLightbulb />, label: 'Innovation', desc: 'We encourage bold ideas and creative risk-taking.' },
          ].map(({ icon, label, desc }, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center gap-3 hover:scale-105 transition">
              <div className="text-indigo-600 text-3xl">{icon}</div>
              <h4 className="text-lg font-semibold">{label}</h4>
              <p className="text-sm text-gray-600 text-center">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Join Us */}
      <section className="text-center mb-20">
  <h2 className="text-4xl font-extrabold text-indigo-700 mb-6">Why Join Us?</h2>
  <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
    Your career deserves purpose, growth, and balance — we offer all that and more.
  </p>
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
    {[
      { icon: <FaLaptopCode />, title: 'Remote Friendly', desc: 'Work from wherever you thrive. Flexible hours and locations.' },
      { icon: <FaChartLine />, title: 'Growth Focused', desc: 'Access mentorship, training, and upward mobility.' },
      { icon: <FaClock />, title: 'Work-Life Balance', desc: 'We believe in downtime and respect your boundaries.' },
      { icon: <FaUserGraduate />, title: 'Learning Culture', desc: 'Weekly tech talks, workshops, and certifications.' },
      { icon: <FaGlobe />, title: 'Diverse Projects', desc: 'Global clients across industries from fintech to healthcare.' },
      { icon: <FaHeart />, title: 'Positive Impact', desc: 'We care about sustainability, ethics, and social change.' },
    ].map(({ icon, title, desc }, i) => (
      <div key={i} className="bg-white p-6 rounded-2xl shadow-xl hover:scale-105 transition text-center">
        <div className="text-indigo-600 text-4xl mb-4 flex justify-center">{icon}</div>
        <h4 className="text-lg font-semibold mb-1">{title}</h4>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    ))}
  </div>
</section>
 <div className="grid gap-12 md:grid-cols-2 items-start mb-32">
        {/* Job List */}
        <div className="space-y-10">
          {jobOpenings.map((job) => (
            <div key={job.id} className="bg-white border border-gray-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-bold text-indigo-700 mb-2">{job.title}</h3>
              <p className="text-sm text-gray-500 mb-1">{job.type} | {job.location}</p>
              <p className="text-base text-gray-700 mb-2">{job.description}</p>
              <ul className="text-sm text-gray-600 list-disc list-inside mb-3 space-y-1">
                <li>Collaborate with cross-functional teams.</li>
                <li>Work on cutting-edge projects.</li>
                <li>Opportunity to grow and lead.</li>
              </ul>
              <p className="text-sm text-pink-600 font-medium mb-4">Experience: {job.experience}</p>
              <button
                onClick={() => setSelectedJob(job.title)}
                className="px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-md hover:brightness-110 transition"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="bg-white p-10 border border-gray-300 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">Apply Now</h2>
          <form onSubmit={handleSubmit} className="space-y-5" encType="multipart/form-data">
            <input name="name" placeholder="Your Name" required className="w-full p-4 rounded-xl bg-gray-50 border border-gray-300" />
            <input type="email" name="email" placeholder="Email" required className="w-full p-4 rounded-xl bg-gray-50 border border-gray-300" />
            <input name="phone" placeholder="Phone Number" required className="w-full p-4 rounded-xl bg-gray-50 border border-gray-300" />
            <input name="position" value={selectedJob ?? ''} placeholder="Applying for (Job Title)" required onChange={(e) => setSelectedJob(e.target.value)} className="w-full p-4 rounded-xl bg-gray-50 border border-gray-300" />
            <textarea name="message" placeholder="Why should we hire you?" rows={4} required className="w-full p-4 rounded-xl bg-gray-50 border border-gray-300" />
            <input type="file" name="resume" accept="application/pdf" required className="w-full file:py-3 file:px-4 file:rounded-lg file:bg-gradient-to-r file:from-indigo-500 file:to-pink-500 file:text-white bg-gray-50 border border-gray-300 rounded-xl" />
            <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold shadow-lg hover:brightness-110">
              Submit Application
            </button>
            {submitted && <p className="text-green-600 text-center text-sm mt-3">Thank you! We’ll contact you soon.</p>}
          </form>
        </div>
      </div>
    </main>
  );
}
