
import { useState } from 'react'
import { motion } from 'framer-motion';
import assets from "../assets/assets";
import ThemeToggleBar from "./ThemeToggleBar";

export default function Navbar({ theme, setTheme }) {

    const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white dark:bg-gray-900">
      {/* Logo */}
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        alt="Zenvy AI Logo"
        className="w-32 sm:w-40"
      />

      {/* Desktop Nav Links */}
      <div className="hidden sm:flex text-gray-700 dark:text-white text-sm items-center gap-6">
        <a href="#" className="hover:border-b border-black dark:border-white">
          Home
        </a>
        <a href="#services" className="hover:border-b border-black dark:border-white">
          Services
        </a>
        <a href="#our-work" className="hover:border-b border-black dark:border-white">
          Our Work
        </a>
        <a href="#contact-us" className="hover:border-b border-black dark:border-white">
          Contact
        </a>
      </div>

      {/* Desktop Connect Button + Mobile Hamburger */}
      <div className="flex items-center gap-4">
        <ThemeToggleBar theme={theme} toggleTheme={toggleTheme} />
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt="Menu"
          className="w-6 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        />
        <a
          href="#contact-us"
          className="text-sm hidden sm:flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition"
        >
          Connect{" "}
          <img
            src={assets.arrow_icon}
            width={14}
            alt="arrow icon"
            className="inline ml-1"
          />
        </a>
      </div>
    </motion.div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-30 transition-opacity duration-300 sm:hidden ${
          sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-40 bg-blue-50 dark:bg-gray-900 shadow-xl transition-transform duration-300 sm:hidden ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <img
            src={assets.close_icon}
            alt="Close"
            className="w-5 cursor-pointer dark:invert-0 invert"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
        <div className="flex flex-col gap-6 px-6 text-gray-700 dark:text-white text-base">
          <a onClick={() => setSidebarOpen(false)} href="#">Home</a>
          <a onClick={() => setSidebarOpen(false)} href="#services">Services</a>
          <a onClick={() => setSidebarOpen(false)} href="#our-work">Our Work</a>
          <a onClick={() => setSidebarOpen(false)} href="#contact-us">Contact</a>
          <div className="flex items-center gap-2 mt-2">
            <ThemeToggleBar theme={theme} toggleTheme={toggleTheme} />
            <span onClick={toggleTheme} className="cursor-pointer">
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
