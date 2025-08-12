'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] sm:min-h-[90vh] overflow-hidden bg-black text-white pt-16 pb-8">
      {/* Background Image */}
      <Image
        src="https://res.cloudinary.com/diazxuntv/image/upload/v1754989973/Home_a6txb8.png"
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-12 gap-10">
        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl space-y-6">
          <h2 className="text-2xl font-semibold text-cyan-400 mt-9">
            Developing AI Ideas?
          </h2>
<h1 className="text-3xl md:text-4xl font-extrabold leading-tight bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-600 bg-clip-text text-transparent drop-shadow-xl">
  <Typewriter
    words={['Transforming AI Ideas Into Scalable Solutions!']}
    loop={1}              
    cursor                 
    cursorStyle="|"         
    typeSpeed={80}          
    deleteSpeed={0}       
    delaySpeed={1000}       
  />
</h1>





          <p className="text-gray-300 text-lg md:text-xl">
          Empower your next-gen AI ideas with real-time solutions, scalable architecture, and expert execution.


          </p>

          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-block text-white font-semibold text-base px-6 py-3 rounded-full bg-gradient-to-br from-fuchsia-500 via-pink-500 to-red-500 shadow-xl hover:scale-105 transition-transform duration-300"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex items-center justify-center w-full md:w-1/2 h-[320px] sm:h-[420px] md:h-[500px]">
          <div className="absolute top-12 right-4 sm:right-8 md:right-10 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-blue-500 rounded-full blur-3xl opacity-40 animate-pulse z-0" />
          <Image
            src="https://res.cloudinary.com/diazxuntv/image/upload/robot-removebg-preview_cf6y0r.png"
            alt="AI Robot"
            width={420}
            height={420}
            className="object-contain relative z-10 drop-shadow-[0_8px_40px_rgba(59,130,246,0.6)] max-w-full h-auto md:translate-y-[30px]"
          />
        </div>
      </div>
    </section>
  );
}
