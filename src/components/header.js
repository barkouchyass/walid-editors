import { useState, useEffect } from 'react';
import { PopoverGroup } from '@headlessui/react';
import logo1 from "../images/output-onlinepngtools.png";
import logo2 from "../images/LOGOBLEU.png";

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
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out backdrop-blur-lg ${
        isScrolled
          ? 'bg-white/90 text-dark h-14 shadow-sm'
          : 'bg-gradient-to-r from-secondary to-accent text-white h-18 shadow-lg'
      }`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10 h-full"
      >
        <div className="flex lg:flex-1 items-center">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src={isScrolled ? logo2 : logo1}
              className={`transition-all duration-300 ease-in-out ${
                isScrolled ? 'h-10' : 'h-12'
              } w-auto`}
            />
          </a>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-10 items-center">
          <a
            href="#about"
            className={`text-sm font-medium hover:text-secondary transition-all duration-300 ${
              isScrolled ? 'text-dark' : 'text-white'
            }`}
          >
            Curriculum
          </a>
          <a
            href="#avantages"
            className={`text-sm font-medium hover:text-secondary transition-all duration-300 ${
              isScrolled ? 'text-dark' : 'text-white'
            }`}
          >
            Avantages
          </a>
          <a
            href="#curriculum"
            className={`text-sm font-medium hover:text-secondary transition-all duration-300 ${
              isScrolled ? 'text-dark' : 'text-white'
            }`}
          >
            Programmes
          </a>
          <a
            href="#pricing"
            className={`text-sm font-medium hover:text-secondary transition-all duration-300 ${
              isScrolled ? 'text-dark' : 'text-white'
            }`}
          >
            Packs et Tarification
          </a>
          <a
            href="#testimonials"
            className={`text-sm font-medium hover:text-secondary transition-all duration-300 ${
              isScrolled ? 'text-dark' : 'text-white'
            }`}
          >
            Avis
          </a>
          <a
            href="#faq"
            className={`text-sm font-medium hover:text-secondary transition-all duration-300 ${
              isScrolled ? 'text-dark' : 'text-white'
            }`}
          >
            FAQ
          </a>
          <a
            href="#engagements"
            className={`text-sm font-medium hover:text-secondary transition-all duration-300 ${
              isScrolled ? 'text-dark' : 'text-white'
            }`}
          >
            Nos engagements
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <a
            href="#"
            className={`transition-all duration-300 font-medium rounded-full shadow-lg ${
              isScrolled
                ? 'py-2 px-4 text-xs text-white bg-dark hover:bg-secondary'
                : 'py-2 px-6 text-sm text-white bg-accent hover:bg-dark'
            }`}
          >
            S'inscrire
          </a>
        </div>
      </nav>
    </header>
  );
}