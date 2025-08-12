'use client';

import { useState } from "react";
import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";
import {
  FaLightbulb,
  FaLaptopCode,
  FaAward,
  FaUserGraduate,
  FaRocket,
  FaChalkboardTeacher,
  FaBriefcase,
  FaNetworkWired,
  FaTools,
} from "react-icons/fa";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("why");

  const cards = [
    {
      icon: <FaBriefcase className="text-yellow-100 text-4xl mb-4 mx-auto" />, title: "Client-Centered Services",
      desc: "End-to-end custom software, mobile app, AI/ML, and automation solutions for businesses."
    },
    {
      icon: <FaNetworkWired className="text-cyan-100 text-4xl mb-4 mx-auto" />, title: "Tech Stack Versatility",
      desc: "Experts in MERN, Python, Java, Flutter, AWS, Docker, React Native, and more."
    },
    {
      icon: <FaRocket className="text-orange-100 text-4xl mb-4 mx-auto" />, title: "Startup Acceleration",
      desc: "Helping founders validate ideas, build MVPs, and go to market with investor-ready tech."
    },
    {
      icon: <FaUserGraduate className="text-indigo-100 text-4xl mb-4 mx-auto" />, title: "Student Empowerment",
      desc: "Final year project guidance with live training and domain-specific implementation."
    },
    {
      icon: <FaChalkboardTeacher className="text-green-100 text-4xl mb-4 mx-auto" />, title: "Corporate Workshops",
      desc: "Upskilling sessions in AI, Web Dev, DevOps, and Product Strategy for teams."
    },
    {
      icon: <FaTools className="text-pink-100 text-4xl mb-4 mx-auto" />, title: "Real-World Tools",
      desc: "We integrate GitHub, Figma, APIs, Agile tools, and real-time deployment workflows."
    },
  ];

  return (
   <section className="mt-5 sm:pt-[112px] md:pt-[120px] lg:pt-[128px] py-20 px-4 md:px-16 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white font-[Muli]">

      <div className="max-w-7xl mx-auto">

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {[{ key: "why", label: "Why Choose Us" }, { key: "mission", label: "Mission" }, { key: "vision", label: "Vision" }].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-2 rounded-full text-base font-semibold transition-all duration-300 ${activeTab === tab.key ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg" : "bg-gray-700 text-gray-200 hover:bg-gray-600"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "why" && (
          <>
            <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
              <div className="w-full md:w-1/2">
                <Image src="https://res.cloudinary.com/diazxuntv/image/upload/v1754990607/about_ysqgs1.jpg" alt="About DRNEXGEN" width={600} height={400} className="rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] object-cover w-full h-auto" />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-4xl font-bold mb-6 text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text font-muli">
                  About DRNEXGEN
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed font-muli">
                  DRNEXGEN  Pvt Ltd is a service-based tech startup committed to delivering cutting-edge solutions in Artificial Intelligence, Machine Learning, Web & Mobile Development, IoT, Embedded Systems, Cybersecurity, and Blockchain. We empower students and professionals with real-world, industry-relevant innovations through advanced technology services, practical training, and exceptional project execution.
                </p>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-center gap-3"><FiCheckCircle className="text-green-400 text-xl" /> Enterprise-grade Solutions</li>
                  <li className="flex items-center gap-3"><FaLightbulb className="text-yellow-400 text-xl" /> 100+ Successful Product Launches</li>
                  <li className="flex items-center gap-3"><FaLaptopCode className="text-blue-400 text-xl" /> Cutting-edge Tech Expertise</li>
                  <li className="flex items-center gap-3"><FaAward className="text-pink-400 text-xl" /> Trusted by Clients & Institutions</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-white mb-6 font-muli">Why Choose <span className="bg-gradient-to-r from-green-400 via-teal-400 to-green-400 text-transparent bg-clip-text"> DRNEXGEN?</span></h3>
              <p className="text-lg text-white max-w-3xl mx-auto mb-12 font-muli">
                From enterprise software to academic innovation, DRNEXGEN delivers reliable tech services, training, and product development across all domains.
              </p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {cards.map((card, index) => (
    <div
      key={index}
      className="group relative p-8 rounded-3xl overflow-hidden shadow-2xl text-left transition-transform duration-300 hover:-translate-y-1 bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#1e3c72]"
    >
      {/* Overlay for hover fill */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl z-0" />

      {/* Content */}
      <div className="relative z-10">
        {card.icon}
        <h4 className="text-xl font-bold mb-2 text-center text-white">{card.title}</h4>
        <p className="text-lg text-white text-center leading-relaxed">{card.desc}</p>
      </div>
    </div>
  ))}
</div>

            </div>
          </>
        )}

        {activeTab === "mission" && (
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text inline-block mb-6">Our Mission</h2>
            <p className="text-lg text-gray-300 font-muli">
              To bridge the gap between academia and industry by providing world-class development services, real-time mentorship, and innovative learning models to students, entrepreneurs, and businesses globally.
            </p>
          </div>
        )}

        {activeTab === "vision" && (
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text inline-block mb-6">Our Vision</h2>
            <p className="text-lg text-gray-300">
              To become the most impactful innovation-driven company in India — where students, startups, and enterprises converge to co-create future-proof solutions through technology, mentorship, and product strategy.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
