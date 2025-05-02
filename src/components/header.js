import { useState } from 'react';
import { PopoverGroup } from '@headlessui/react';
import logo from "../images/output-onlinepngtools.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src={logo}
              className="h-16 w-auto"
            />
          </a>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold text-white hover:text-gray-200">
            Curriculum
          </a>
          <a href="#" className="text-sm font-semibold text-white hover:text-gray-200">
            Pricing
          </a>
          <a href="#" className="text-sm font-semibold text-white hover:text-gray-200">
            Benefits
          </a>
          <a href="#" className="text-sm font-semibold text-white hover:text-gray-200">
            Testimonials
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <a href="#" className="py-2.5 px-5 text-sm font-medium text-white bg-indigo-700 hover:bg-indigo-800 rounded-full shadow-md">
            Enroll today
          </a>
        </div>
      </nav>
    </header>
  );
}