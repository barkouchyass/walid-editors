import { useState, useEffect } from 'react';
import { PopoverGroup } from '@headlessui/react';
import logo from "../images/output-onlinepngtools.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out backdrop-blur-md ${
        isScrolled
          ? 'bg-transparent h-12 shadow-md'
          : 'bg-gradient-to-r from-purple-600 to-indigo-600 h-16 shadow-lg'
      }`}
    >
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src={logo}
              className={`transition-all duration-300 ease-in-out ${
                isScrolled ? 'h-8' : 'h-10'
              } w-auto`}
            />
          </a>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a
            href="#about"
            className={`text-sm font-semibold text-white hover:text-gray-200 transition-all duration-300 ${
              isScrolled ? 'text-xs' : 'text-sm'
            }`}
          >
            À propos
          </a>
          <a
            href="#curriculum"
            className={`text-sm font-semibold text-white hover:text-gray-200 transition-all duration-300 ${
              isScrolled ? 'text-xs' : 'text-sm'
            }`}
          >
            Programme
          </a>
          <a
            href="#pricing"
            className={`text-sm font-semibold text-white hover:text-gray-200 transition-all duration-300 ${
              isScrolled ? 'text-xs' : 'text-sm'
            }`}
          >
            Tarification
          </a>
          <a
            href="#testimonials"
            className={`text-sm font-semibold text-white hover:text-gray-200 transition-all duration-300 ${
              isScrolled ? 'text-xs' : 'text-sm'
            }`}
          >
            Avis
          </a>
          <a
            href="#bonus"
            className={`text-sm font-semibold text-white hover:text-gray-200 transition-all duration-300 ${
              isScrolled ? 'text-xs' : 'text-sm'
            }`}
          >
            Bonus
          </a>
          <a
            href="#faq"
            className={`text-sm font-semibold text-white hover:text-gray-200 transition-all duration-300 ${
              isScrolled ? 'text-xs' : 'text-sm'
            }`}
          >
            FAQ
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <a
            href="#"
            className={`py-2.5 px-5 font-medium text-white bg-indigo-700 hover:bg-indigo-800 rounded-full shadow-md transition-all duration-300 ${
              isScrolled ? 'text-xs' : 'text-sm'
            }`}
          >
            Enroll today
          </a>
        </div>
      </nav>
    </header>
  );
}