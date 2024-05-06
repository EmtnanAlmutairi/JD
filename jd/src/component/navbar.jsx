import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white py-4 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 2xl:px-32 flex flex-col sm:flex-row justify-between items-center shadow-lg">
      {/* CTA Button */}
      <button className="Button w-full sm:w-36 h-9 px-6 py-2 bg-slate-900 rounded-3xl justify-center items-center gap-2.5 inline-flex mb-4 sm:mb-0">
        <div className="Text text-center text-white text-base font-normal font-sans leading-tight">أحجز مع خبير</div>
      </button>
      {/* Burger Menu */}
      <button
        className="block sm:hidden text-slate-900 hover:text-red-700 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={`${isOpen ? 'hidden' : 'block'}`}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2z"
          />
          <path
            className={`${isOpen ? 'block' : 'hidden'}`}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2z"
          />
        </svg>
      </button>
      {/* Navigation Links */}
      <nav className={`${isOpen ? 'block' : 'hidden'} sm:flex sm:space-x-6 flex-grow justify-center items-center mt-4 sm:mt-0 sm:ml-6`}>
        <div className="NavLinkWrapper w-full sm:w-auto justify-center items-center gap-6 inline-flex flex-col sm:flex-row">
          <div className="NavLink py-1 justify-center items-center gap-2.5 flex">
            <div className="Text text-zinc-900 text-base font-normal font-sans leading-tight">ورش العمل</div>
          </div>
          <div className="NavLink py-1 justify-center items-center gap-2.5 flex">
            <div className="Text text-zinc-900 text-base font-normal font-sans leading-tight">الجلسات</div>
          </div>
          <div className="NavLink py-1 justify-center items-center gap-2.5 flex">
            <div className="Text text-zinc-900 text-base font-normal font-sans leading-tight">التدوينات</div>
          </div>
          <div className="NavLink py-1 border-b-2 border-slate-900 justify-center items-center gap-2.5 flex">
            <div className="Text text-zinc-900 text-base font-normal font-sans leading-tight">الرئيسية</div>
          </div>
        </div>
      </nav>
      
      {/* Logo */}
      <div className="hidden sm:flex justify-start items-center">
        <img src="https://via.placeholder.com/95x49" alt="Logo" className="h-12" />
      </div>
    </div>
  );
}

export default Navbar;

