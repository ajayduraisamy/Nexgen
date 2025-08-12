import { notFound } from 'next/navigation';
import Link from 'next/link';

const blogData = [
  {
    slug: 'blog1',
    title: 'Top 5 AI Tools in 2025',
    date: '2025-07-29',
    desc: 'Explore the most powerful and trending AI tools of 2025 that are transforming businesses worldwide.',
    content: `
      <p>AI tools are reshaping how businesses operate. In 2025, the following tools stand out:</p>
      <ul className="list-disc pl-5 mb-4">
        <li>ChatGPT Enterprise</li>
        <li>Runway Gen-3</li>
        <li>Midjourney v6</li>
        <li>Claude 3.5 Sonnet</li>
        <li>Google Gemini Pro</li>
      </ul>
      <p>These tools offer automation, creativity, and analytics at a level that was unimaginable before.</p>
    `,
    image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754990647/AI-Development_ybqpad.webp',
  },
  {
    slug: 'blog2',
    title: 'Why Digital Marketing Still Matters',
    date: '2025-07-27',
    desc: 'In the age of AI, human-centric digital marketing remains critical for brand trust and growth.',
    content: `
      <p>Despite the rise of automation, digital marketing still plays a crucial role in building emotional connections with users. Tactics like SEO, PPC, and content marketing are evolving, but their core importance remains.</p>
    `,
    image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754990693/digital-marketing_eb0nmo.png',
  },
  {
    slug: 'blog3',
    title: 'Getting Started with Embedded Systems',
    date: '2025-07-25',
    desc: 'Learn the basics of embedded systems and how they power everyday smart devices.',
    content: `
      <p>Embedded systems are specialized computing systems that perform dedicated functions. They are found in medical devices, automotive controls, and smart home tech.</p>
    `,
    image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754990744/Embedded-development_fbwbgw.png',
  },
  {
    slug: 'blog4',
    title: 'The Rise of Blockchain in Businesses',
    date: '2025-07-22',
    desc: 'Explore how blockchain is revolutionizing transparency and security in industries.',
    content: `
      <p>Blockchain offers tamper-proof ledgers for transactions. It's being adopted in finance, supply chains, and digital identity management.</p>
    `,
    image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754990846/blockchain-development_vymvh6.png',
  },
  {
    slug: 'blog5',
    title: 'Custom Software Development Trends in 2025',
    date: '2025-07-20',
    desc: 'Discover the top trends shaping scalable and adaptive custom software this year.',
    content: `
      <p>In 2025, low-code platforms, AI integration, and cloud-native development dominate custom software trends. Businesses seek scalability and cost-efficiency.</p>
    `,
    image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754991291/it-consulting-training_vfvflr.jpg',
  },
  {
    slug: 'blog6',
    title: 'Mobile App Development for Startups',
    date: '2025-07-18',
    desc: 'Essential insights for startups planning to build robust and user-friendly mobile apps.',
    content: `
      <p>Startups should focus on user experience, fast loading, and seamless integrations. React Native and Flutter are two popular frameworks driving mobile innovation.</p>
    `,
    image: 'https://res.cloudinary.com/diazxuntv/image/upload/v1754991336/mobile-app_n0ak5m.jpg',
  },
];

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blog = blogData.find((b) => b.slug === params.slug);
  if (!blog) return notFound();
  return {
    title: `${blog.title} | DR-NEXGEN Technologies`,
    description: blog.desc,
  };
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const blog = blogData.find((b) => b.slug === params.slug);
  if (!blog) return notFound();
  const related = blogData.filter((b) => b.slug !== blog.slug).slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 mt-12">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
        {blog.title}
      </h1>
      <p className="text-gray-500 mb-2">{blog.date}</p>
      <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-lg mb-6" />

      <div className="prose prose-lg dark:prose-invert mb-10" dangerouslySetInnerHTML={{ __html: blog.content }} />

      <div className="border-t pt-6 mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">FAQs</h2>
        <div className="space-y-4">
          <details className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl">
            <summary className="cursor-pointer font-medium">What are the key takeaways from this blog?</summary>
            <p className="mt-2 text-gray-600 dark:text-gray-300">It provides an overview of the top technologies and trends in {blog.title}.</p>
          </details>
          <details className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl">
            <summary className="cursor-pointer font-medium">Who should read this blog?</summary>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Tech enthusiasts, business owners, and developers interested in {blog.title}.</p>
          </details>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600">Related Blogs</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((rel) => (
            <Link href={`/blog/${rel.slug}`} key={rel.slug}>
              <div className="bg-white dark:bg-[#0f172a] rounded-xl shadow hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <img src={rel.image} alt={rel.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-blue-600 transition">{rel.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{rel.date}</p>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3">{rel.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
