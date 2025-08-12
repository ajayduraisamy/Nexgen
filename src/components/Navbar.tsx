'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  FaBars,
  FaEnvelope,
  FaPhone,
  FaTimes,
  FaUserTie,
  FaWhatsapp,
} from 'react-icons/fa';
export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showContactDropdown, setShowContactDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<{
    [key: string]: boolean;
  }>({});
  const [openChildMenus, setOpenChildMenus] = useState<{
    [key: string]: boolean;
  }>({});
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const contactDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
      if (
        contactDropdownRef.current &&
        !contactDropdownRef.current.contains(event.target as Node)
      ) {
        setShowContactDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSubMenu = (key: string) => {
    setOpenSubMenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleChildMenu = (key: string) => {
    setOpenChildMenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    
    {
      name: 'Services',
      href: '#services',
      subLinks: [
        {
          name: 'Web Design & Development',
          href: '/services',
          children: [
            { name: 'Web Development', href: '/services/web-development' },
            { name: 'UI/UX Development', href: '/services/ui-ux-development' },
          ],
        },
        {
          name: 'AI Service',
          href: '/services',
          children: [
            { name: 'AI Development', href: '/services/ai-development' },
            { name: 'Machine Learning', href: '/services/machine-learning' },
            { name: 'Deep Learning', href: '/services/deep-learning' },
          ],
        },
        {
          name: 'Embedded Services',
          href: '/services',
          children: [
            { name: 'IoT Development', href: '/services/iot-development' },
            { name: 'Embedded Development', href: '/services/embedded-development' },
          ],
        },
        {
          name: 'Mobile Apps',
          href: '/services',
          children: [
            { name: 'Android Development', href: '/services/android-development' },
            { name: 'Game Development', href: '/services/game-development' },
          ],
        },
        {
          name: 'Blockchain & Cybersecurity',
          href: '/services',
          children: [
            { name: 'Blockchain Development', href: '/services/blockchain-development' },
            { name: 'Cybersecurity', href: '/services/cybersecurity-development' },
          ],
        },
        { name: 'IT Consulting & Training', href: '/services/it-consulting-training' },
        {
          name: 'Digital Marketing & Services',
          href: '/services',
          children: [
            { name: 'Digital Marketing', href: '/services/digital-marketing' },
          ],
        },
        {
          name: 'Payment Gateway',
          href: '/services',
          children: [
            { name: 'Stripe Integration', href: '/services/stripe-integration' },
            { name: 'Paypal Integration', href: '/services/paypal-integration' },
            { name: 'Rasorpay Integration', href: '/services/rasorpay-integration' },
          ],
        },
        {
          name: 'E-commerce',
          href: '/services',
          children: [
            { name: 'E-commerce Development', href: '/services/e-commerce-development' },
            { name: 'No Code Development', href: '/services/no-code-development' },
          ],
        },
        {
          name: 'Software Testing',
          href: '/services',
          children: [
            { name: 'Automation Testing', href: '/services/automation-testing' },
            { name: 'Manual Testing', href: '/services/manuval-testing' },
          ],
        },
      ],
    },
    { name: 'Blog', href: '/blog' },
    // { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];
  return (
    
    <header className="main-content w-full fixed top-0 z-50 bg-white shadow-md">
      <nav className="w-full px-4 h-20 flex justify-between items-center">
        <Link href="/" className="flex items-center h-full">
          <Image src="https://res.cloudinary.com/diazxuntv/image/upload/primium-logo_oocczb.png" alt="DRNEXGEN Logo" width={130} height={35} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 font-muli custom-navbar">
          {navLinks.map((link) => (
            <div key={link.name} className={`nav-item ${link.subLinks ? 'dropdown' : ''}`}>
              <Link href={link.href} className="nav-link">
                <span className="flex items-center gap-2">
                  {link.name}
                  {link.subLinks && <span className="ml-1">&#x25BE;</span>}
                </span>
              </Link>

              {link.subLinks && (
                <div className="dropdown-menu">
                  {link.subLinks.map((subLink) => (
                    <div key={subLink.name} className={`relative ${subLink.children ? 'has-children' : ''}`}>
                      <Link href={subLink.href} className="dropdown-item mt-0">
                        {subLink.name}
                        {subLink.children && <span className="ml-2 arrow">&#9656;</span>}
                      </Link>
                      {subLink.children && (
                        <div className="side-dropdown">
                          {subLink.children.map((child) => (
                            <Link key={child.name} href={child.href} className="dropdown-item">
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-10 relative pr-2">
        
  <div
    className="relative"
    onMouseEnter={() => !isMobile && setShowContactDropdown(true)}
    onMouseLeave={() => !isMobile && setShowContactDropdown(false)}
  >
    <button
      className="text-3xl hover:text-yellow-400 text-black"
      onClick={() => setShowContactDropdown(!showContactDropdown)} 
    >
      <FaPhone />
    </button>


<div
  ref={contactDropdownRef}
  className={`absolute top-12 left-1/2 sm:left-auto sm:right-0 transform -translate-x-1/2 sm:translate-x-0 
    w-[90vw] max-w-sm bg-white shadow-2xl p-6 z-50 transition-all duration-500 ease-in-out ${
    showContactDropdown
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 -translate-y-3 pointer-events-none'
  }`}
>



              <p className="text-black text-lg mb-4">DR-NEXGEN</p>
              <div className="mb-5 border rounded-xl p-5 space-y-3 bg-gray-50">
                <p className="font-bold text-base text-black">For Services Inquiry</p>
                <p className="flex items-center gap-3 text-base text-black">
                  <FaEnvelope size={18} className="text-blue-400" /> ask@drnexgen.com
                </p>
                
                <p className="flex items-center gap-3 text-base text-black">
                  <FaWhatsapp size={18} className="text-green-400" /> +91-98765-43210
                </p>
              
              </div>
              <div className="border rounded-xl p-5 space-y-3 bg-gray-50">
                <p className="text-base text-black">For Job Inquiry</p>
                <p className="flex items-center gap-3 text-base text-black">
                  <FaEnvelope size={18} className="text-orange-400" /> hr@drnexgen.com
                </p>
                <p className="flex items-center gap-3 text-base text-black">
  <FaUserTie size={18} className="text-blue-500" />
   Career
  <Link href="/careers" className="text-blue-600 underline hover:text-blue-800">
     Drop inquiry
  </Link>
</p>
              </div>
            </div>
          </div>

          <Link
            href="/request-services"
            className="hidden get-quote md:block px-5 py-2 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600"
          >
            Get Quote
          </Link>

          {/* Mobile Toggle */}
          <button
            className="text-3xl md:hidden ml-5 text-black"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div ref={mobileMenuRef} className="md:hidden bg-[#1c2e4a] text-white px-5 py-6 space-y-6 text-lg font-medium shadow-lg max-h-[90vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name} className="space-y-1">
              {!link.subLinks ? (
                <Link
                  href={link.href}
                  className="flex items-center gap-4 hover:text-orange-400"
                  onClick={() => setMobileMenuOpen(false)}
                  
                >
                  {link.name}
                </Link>
              ) : (
                <div>
                  <button
                    onClick={() => toggleSubMenu(link.href)}
                    className="w-full text-left flex items-center justify-between  font-medium flex justify-between hover:text-orange-400"
                  >
                    {link.name}
                   <span className="text-4xl font-medium text-purple-400">{openSubMenus[link.href] ? '−' : '+'}</span>
                  </button>

                  {openSubMenus[link.href] && (
                    <div className="ml-4 space-y-3">
                      {link.subLinks.map((subLink) => (
                        <div key={subLink.name} className="space-y-1">
                          {subLink.children ? (
                            <>
                              <button
                                onClick={() => toggleChildMenu(subLink.name)}
                                className="w-full text-left text-orange-300 font-medium flex justify-between"
                              >
                                {subLink.name}
                                <span className="text-3xl font-medium">{openChildMenus[subLink.name] ? '−' : '+'}</span>
                              </button>
                              {openChildMenus[subLink.name] && (
                                <div className="ml-4 space-y-1">
                                <ul className="ml-4 list-disc list-inside space-y-4 text-4xl font-medium">

  {subLink.children.map((child) => (
    <li key={child.name}>
      <Link
        href={child.href}
        className="text-lg font-medium text-white hover:text-orange-200"
        onClick={() => setMobileMenuOpen(false)}
        
      >
        {child.name}
      </Link>
    </li>
  ))}
</ul>

                                </div>
                              )}
                            </>
                          ) : (
                            <Link
                              href={subLink.href}
                              className="block text-orange-300 hover:text-orange-200"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subLink.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

         <Link
  href="/request-services"
  className="block text-center px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl font-semibold"
>
  Request for Query
</Link>
        </div>
      )}
    </header>
  );
}
