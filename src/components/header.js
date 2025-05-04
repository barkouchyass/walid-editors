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
          : 'bg-gradient-to-r from-secondary to-accent h-16 shadow-lg'
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
            className={`text-sm font-semibold text-primary hover:text-secondary transition-all duration-300 ${
              isScrolled ? 'text-xs' : 'text-sm'
            }`}
          >
            Curriculum
          </a>
          <a
            href="#avantages"
            className={`text-sm font-semibold text-primary hover:text-secondary transition-all duration-300 ${
              isScrolled ? 'text-xs' : 'text-sm'
            }`}
          >
            Avantages
          </a>
          <a
            href="#curriculum"
            className={`text-sm font-semibold text-primary hover:text-secondary transition-all duration-300 ${
              isScrolled ? 'text-xs' : 'text-sm'
            }`}
          >
            Programmes
          </a>
        
          <a
            href="#pricing"
            className={`text-sm font-semibold text-primary hover:text-secondary transition-all duration-300 ${
              isScrolled ? 'text-xs' : 'text-sm'
            }`}
          >
          Packs et Tarification
          </a>
          <a
            href="#testimonials"
            className={`text-sm font-semibold text-primary hover:text-secondary transition-all duration-300 ${
              isScrolled ? 'text-xs' : 'text-sm'
            }`}
          >
            Avis
          </a>     
          <a
            href="#faq"
            className={`text-sm font-semibold text-primary hover:text-secondary transition-all duration-300 ${
              isScrolled ? 'text-xs' : 'text-sm'
            }`}
          >
            FAQ
          </a>
          <a
            href="#engagements"
            className={`text-sm font-semibold text-primary hover:text-secondary transition-all duration-300 ${
              isScrolled ? 'text-xs' : 'text-sm'
            }`}
          >
            Nos engagements
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <a
            href="#"
            className={`py-2.5 px-5 font-medium text-white bg-accent hover:bg-dark rounded-full shadow-md transition-all duration-300 ${
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