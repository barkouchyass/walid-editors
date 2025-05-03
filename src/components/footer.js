import { FaInstagram, FaTiktok } from "react-icons/fa";
import logo from "../images/output-onlinepngtools.png";

export default function Footer() {
  return (
    <footer className="bg-indigo-600 text-white py-6">
      <div className="container mx-auto text-center">
        
          <img src={logo} alt="Logo" className="h-20 mx-auto" />
        
        <p>&copy; 2025 WPRODACADEMY &reg;. All rights reserved.</p>
        <p>
          <a href="/privacy-policy" className="text-gray-200 hover:text-white underline">
            Privacy Policy
          </a>
        </p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="https://www.instagram.com/wprodacademy.ma/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
            <FaInstagram className="w-6 h-6 inline" />
          </a>
          <a href="https://www.tiktok.com/@wprodacademy" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
            <FaTiktok className="w-6 h-6 inline" />
          </a>
        </div>
      </div>
    </footer>
  );
}