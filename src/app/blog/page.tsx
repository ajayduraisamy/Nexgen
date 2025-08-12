
import Link from 'next/link';

export const metadata = {
  title: 'Our Blog | DR-NEXGEN Technologies',
  description:
    'Explore expert insights on AI, Digital Marketing, Embedded Systems, Blockchain, Mobile App Development, and Custom Software from DR-NEXGEN Technologies.',
};

const blogData = [
  {
    slug: 'blog1',
    title: 'Top 5 AI Tools in 2025',
    date: '2025-07-29',
    desc: 'Explore the most powerful and trending AI tools of 2025 that are transforming businesses worldwide.',
    image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754990647/AI-Development_ybqpad.webp',
  },
  {
    slug: 'blog2',
    title: 'Why Digital Marketing Still Matters',
    date: '2025-07-27',
    desc: 'In the age of AI, human-centric digital marketing remains critical for brand trust and growth.',
    image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754990693/digital-marketing_eb0nmo.png',
  },
  {
    slug: 'blog3',
    title: 'Getting Started with Embedded Systems',
    date: '2025-07-25',
    desc: 'Learn the basics of embedded systems and how they power everyday smart devices.',
    image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754990744/Embedded-development_fbwbgw.png',
  },
  {
    slug: 'blog4',
    title: 'The Rise of Blockchain in Businesses',
    date: '2025-07-22',
    desc: 'Explore how blockchain is revolutionizing transparency and security in industries.',
    image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754990846/blockchain-development_vymvh6.png',
  },
  {
    slug: 'blog5',
    title: 'Custom Software Development Trends in 2025',
    date: '2025-07-20',
    desc: 'Discover the top trends shaping scalable and adaptive custom software this year.',
    image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754991291/it-consulting-training_vfvflr.jpg',
  },
  {
    slug: 'blog6',
    title: 'Mobile App Development for Startups',
    date: '2025-07-18',
    desc: 'Essential insights for startups planning to build robust and user-friendly mobile apps.',
    image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754991336/mobile-app_n0ak5m.jpg',
  },
];

export default function BlogPage() {
  return (
    <div className="px-4 py-10 sm:px-8 md:px-16 max-w-7xl mx-auto mt-12 lg:">
      <h1 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
        Insights & Innovations from DRNEXGEN
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogData.map((blog) => (
          <Link href={`/blog/${blog.slug}`} key={blog.slug}>
            <div className="h-full bg-white dark:bg-[#0f172a] rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col group">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-xl font-semibold mb-1 group-hover:text-blue-600 transition">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {blog.date}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                    {blog.desc}
                  </p>
                </div>
                <div className="mt-4 flex justify-center">
                  <span className="text-blue-600 font-medium transition hover:scale-105">
                    Read More →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
