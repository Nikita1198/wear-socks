import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.png" className="h-9" alt="Logo" />
        </a>
        <div className="flex items-center md:order-2 space-x-4 rtl:space-x-reverse">
          <a href="#" className="hover:opacity-80">
            <img src="/whats.png" className="h-7 w-7" alt="WhatsApp" />
          </a>
          <a href="#" className="hover:opacity-80">
            <img src="/tg.png" className="h-7 w-7" alt="Telegram" />
          </a>
          <button type="button" className="hidden md:flex text-white bg-transparent hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center dark:bg-transparent dark:hover:bg-transparent dark:focus:ring-blue-800 border border-white">+7 (900) 222-22-22</button>
          <button 
            onClick={toggleMenu}
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-black md:space-x-8 lg:space-x-16 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black dark:bg-black md:dark:bg-black dark:border-gray-700 md:pt-1 sm:ml-[20px] md:ml-[40px] ml-[30px]">
            <li>
              <a href="#" className="block py-1 px-2 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-sm">О НАС</a>
            </li>
            <li>
              <a href="#" className="block py-1 px-2 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-sm">ЦЕНЫ</a>
            </li>
            <li>
              <a href="#" className="block py-1 px-2 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-sm">НАШ АССОРТИМЕНТ</a>
            </li>
            <li>
              <a href="#" className="block py-1 px-2 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-sm">СЕРТИФИКАТЫ</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 