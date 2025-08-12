// src/components/Slidebar.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import {
    FaComments,
    FaWhatsapp,
    FaTimes,
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

const responses = {
    "hi": "👋 Hello! I’m DRNEXGEN, your AI assistant. How can I help you today?",
    "hii": "👋 Hello! I’m DRNEXGEN, your AI assistant. How can I help you today?",
    "hello": "👋 Hello! I’m DRNEXGEN, your AI assistant. How can I help you today?",
    "help": "🤖 How can I assist you today? You can ask about our services, pricing, or anything else!",
    "services": `✨ Our Services:\n\n- 1. AI Development\n- 2. Web Development\n- 3. Embedded Systems\n- 4. Cybersecurity\n- 5. Blockchain\n- 6. Machine Learning\n- 7. IoT Solutions\n- 8. Mobile App Development\n- 9. Cloud Solutions\n- 10. Data Analytics\n\nFor more details, type "ML", "Web", "AI", "blockchain" or visit our website.`,
    "service": `✨ Our Services:\n\n- 1. AI Development\n- 2. Web Development\n- 3. Embedded Systems\n- 4. Cybersecurity\n- 5. Blockchain\n- 6. Machine Learning\n- 7. IoT Solutions\n- 8. Mobile App Development\n- 9. Cloud Solutions\n- 10. Data Analytics\n\nFor more details, type "ML", "Web", "AI", "blockchain" or visit our website.`,
    "ml": "🤖 Machine Learning:\nWe build predictive models using Python, Scikit-Learn, and TensorFlow.\n₹ Cost: ₹7,000 to ₹10,000 depending on complexity.",
    "machinelearning": "🤖 Machine Learning:\nWe build predictive models using Python, Scikit-Learn, and TensorFlow.\n₹ Cost: ₹7,000 to ₹10,000 depending on complexity.",
    "web": "💻 Web Development:\nIncludes static, dynamic, and eCommerce websites.\n₹ Cost: ₹4,000 to ₹8,000 based on features.",
    "ai": "🤖 AI Services:\nCustom AI-powered chatbots, recommendation systems, etc.\n₹ Cost: ₹5,000 to ₹11,000 depending on logic.",
    "blockchain": "🛠 Blockchain:\nSmart contract & dApp dev on Ethereum using Solidity.\n₹ Cost: ₹10,000 to ₹15,000.",
    "default": "❓ Sorry, I didn’t understand. Type \"services\", \"ML\", \"Web\", \"AI\", \"blockchain\" for help."
};

export default function Slidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showChat, setShowChat] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [errors, setErrors] = useState({});
    const [chatLog, setChatLog] = useState([]);
    const [chatInput, setChatInput] = useState('');
    const chatContainerRef = useRef(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatLog]);

    const toggleChatOptions = () => {
        setIsOpen(!isOpen);
        setShowChat(false);
        setShowForm(false);
        setChatLog([]);
        setChatInput('');
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email required';
        if (!formData.phone || formData.phone.length < 10) newErrors.phone = 'Valid phone number required';
        if (!formData.message) newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Form submitted successfully!');
            setFormData({ name: '', email: '', phone: '', message: '' });
            setErrors({});
        }
    };

    const handleChatSubmit = (e) => {
        e.preventDefault();
        if (!chatInput.trim()) return;

        const userMsg = chatInput.toLowerCase();
        const reply = responses[userMsg] || responses.default;

        setChatLog(prev => [...prev, { sender: 'user', msg: chatInput }, { sender: 'bot', msg: reply }]);
        setChatInput('');

        if (reply === responses.default) {
            setShowChat(false);
            setShowForm(true);
        }
    };

    const openChat = () => {
        setShowChat(true);
        if (chatLog.length === 0) {
            setChatLog([{ sender: 'bot', msg: responses["hi"] }]);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            
            {!isOpen ? (
                <button
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
                    onClick={toggleChatOptions}
                    title="Open Chat"
                >
                    <FaComments className="text-xl" />
                </button>
            ) : (
                <div className="relative flex flex-col items-end gap-3">
                    <button
                        className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full p-1 text-xs z-10 hover:scale-110"
                        onClick={toggleChatOptions}
                    >
                        <FaTimes />
                    </button>

                    {!showChat && !showForm && (
                        <>
                            <button
                                onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                                className="bg-green-500 text-white w-14 h-14 flex items-center justify-center rounded-full shadow hover:scale-110 transition"
                                title="WhatsApp"
                            >
                                <FaWhatsapp className="text-xl" />
                            </button>

                            <button
                                onClick={openChat}
                                className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow hover:scale-110 transition"
                                title="Chat"
                            >
                                <FaComments className="text-xl" />
                            </button>
                        </>
                    )}

                    {showChat && (
                       <div className="ml-auto mr-[-10px] bg-[#1c2e4a] p-3 sm:p-4 rounded-2xl shadow-2xl w-[95vw] sm:w-[420px] text-base space-y-4 min-h-[460px] border border-gray-200 dark:border-gray-700">

                            <div ref={chatContainerRef} className="h-72 sm:h-80 overflow-y-auto bg-white dark:bg-gray-800 p-3 space-y-2 rounded-lg">
                                {chatLog.map((entry, index) => (
                                    <p
                                        key={index}
                                        className={`text-sm px-4 py-2 rounded-xl max-w-[80%] whitespace-pre-line ${
                                            entry.sender === 'user'
                                                ? 'ml-auto bg-gradient-to-r from-blue-400 to-blue-600 text-white'
                                                : 'mr-auto bg-gradient-to-r from-green-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 text-gray-900 dark:text-white'
                                        }`}
                                    >
                                        {entry.msg}
                                    </p>
                                ))}
                            </div>

                            <form onSubmit={handleChatSubmit} className="flex gap-2 mt-4">
                                <input
    type="text"
    placeholder="Ask about questions..."
    value={chatInput}
    onChange={(e) => setChatInput(e.target.value)}
    className="flex-grow border border-gray-300 dark:border-gray-600 px-4 py-3 rounded-xl bg-black text-white placeholder-gray-400"
/>

                                <button
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl"
                                >
                                    <FiSend />
                                </button>
                            </form>
                        </div>
                    )}

                    {showForm && (
                        <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-2xl w-[95vw] sm:w-[420px] text-base space-y-4 border border-gray-200 dark:border-gray-700">
                            <p className="text-lg font-bold text-gray-900 dark:text-white flex justify-between">
                                Need Help? <button onClick={toggleChatOptions}><FaTimes /></button>
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-3">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 dark:border-gray-600 px-4 py-3 rounded-xl text-black dark:text-white dark:bg-gray-800"
                                />
                                {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 dark:border-gray-600 px-4 py-3 rounded-xl text-black dark:text-white dark:bg-gray-800"
                                />
                                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 dark:border-gray-600 px-4 py-3 rounded-xl text-black dark:text-white dark:bg-gray-800"
                                />
                                {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}

                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 dark:border-gray-600 px-4 py-3 rounded-xl text-black dark:text-white dark:bg-gray-800"
                                    rows={3}
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:to-green-800 text-white py-3 rounded-xl flex justify-center items-center gap-2"
                                >
                                    <FiSend /> Submit
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
