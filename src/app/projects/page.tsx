'use client';

import Link from 'next/link';
import Image from 'next/image';

const categories = [
    {
        title: 'AI Development',
        slug: 'ai-development',
        image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754990647/AI-Development_ybqpad.webp',
    },
    {
        title: 'Machine Learning',
        slug: 'machine-learning',
        image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754991884/Machine-learning-development_mjyzfq.jpg',
    },
    {
        title: 'Deep Learning',
        slug: 'deep-learning',
        image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754991931/deep-learning_vj1h3w.jpg',
    },
    {
        title: 'Web Development',
        slug: 'web-development',
        image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754991977/web-development_vjwsq5.jpg',
    },
    {
        title: 'Android Development',
        slug: 'android-development',
        image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754992039/mobile-app_yg95fq.jpg',
    },
    {
        title: 'Database Development',
        slug: 'database-development',
        image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754992081/database-development_qa6gph.png',
    },
    {
        title: 'IoT Development',
        slug: 'iot-development',
        image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754992121/iot-development_dgxnlo.jpg',
    },
    {
        title: 'Embedded Development',
        slug: 'embedded-development',
        image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754990744/Embedded-development_fbwbgw.png',
    },
    {
        title: 'Cybersecurity Development',
        slug: 'cybersecurity-development',
        image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754992213/cyber_hxx9il.jpg',
    },
    {
        title: 'UI/UX Development',
        slug: 'ui-ux-development',
        image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1752244160/7706584_tdmtlh.jpg',
    },
    {
        title: 'Digital Marketing',
        slug: 'digital-marketing',
        image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754990693/digital-marketing_eb0nmo.png',
    },
    {
        title: 'Blockchain Development',
        slug: 'blockchain-development',
        image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754990846/blockchain-development_vymvh6.png',
    },
];

export default function ProjectsPage() {
    return (
        <section className="t-[112px] sm:pt-[112px] md:pt-[120px] lg:pt-[128px] py-20 px-4 md:px-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-extrabold text-orange-600 dark:text-green-400">Project Categories</h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    Explore our development domains and discover innovative project solutions.
                </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {categories.map((cat, index) => (
                    <Link href="#" key={index}>
                        <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition bg-white dark:bg-[#1c2e4a]">
                            <Image
                                src={cat.image}
                                alt={cat.title}
                                width={600}
                                height={600}
                                className="w-full h-52 object-cover"
                            />
                            <div className="p-5 text-center">
                                <h3 className="text-xl font-semibold">{cat.title}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
