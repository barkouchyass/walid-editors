

import { useState } from 'react'
import { PopoverGroup } from '@headlessui/react'



export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className=" bg-slate-800 bg-opacity-75 backdrop-blur-lg">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
        <a href="#" className="text-sm/6 font-semibold text-gray-200">
        Curriculum
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-200">
          Pricing
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-200">
          Benefits
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-200">
          Testimonials
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-200 bg-gray-900 rounded-full border border-gray-800">
           Enroll today
          </a>
        </div>
      </nav>
    </header>
  )
}