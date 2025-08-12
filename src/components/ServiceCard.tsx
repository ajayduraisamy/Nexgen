'use client';

import Link from 'next/link';
import {
    FaBrain, FaGamepad, FaRobot, FaCode, FaMobileAlt, FaDatabase, FaMicrochip,
    FaPaintBrush, FaBullhorn, FaNetworkWired, FaLock, FaProjectDiagram, FaCubes, FaCloud, FaLaptopCode, FaArrowRight
} from 'react-icons/fa';

const servicesCard = [
    {
        title: 'AI Development',
        slug: 'ai-development',
        icon: <FaRobot className="text-4xl mb-4" />,
        description: 'Create intelligent systems that simulate human reasoning and automate decision-making.',
    },
    {
        title: 'Machine Learning',
        slug: 'machine-learning',
        icon: <FaBrain className="text-4xl mb-4" />,
        description: 'Develop models that learn from data to make predictions and drive automation.',
    },
    {
        title: 'Deep Learning',
        slug: 'deep-learning',
        icon: <FaProjectDiagram className="text-4xl mb-4" />,
        description: 'Build neural network-based solutions for vision, speech, and more.',
    },
    {
        title: 'Web Development',
        slug: 'web-development',
        icon: <FaCode className="text-4xl mb-4" />,
        description: 'Build full-stack responsive websites using modern frameworks like Next.js, MERN, and Laravel.',
    },
    {
        title: 'Android Development',
        slug: 'android-development',
        icon: <FaMobileAlt className="text-4xl mb-4" />,
        description: 'Develop high-performance Android apps using Kotlin, Java, and Flutter.',
    },

    
    {
        title: 'Game Development',
        slug: 'Game-development',
        icon: <FaGamepad className="text-4xl mb-4" />,
        description: 'Develop immersive gaming experiences using Unity, Unreal Engine, and more.',
    },
    {
        title: 'Database Development',
        slug: 'database-development',
        icon: <FaDatabase className="text-4xl mb-4" />,
        description: 'Design scalable and secure databases using MySQL, MongoDB, Firebase, and PostgreSQL.',
    },
    {
        title: 'IoT Development',
        slug: 'iot-development',
        icon: <FaNetworkWired className="text-4xl mb-4" />,
        description: 'Integrate smart devices and sensors with IoT platforms using ESP32, Raspberry Pi.',
    },
    {
        title: 'Embedded Development',
        slug: 'embedded-development',
        icon: <FaMicrochip className="text-4xl mb-4" />,
        description: 'Program low-level embedded systems with microcontrollers and real-time operating systems.',
    },
    {
        title: 'Cloud Computing',
        slug: 'cloud-computing',
        icon: <FaCloud className="text-4xl mb-4" />,
        description: 'Leverage cloud platforms like AWS, Azure, and Google Cloud for scalable applications.',
    },
    {
        title: 'Cybersecurity Development',
        slug: 'cybersecurity-development',
        icon: <FaLock className="text-4xl mb-4" />,
        description: 'Build secure systems with encryption, penetration testing, and access control.',
    },
    {
        title: 'UI/UX Development',
        slug: 'ui-ux-development',
        icon: <FaPaintBrush className="text-4xl mb-4" />,
        description: 'Design user-friendly interfaces and intuitive experiences using Figma, XD & Tailwind.',
    },
    {
        title: 'Digital Marketing',
        slug: 'digital-marketing',
        icon: <FaBullhorn className="text-4xl mb-4" />,
        description: 'Promote brands using SEO, social media, email marketing, and Google Ads.',
    },
    {
        title: 'Blockchain Development',
        slug: 'blockchain-development',
        icon: <FaCubes className="text-4xl mb-4" />,
        description: 'Create decentralized apps and smart contracts using Ethereum, Solidity, and Web3.',
    },
    {
        title: 'IT Consulting & Training',
        slug: 'it-consulting-training',
        icon: <FaLaptopCode className="text-4xl mb-4" />,
        description: 'Provide expert guidance and training on IT strategies, tools, and best practices.',
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 px-4 md:px-16 bg-[#00040f] text-white">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-white">Our Services</h2>
                <p className="mt-4 text-lg text-gray-400">
                    We provide top-tier project development services across cutting-edge technologies and domains.
                </p>
            </div>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {servicesCard.map((service, index) => (
                    <div
                        key={index}
                        className="group/card service-card  w-full h-full flex flex-col items-center text-center p-6 rounded-xl border border-[#1e293b] bg-[#0a0a0a] transition-all duration-500 ease-in-out hover:bg-gradient-to-br hover:from-[#004AAD] hover:to-[#01E4A4] hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer"
                    >
                 
                  
                
                        <div className="text-cyan-400 group-hover:text-white text-4xl mb-4 transition duration-300">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white z-10">
                            {service.title}
                        </h3>
                        <p className="text-sm  mb-2 text-white group-hover:text-white z-10">
                            {service.description}
                        </p>
                        <Link href={`/services/${service.slug}`} className="service-button  mt-5 inline-flex items-center justify-center gap-2 px-5 py-2.5">
  <span className="arrow-icon">
    <FaArrowRight />
  </span>
</Link>






                    </div>
                ))}
            </div>
        </section>
    );
}
