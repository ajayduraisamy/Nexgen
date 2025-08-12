'use client';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaChevronDown } from "react-icons/fa";
const serviceDetails: Record<
    string,
    {
        title: string;
        description: string;
        content: string;
        image: string;
        technologies: string[];
        faq: { question: string; answer: string }[];
    }
> = {
    'ai-development': {
        title: 'AI Development',
        description: 'Building intelligent systems that simulate human thinking.',
        content:
            'We provide cutting-edge AI solutions that empower businesses to automate processes, enhance decision-making, and gain deeper insights into their operations. From natural language processing and image recognition to autonomous systems, our AI services span across industries. We use modern AI frameworks like TensorFlow, PyTorch, and OpenAI APIs to deliver scalable and intelligent systems tailored to your business goals.\n\nAI can transform your customer interactions, optimize logistics, and even drive innovation in R&D. With our deep expertise in neural networks, machine learning pipelines, and AI cloud integrations, we ensure your product or system is future-ready. Our consulting begins with understanding your needs and ends with delivering production-ready AI applications that work reliably at scale.',
        image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754990647/AI-Development_ybqpad.webp',
        technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Scikit-learn', 'Python'],
       
        faq: [
            {
                question: "What types of AI solutions do you build for businesses?",
                answer:
                    "We develop a wide range of AI systems including chatbots, intelligent automation, computer vision, recommendation engines, and predictive analytics tailored for domains like healthcare, retail, education, and logistics."
            },
            {
                question: "Can you integrate AI into our existing application or workflow?",
                answer:
                    "Yes, we design custom AI APIs and models that can seamlessly integrate into your website, CRM, ERP, or mobile apps using secure and scalable REST or GraphQL APIs."
            },
            {
                question: "Do you provide AI consulting before starting the project?",
                answer:
                    "Absolutely. Our team conducts AI feasibility analysis, dataset evaluation, and model architecture planning before beginning development, ensuring ROI-driven outcomes."
            },
            {
                question: "Is our business data secure during AI model training?",
                answer:
                    "Yes. We ensure complete data confidentiality through end-to-end encryption, anonymization techniques, and compliance with standards like GDPR and HIPAA when applicable."
            },
            {
                question: "Which industries can benefit from your AI services?",
                answer:
                    "We serve multiple sectors such as edtech, fintech, e-commerce, healthcare, smart cities, and industrial automation. Our AI systems are adaptable to any business with structured or unstructured data."
            }
        ],
          
          
    },
    'web-development': {
        title: 'Web Development',
        description: 'Modern websites using Next.js, React, and more.',
        content:
            'Our web development team builds responsive, fast-loading, and SEO-friendly websites that drive conversions and engage users. Whether it’s a corporate website, eCommerce platform, or a full-stack web application, we deliver high-quality code and exceptional design.\n\nWe use frameworks like Next.js, React, Laravel, and Express to build both frontend and backend. We also implement CMS platforms like WordPress and Strapi when required, and ensure your website is optimized for mobile and desktop performance.',
        image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754991977/web-development_vjwsq5.jpg',
        technologies: ['Next.js', 'React', 'Tailwind CSS', 'Laravel', 'Node.js'],
       
        faq: [
            {
                question: "Will my website be optimized for SEO and performance?",
                answer:
                    "Yes, we build all websites with SEO best practices including semantic HTML, fast loading speed, mobile responsiveness, and proper meta tags to ensure high visibility on search engines."
            },
            {
                question: "Do you develop both the frontend and backend?",
                answer:
                    "Absolutely. We offer full-stack development — crafting beautiful UI with React or Next.js and building secure, scalable backend APIs using Node.js, Laravel, or Express."
            },
            {
                question: "Can I manage and update my website content without coding?",
                answer:
                    "Yes, we integrate CMS platforms like WordPress, Strapi, or Sanity so you can easily edit text, images, blogs, and more without any technical knowledge."
            },
            {
                question: "Is post-launch support or website maintenance available?",
                answer:
                    "Yes, we provide affordable maintenance packages that include bug fixes, content updates, security monitoring, and feature enhancements based on your business needs."
            },
            {
                question: "How do you ensure website security and data protection?",
                answer:
                    "We implement strong security measures such as HTTPS, input validation, secure authentication, regular vulnerability checks, and follow OWASP standards for web applications."
            }
        ],
          
          
    },
    'iot-development': {
        title: 'IoT Development',
        description: 'Smart device integration with cloud-based platforms.',
        content:
            'We offer IoT solutions that connect your physical devices with the digital world. From prototyping with ESP32 and Raspberry Pi to building large-scale IoT networks, our team ensures your devices communicate securely and efficiently.\n\nOur solutions are used in smart homes, industry automation, healthcare, and logistics. We support MQTT, HTTP, and cloud platforms like AWS IoT and Google Cloud IoT.',
        image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754992121/iot-development_dgxnlo.jpg',
        technologies: ['ESP32', 'Raspberry Pi', 'MQTT', 'AWS IoT', 'Firebase'],
       
        faq: [
            {
                question: "Can you build custom IoT prototypes and devices?",
                answer:
                    "Yes, we specialize in creating custom IoT prototypes using microcontrollers like ESP32, Arduino, or Raspberry Pi with tailor-made firmware for smart, connected products."
            },
            {
                question: "Do you support long-range communication like LoRa, NB-IoT, or BLE?",
                answer:
                    "Absolutely. Based on your application, we integrate LoRa, NB-IoT, BLE, Zigbee, or Wi-Fi to ensure reliable, long-distance connectivity for your IoT network."
            },
            {
                question: "Which platforms do you use for cloud and data integration?",
                answer:
                    "We work with AWS IoT Core, Google Cloud IoT, Firebase, and custom MQTT or REST servers to sync your device data with secure cloud services."
            },
            {
                question: "Can you build real-time dashboards to monitor devices?",
                answer:
                    "Yes. We develop interactive dashboards with live telemetry, alerts, and analytics using tools like Node.js, React, and Chart.js to give you full visibility and control."
            },
            {
                question: "Is remote device monitoring and control possible?",
                answer:
                    "Definitely. Our IoT systems support secure remote monitoring and control through web or mobile apps, making real-time access simple and reliable."
            }
        ],
          
          
    },
  
    'machine-learning': {
        title: 'Machine Learning',
        description: 'Train models that learn from data to make accurate predictions.',
        content:
            'Our machine learning services cover a range of use-cases including predictive analytics, classification, regression, clustering, and anomaly detection. We help organizations transform raw data into actionable insights using supervised and unsupervised learning techniques.\n\nWe build scalable machine learning pipelines using Python, Jupyter, and cloud-based ML tools. Our process includes data preprocessing, model selection, training, evaluation, deployment, and monitoring.',
        image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754991884/Machine-learning-development_mjyzfq.jpg',
        technologies: ['Scikit-learn', 'Pandas', 'XGBoost', 'NumPy', 'Jupyter'],
       
        faq: [
            {
                question: "Which industries do your machine learning solutions support?",
                answer:
                    "We build ML models for sectors like e-commerce (recommendation engines), healthcare (diagnostics), finance (fraud detection), edtech (student performance prediction), and more — fully tailored to your domain needs."
            },
            {
                question: "Do you handle data preprocessing and feature engineering?",
                answer:
                    "Yes, we manage the entire data pipeline including cleaning, normalization, outlier detection, and feature extraction to ensure high-quality inputs for model training."
            },
            {
                question: "Can you explain complex ML outputs to non-technical users?",
                answer:
                    "Absolutely. We present model results using simplified language, visual dashboards, and key business insights to help stakeholders make informed decisions without technical jargon."
            },
            {
                question: "Do you provide post-deployment monitoring and model tuning?",
                answer:
                    "Yes. We offer model performance tracking, drift detection, and scheduled retraining to maintain accuracy and relevance in production environments."
            },
            {
                question: "Can you build custom ML pipelines tailored to our business?",
                answer:
                    "Definitely. We design end-to-end ML workflows including data ingestion, model training, validation, deployment, and real-time prediction pipelines based on your goals and data structure."
            }
        ],
          
          
    },
    'deep-learning': {
        title: 'Deep Learning',
        description: 'Advanced neural networks for vision, NLP, and autonomous systems.',
        content:
            'We deliver deep learning solutions using CNNs, RNNs, transformers, and more for complex tasks like object detection, speech-to-text, and language generation.\n\nWe work with large datasets, GPU-accelerated training, and cloud infrastructure to train and deploy production-grade models using PyTorch and TensorFlow.',
        image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754991931/deep-learning_vj1h3w.jpg',
        technologies: ['PyTorch', 'TensorFlow', 'Keras', 'OpenCV', 'NVIDIA CUDA'],
       
        faq: [
            {
                question: "Which deep learning frameworks do you work with?",
                answer:
                    "We use leading frameworks like PyTorch, TensorFlow, Keras, and Hugging Face Transformers to build and train advanced neural networks."
            },
            {
                question: "Do you develop computer vision solutions with deep learning?",
                answer:
                    "Yes, we build robust CV applications including object detection, image classification, OCR, facial recognition, and real-time tracking using CNNs and YOLO models."
            },
            {
                question: "Can deep learning models run on mobile or embedded devices?",
                answer:
                    "Absolutely. We optimize and convert models using TensorFlow Lite or ONNX for deployment on Android, iOS, Raspberry Pi, and other edge platforms."
            },
            {
                question: "Is GPU-based training supported for faster model development?",
                answer:
                    "Yes. We utilize NVIDIA CUDA, Google Colab Pro, and cloud GPU instances (AWS, GCP) to accelerate training and reduce experimentation time."
            },
            {
                question: "Can you fine-tune existing pre-trained models for my use case?",
                answer:
                    "Yes, we fine-tune state-of-the-art models like BERT, GPT, YOLOv8, or EfficientNet to align with your domain-specific datasets and goals."
            }
        ],
          
          
    },
    'android-development': {
        title: 'Android Development',
        description: 'Create high-performance Android apps with modern tools.',
        content:
            'Our team designs native and cross-platform mobile applications using Kotlin, Java, and Flutter. We specialize in user-first design, offline capability, and secure APIs.\n\nWe deliver scalable apps, published to Google Play, and offer post-launch support and analytics integration.',
        image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754992039/mobile-app_yg95fq.jpg',
        technologies: ['Kotlin', 'Java', 'Flutter', 'Firebase', 'Retrofit'],
       
        faq: [
            {
                question: "Do you develop both native and cross-platform Android apps?",
                answer:
                    "Yes, we build high-performance native apps using Kotlin and Java, as well as cross-platform solutions with Flutter for Android and iOS compatibility."
            },
            {
                question: "Can you publish the app on the Google Play Store?",
                answer:
                    "Absolutely. We take care of app signing, Play Store submission, versioning, and future updates to ensure smooth launches."
            },
            {
                question: "Do your Android apps support offline functionality?",
                answer:
                    "Yes, we integrate offline-first features using local storage, SQLite, Room DB, or data caching with seamless sync when online."
            },
            {
                question: "Will the app run on all Android devices and versions?",
                answer:
                    "Yes, we test across multiple screen sizes and Android versions to ensure consistent performance and UI responsiveness."
            },
            {
                question: "Can you integrate payment systems, third-party APIs, or Firebase?",
                answer:
                    "Definitely. We integrate Razorpay, Google Pay, Stripe, RESTful APIs, and Firebase services like Auth, Firestore, and Analytics."
            }
        ],
          
          
    },
    'database-development': {
        title: 'Database Development',
        description: 'Design and optimize robust, scalable databases.',
        content:
            'We create efficient database systems for applications of any scale. From schema design to query optimization, our engineers ensure speed, security, and reliability.\n\nWe work with relational (MySQL, PostgreSQL) and NoSQL (MongoDB, Firebase) databases and integrate them with APIs, dashboards, or web apps.',
        image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754992081/database-development_qa6gph.png',
        technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Supabase'],
       
        faq: [
            {
                question: "Do you work with both relational and NoSQL databases?",
                answer:
                    "Yes, we design and manage relational databases like MySQL and PostgreSQL, as well as NoSQL systems like MongoDB and Firebase."
            },
            {
                question: "Can you optimize existing databases for better performance?",
                answer:
                    "Absolutely. We improve database performance through indexing, query optimization, normalization, and schema refactoring."
            },
            {
                question: "Do you provide secure database backup and migration services?",
                answer:
                    "Yes, we handle full backup, migration, rollback planning, and version control for smooth and safe transitions."
            },
            {
                question: "Can you build admin dashboards to manage database records?",
                answer:
                    "Yes, we create user-friendly admin panels or dashboards for real-time data management, filtering, and analytics."
            },
            {
                question: "How do you ensure database security?",
                answer:
                    "We implement encryption, role-based access, firewalls, and audit trails to safeguard sensitive data."
            }
        ],
          
          
    },
    'embedded-development': {
        title: 'Embedded Development',
        description: 'Develop firmware and embedded systems for real-time control.',
        content:
            'We specialize in embedded C, RTOS, and bare-metal firmware development. Our services include building custom device drivers, bootloaders, and signal processing routines for microcontrollers and SoCs.\n\nWe also support sensor integration, hardware prototyping, and device debugging using STM32, AVR, and ARM-based platforms.',
        image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754990744/Embedded-development_fbwbgw.png',
        technologies: ['C/C++', 'RTOS', 'STM32', 'ESP32', 'Keil'],
       
        faq: [
            {
                question: "Do you develop firmware for custom embedded hardware?",
                answer:
                    "Yes, we write low-level firmware for microcontrollers like STM32, AVR, and ESP32, tailored to your hardware architecture."
            },
            {
                question: "Can you assist with embedded system prototyping and PCB design?",
                answer:
                    "Absolutely. We help with schematic design, PCB layout, component selection, and prototyping for embedded applications."
            },
            {
                question: "Do you work with RTOS and real-time embedded systems?",
                answer:
                    "Yes, we support real-time control using FreeRTOS, timer-based logic, interrupt handling, and bare-metal programming."
            },
            {
                question: "Is sensor integration supported in your embedded projects?",
                answer:
                    "Yes, we integrate a wide range of sensors including motion, temperature, proximity, gas, and environmental sensors."
            },
            {
                question: "Can you perform debugging and hardware validation?",
                answer:
                    "Yes, we use JTAG, SWD, logic analyzers, multimeters, and oscilloscopes for in-depth embedded system debugging and testing."
            }
        ],
          
          
    },
    'cybersecurity-development': {
        title: 'Cybersecurity Development',
        description: 'Secure your systems from modern threats and vulnerabilities.',
        content:
            'We offer cybersecurity services including penetration testing, threat modeling, secure coding audits, and encryption implementation.\n\nWe help businesses meet compliance (GDPR, HIPAA) and integrate access control, identity verification, and firewall configurations.',
        image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754992213/cyber_hxx9il.jpg',
        technologies: ['OWASP', 'Metasploit', 'Nmap', 'SSL', 'JWT'],
       
        faq: [
            {
                question: "Do you provide penetration testing and vulnerability assessments?",
                answer:
                    "Yes, we offer comprehensive penetration testing, red teaming, and vulnerability analysis to identify and mitigate security risks."
            },
            {
                question: "Can you audit and secure our existing codebase?",
                answer:
                    "Absolutely. We perform secure code reviews, identify vulnerabilities, and provide actionable remediation strategies."
            },
            {
                question: "Do you help with data compliance like GDPR or HIPAA?",
                answer:
                    "Yes, we support organizations in meeting compliance standards such as GDPR, HIPAA, ISO 27001, and more."
            },
            {
                question: "Is encryption included in your cybersecurity solutions?",
                answer:
                    "Yes, we implement modern encryption protocols like SSL/TLS, AES-256, RSA, and secure JWT-based authentication systems."
            },
            {
                question: "Can you train our team in secure development practices?",
                answer:
                    "Yes, we conduct developer workshops covering secure coding, OWASP Top 10, and threat modeling techniques."
            }
        ],
          
          
    },
    'ui-ux-development': {
        title: 'UI/UX Development',
        description: 'Design intuitive and aesthetic digital experiences.',
        content:
            'Our design team crafts user-centric interfaces with strong visual hierarchies and accessibility principles. We focus on simplicity, brand alignment, and responsiveness.\n\nWe use Figma, XD, and Tailwind to create design systems, prototypes, and pixel-perfect frontend implementations.',
        image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1752244160/7706584_tdmtlh.jpg',
        technologies: ['Figma', 'Adobe XD', 'Tailwind CSS', 'CSS3', 'HTML5'],
       
        faq: [
            {
                question: "Do you create complete design systems and style guides?",
                answer:
                    "Yes, we deliver comprehensive design systems with reusable UI components, typography, color palettes, and brand guidelines."
            },
            {
                question: "Which tools do you use for UI/UX design?",
                answer:
                    "We primarily use Figma and Adobe XD to create interactive prototypes, user flows, and detailed screen designs."
            },
            {
                question: "Do your designs follow accessibility standards?",
                answer:
                    "Absolutely. We adhere to WCAG 2.1 to ensure keyboard navigation, contrast ratios, and screen reader compatibility."
            },
            {
                question: "Are your UI designs mobile-responsive?",
                answer:
                    "Yes, we ensure fully responsive layouts optimized for mobile, tablet, and desktop devices."
            },
            {
                question: "How do you collaborate with developers for design handoff?",
                answer:
                    "We provide dev-friendly Figma specs, assets, export-ready styles, and ongoing design support throughout implementation."
            }
        ],
          
          
    },
    'digital-marketing': {
        title: 'Digital Marketing',
        description: 'Grow your online presence through strategic digital campaigns.',
        content:
            'We drive brand awareness, lead generation, and online sales using SEO, SEM, content marketing, and paid advertising.\n\nWe optimize websites for search engines, manage social channels, and run targeted Google and Meta Ads. Our results are data-driven, conversion-focused, and transparent.',
        image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754990693/digital-marketing_eb0nmo.png',
        technologies: ['Google Ads', 'SEO Tools', 'Meta Business', 'Ahrefs', 'Canva'],
       
        faq: [
            {
                question: "Do you run paid ad campaigns on Google and Meta?",
                answer:
                    "Yes, we manage complete ad campaigns on Google Ads, Facebook, Instagram, and LinkedIn, including setup, targeting, and optimization."
            },
            {
                question: "Can you improve our website's SEO ranking?",
                answer:
                    "Absolutely. We provide on-page SEO, technical SEO, keyword research, and backlink strategies to boost your organic visibility."
            },
            {
                question: "Do you handle content marketing as well?",
                answer:
                    "Yes, we create SEO-optimized blog posts, landing pages, and social media content to support lead generation and branding."
            },
            {
                question: "Will I get reports on campaign performance?",
                answer:
                    "Yes, we provide regular performance reports with insights, KPIs, and recommendations to track ROI."
            },
            {
                question: "Do you offer social media management?",
                answer:
                    "Yes, we manage social media profiles, schedule posts, engage with audiences, and grow your online presence organically."
            }
        ],
          
          
    },
   
   'it-consulting-training': {
    title: 'IT Consulting & Corporate Training',
    description: 'Empowering enterprises and professionals with strategic IT consulting and hands-on training for real-world success.',
    content: `
        At DR-NEXGEN, we deliver enterprise-grade IT consulting and customized training programs tailored for businesses and institutions. 
        Our experts bring deep technical insights across AI, DevOps, Full-Stack, and emerging technologies to build scalable solutions and 
        train your teams on the tools that matter. Whether you’re modernizing your tech stack or upskilling your workforce, our approach 
        ensures knowledge transfer, innovation, and execution at every step.
        
        From system architecture and process automation to personalized training modules, we bridge business goals with cutting-edge 
        technical execution for maximum ROI.
    `,
    image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754991291/it-consulting-training_vfvflr.jpg',
    technologies: [
        'Cloud Consulting',
        'DevOps & CI/CD',
        'Python & Java',
        'Docker & Kubernetes',
        'AI/ML Ops',
        'Next.js / React',
        'Microservices Architecture',
    ],
    faq: [
        {
            question: "What industries do you provide IT consulting for?",
            answer: "We serve startups, enterprises, and educational institutions across healthcare, finance, manufacturing, and IT services."
        },
        {
            question: "Do you offer corporate training sessions?",
            answer: "Yes, we provide tailored corporate training programs in AI, DevOps, MERN stack, cloud platforms, and more."
        },
        {
            question: "Can you help modernize our legacy systems?",
            answer: "Absolutely. We specialize in migrating monolith systems to scalable microservices and modern web tech stacks."
        },
        {
            question: "Is on-site or remote training available?",
            answer: "Both are supported. We offer virtual bootcamps, on-site workshops, and hybrid models as per client needs."
        },
        {
            question: "Do you provide certifications after training?",
            answer: "Yes, all participants receive certification upon successful completion of our training programs."
        }
    ]
},
    'blockchain-development': {
        title: 'Blockchain Development',
        description: 'Secure and decentralized applications on blockchain.',
        content:
            'We specialize in creating decentralized applications (DApps), smart contracts, and blockchain integrations using Ethereum, Solidity, and Web3. From DeFi platforms to NFT marketplaces, our blockchain developers help you leverage distributed ledger technology for trustless, transparent systems.\n\nSecurity is our top priority. We follow best practices for contract auditing, wallet integration, and token development. Whether you’re launching a new blockchain product or integrating blockchain into an existing system, DRNEXGEN has the expertise to guide you.',
        image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754990846/blockchain-development_vymvh6.png',
        technologies: ['Ethereum', 'Solidity', 'Web3.js', 'Hardhat', 'IPFS'],
       
        faq: [
            {
                question: "Can you develop smart contracts on Ethereum?",
                answer:
                    "Yes, we build and audit smart contracts using Solidity for Ethereum and compatible EVM chains."
            },
            {
                question: "Do you build NFT platforms or marketplaces?",
                answer:
                    "Absolutely. We create full NFT solutions with minting, wallet integration, and marketplace functionality."
            },
            {
                question: "Is security auditing included in your service?",
                answer:
                    "Yes, we follow best practices and can partner with third-party auditors for critical blockchain applications."
            },
            {
                question: "Can blockchain be integrated into my existing app?",
                answer:
                    "Yes, we use Web3.js or APIs to seamlessly connect blockchain features to your current platform."
            },
            {
                question: "Do you support other blockchains like Polygon or BSC?",
                answer:
                    "Yes, we work with Ethereum, Polygon, Binance Smart Chain, and other EVM-compatible networks."
            }
        ],
          
          
    }
};

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
    const service = serviceDetails[params.slug];
    if (!service) return notFound();

    const gradientCombos = [
        ['from-red-400', 'to-yellow-500'],
        ['from-green-400', 'to-blue-500'],
        ['from-purple-500', 'to-pink-500'],
        ['from-teal-400', 'to-cyan-500'],
        ['from-orange-500', 'to-lime-500'],
        ['from-indigo-500', 'to-purple-500'],
        ['from-pink-500', 'to-red-500'],
        ['from-yellow-500', 'to-orange-500'],
        ['from-sky-400', 'to-blue-600'],
        ['from-emerald-400', 'to-teal-500'],
        ['from-fuchsia-500', 'to-rose-500'],
        ['from-gray-500', 'to-black']
    ];
    const gradientIndex = Math.floor(Math.random() * gradientCombos.length);
    const [fromColor, toColor] = gradientCombos[gradientIndex];

    return (
        <div className="t-[112px] sm:pt-[112px] md:pt-[120px] lg:pt-[128px] bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen font-[Mooli]">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Image */}
                <div className="animate-fade-in-left">
                    <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={600}
                        className="rounded-3xl shadow-2xl object-cover w-full"
                    />
                </div>

                {/* Right - Content */}
                <div className="animate-fade-in-right">
                    <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
                        {service.title}
                    </h1>
                    <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                    </p>
                    <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line leading-loose text-lg">
                        {service.content}
                    </p>

                    <div className="mt-8">
                        <h3 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400">Technologies Used</h3>
                        <ul className="flex flex-wrap gap-3">
                            {service.technologies.map((tech, idx) => (
                                <li
                                    key={idx}
                                    className={`bg-gradient-to-r ${fromColor} ${toColor} text-white px-4 py-2 rounded-full text-base font-semibold shadow-md`}
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Link href="/contact">
                        <button className={`mt-10 inline-block bg-gradient-to-r ${fromColor} ${toColor} hover:opacity-90 text-white px-8 py-4 rounded-xl shadow-xl text-lg font-bold transition-all duration-300`}>
                            Start a Project
                        </button>
                    </Link>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-5xl mx-auto px-4 py-20 animate-fade-in-up">
                <h2 className="text-4xl font-bold mb-12 text-center text-[#1c2e4a] dark:text-green-400">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-3">
                    {service.faq.map((item, idx) => (
                        <details
                            key={idx}
                            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl group transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:shadow-2xl"
                        >
                            <summary className="font-semibold text-lg text-[#1c2e4a] dark:text-green-300 cursor-pointer flex justify-between items-center">
                                <span>{item.question}</span>
                                <FaChevronDown className="text-gray-500 group-open:rotate-180 transition-transform duration-300" />
                            </summary>
                            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                                {item.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </div>
    );
}
