'use client';

import {
    FaHome,
    FaUser,
    FaBriefcase,
    FaProjectDiagram,
    FaEnvelope, 
    FaRobot,
    FaLaptopCode,
    FaMobileAlt,
    FaNetworkWired,
    FaLock,
    FaPalette,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaWhatsapp,
    FaRegNewspaper

} from 'react-icons/fa';

import Link from 'next/link';

const links = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaUser /> },
    { name: "Services", path: "/services", icon: <FaBriefcase /> },
    { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> }, 
    { name: "Blogs", path: "/Blogs", icon: <FaRegNewspaper /> },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[black] dark:bg-gray-900 text-white py-12 px-4 w-full">
            <div className="max-w-[1800px] mx-auto">
                {/* Main Footer Content - Horizontal Layout */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 items-start justify-between">

                    {/* DRNEXGEN Technologies - Now in first column */}
                    <div className="lg:w-[38%]">
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">DRNEXGEN Technologies</h3>
                        <p className="text-gray-300 leading-relaxed text-justify text-sm">
                            DRNEXGEN Technologies Pvt Ltd is a service-based tech startup committed to delivering cutting-edge
                            solutions in Artificial Intelligence, Machine Learning, Web & Mobile Development, IoT, Embedded Systems,
                            Cybersecurity, and Blockchain. We empower students and professionals with real-world, industry-relevant
                            innovations through advanced technology services, practical training, and exceptional project execution.
                            Our mission is to shape the next generation of engineers with a strong focus on quality, innovation, and hands-on learning.
                        </p>
                    </div>

                    {/* Services and Links - Combined in horizontal row */}
                    <div className="w-full lg:w-[55%] flex flex-col sm:flex-row gap-8 sm:gap-4 justify-between">
                        {/* Our Services */}
                        <div className="sm:w-1/3">
                            <h4 className="text-lg font-semibold mb-4 border-b border-green-400 pb-2 inline-block">Our Services</h4>
                            <ul className="space-y-3 text-gray-300 text-sm ">
                                {[
                                    { icon: <FaRobot className="text-green-400" />, text: "AI & Machine Learning", href: "/services/ai-development" },
                                    { icon: <FaLaptopCode className="text-blue-400" />, text: "Web Development", href: "/services/web-development" },
                                    { icon: <FaMobileAlt className="text-purple-400" />, text: "Android & Flutter Apps", href: "/services/android-development" },
                                    { icon: <FaNetworkWired className="text-yellow-400" />, text: "IoT & Embedded", href: "/services/iot-development" },
                                    { icon: <FaLock className="text-pink-400" />, text: "Blockchain & Cybersecurity", href: "/services/blockchain-development" },
                                    { icon: <FaPalette className="text-red-400" />, text: "UI/UX & Digital Marketing", href: "/services/digital-marketing" },

                                ].map((item, index) => (
                                    <li key={index} className="group">
                                        <Link href={item.href} className="footer-link">
                                            {item.icon}
                                            <span className="group-hover:translate-x-1 transition-transform">{item.text}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div className="lg:w-[20%]">
                            <h4 className="text-lg font-semibold mb-4 border-b border-green-400 pb-2 inline-block">
                                Quick Links
                            </h4>
                            <ul className="space-y-3 text-gray-300 text-sm">
                                {links.map(({ name, path, icon }) => (
                                    <li key={name} className="footer-link">
                                        <Link
                                            href={path}
                                            className="hover:text-green-400 transition-all duration-200 flex items-center gap-2"
                                        >
                                            <span className="text-base">{icon}</span>
                                            <span className="group-hover:translate-x-1 transition-transform">
                                                {name}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>


                        {/* Follow Us */}
                        <div className="lg:w-1/4">
                            <h4 className="text-lg font-semibold mb-4 border-b border-green-400 pb-2 inline-block">Connect With Us</h4>
                            <ul className="space-y-3 text-gray-300 text-sm">
                                {[
                                    { icon: <FaFacebookF className="text-blue-500" />, text: "Facebook", href: "#" },
                                    { icon: <FaTwitter className="text-blue-400" />, text: "Twitter", href: "#" },
                                    { icon: <FaInstagram className="text-pink-500" />, text: "Instagram", href: "#" },
                                    { icon: <FaLinkedin className="text-blue-300" />, text: "LinkedIn", href: "#" },
                                    { icon: <FaWhatsapp className="text-green-500" />, text: "WhatsApp", href: "#" },
                                    { icon: <FaEnvelope className="text-yellow-500" />, text: "Email Us", href: "mailto:ajayduraisamy@gmail.com" },

                                ].map((item, index) => (
                                    <li key={index} className="footer-link">
                                        <a href={item.href} className="flex items-center gap-2 hover:text-white transition-all duration-200">
                                            <span className="group-hover:scale-110 transition-transform">{item.icon}</span>
                                            <span className="group-hover:translate-x-1 transition-transform">{item.text}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-m">
                    <div className="flex flex-col md:flex-row justify-between items-center text-white gap-4">
                        <div>
                            © {year} DRNEXGEN Pvt Ltd. All rights reserved.
                        </div>
                       
                    </div>
                </div>
            </div>
        </footer>
    );
}