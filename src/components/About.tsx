'use client';

import { useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const services = [
    {
        title: "AI Product Development",
        image: "https://res.cloudinary.com/diazxuntv/image/upload/v1754990091/product-dev_zzvzmm.png",
        desc: `Enjoy an AI-driven application from the ground up that meets your business’s unique needs. If you have a specific AI project in mind that you’d like us to bring to life, our AI product development services are for you. We’ll create intelligent AI solutions that can analyze customer behavior, automate customer services and meet other unique business needs you may have for your business. Go from idea to launch quickly to transform your business with powerful AI.`,
    },
    {
  title: "Artificial Neural Networks",
  image: "https://res.cloudinary.com/diazxuntv/image/upload/v1754990122/Ann_npgpnf.png",
  desc: "Artificial Neural Networks (ANN) mimic the human brain to solve complex problems. They are ideal for pattern recognition, prediction, and classification tasks in AI-driven applications like image recognition, fraud detection, and recommendation systems.",
},
    {
        title: "Cloud-based AI Solutions",
        image: "https://res.cloudinary.com/diazxuntv/image/upload/v1754990181/language-process_fkrfwn.png",
        desc: `Bring the power of the cloud into your business. Get cloud-based AI solutions that deliver high performance and scalability, with automation that empowers you to improve efficiency, reduce manual labor and deeply personalize experiences for AI interactions and solutions. The best cloud AI delivery services are now at your fingertips, and it will only take your business from height to height, fueling success and rapid business development.`,
    },
    {
        title: "Chatbot Development",
        image: "https://res.cloudinary.com/diazxuntv/image/upload/v1754990220/chatbot-develop_kkldpb.png",
        desc: `Get the best chatbot development services to help you build and mAIntAIn intelligent virtual assistants. These models are a valuable tool for your business, augmenting customer service to improve lead generation, encourage engagement and improve customer experiences to rally sales. Maximize your AI potential with our end-to-end chatbot development services that help you deliver quality brand interactions that keep customers hooked to your brand.`,
    },
    {
        title: "Voice Bot Development",
        image: "https://res.cloudinary.com/diazxuntv/image/upload/v1754990261/voice-dev_p2pf7h.png",
        desc: `Voice bots can understand spoken words and are powered by artificial intelligence to interact with users and hold human-like discussions. Our voice-enabled chatbot development services bring a human touch to your customer service strategies, providing solutions tailored to your business-specific needs. Revolutionize how you provide customer support with voice bots that can respond to customer queries quickly to streamline interactions.`,
    },
   
    {
        title: "Customized AI Programming",
        image: "https://res.cloudinary.com/diazxuntv/image/upload/v1754990306/ai-programming_weff0d.png",
        desc: `Get custom AI solutions, with development services geared at creating a company-specific AI solution for your business. Your business may have a custom AI vision that existing and contemporary solutions just can’t quite capture. That’s where Dot Com Infoway comes in, providing mature and highly personalized AI development. They address your business’s unique needs, expectations and specifications to elevate your competitive advantage.`,
    },
    
    {
        title: "Natural Language Processing",
        image: "https://res.cloudinary.com/diazxuntv/image/upload/v1754990339/cloud-ai_kactli.png",
        desc: `Intelligent AI solutions that can read and understand natural language for a variety of use cases. Creating smart assistant functionalities that can extract information from text to provide insightful summaries. We also build smart NLP services with sentiment analysis to help you gauge the overall feel around your brand. From speech recognition and predictive text to text classification and summarization, DCI delivers natural language processing models that do it all.`,
    },
    {
        title: "Computer Vision",
        image: "https://res.cloudinary.com/diazxuntv/image/upload/v1754990378/monitoring_kgoydn.png",
        desc: `Experience expertise in computer vision development including optical character recognition, which leverages deep learning algorithms to track objects in images and videos. Whether you need an intelligent and highly accurate image classification model, or an object detection and tracking solution, Dot Com Infoway delivers. Move into the future of AI development with flexible computer vision development services that turn logic into reality.`,
    },
];

export default function About() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    return (
        <section id="ai-services" className=" ai-services bg-[#140840] py-20 px-4 md:px-16 text-white">
            {/* Header */}
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="font-muli text-4xl  leading-snug mb-4 ">
                    Smart AI Solutions for Even <br />
                    <span className="font-muli text-cyan-400 ">Smarter Businesses</span>
                </h2>
                <p className="font-muli text-lg">
                    Explore Our Core AI Services: Unlock Innovation and Drive Success with DCI’s Expertise.
                </p>
            </div>

            {/* Carousel Buttons */}
            <div className="flex justify-end max-w-7xl mx-auto mb-6 gap-3 pr-2">
                <button
                    ref={prevRef}
                    className="p-3 rounded-full bg-gradient-to-br from-[#b4b9e7] to-[#6c7cc6] text-white shadow-md hover:scale-105 transition"
                >
                    <FaArrowLeft />
                </button>
                <button
                    ref={nextRef}
                    className="p-3 rounded-full bg-gradient-to-br from-[#00bfff] to-[#0077ff] text-white shadow-md hover:scale-105 transition"
                >
                    <FaArrowRight />
                </button>
            </div>

            {/* Swiper Carousel */}
            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    if (
                        swiper.params.navigation &&
                        typeof swiper.params.navigation !== 'boolean'
                    ) {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }
                }}
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="max-w-7xl mx-auto"
            >
                {services.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-[black] p-6 rounded-xl shadow-lg h-full flex flex-col justify-start min-h-[420px]">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-20 h-20 object-contain mx-auto mb-4"
                            />
                            <h3 className="text-xl  text-white text-center mb-3">
                                {item.title}
                            </h3>
                            <p
                                className={`text-m text-gray-300 font-muli text-justify transition-all duration-300 ${expandedIndex === index ? '' : 'line-clamp-5'
                                    }`}
                            >
                                {item.desc}
                            </p>
                            <button
                                onClick={() =>
                                    setExpandedIndex(expandedIndex === index ? null : index)
                                }
                                className="text-cyan-400 mt-5 text-l hover:underline"
                            >
                                {expandedIndex === index ? 'Read Less' : 'Read More'}
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
