import React, { useState } from 'react';
import logo from '../icons/logo.png'; // استيراد شعار PNG
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-white py-4 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 2xl:px-32 flex flex-col sm:flex-row justify-between items-center shadow-lg">
      {/* زر الدعوة للعمل */}
      <a href="https://wa.me/966530547165" target="_blank" rel="noopener noreferrer" className="Button w-full sm:w-36 h-9 px-6 py-2 bg-slate-900 rounded-3xl justify-center items-center gap-2.5 inline-flex mb-4 sm:mb-0">
        <span className="Text text-center text-white text-base font-normal font-sans leading-tight">أحجز مع خبير</span>
      </a>

      {/* زر البرجر للقائمة */}
      <button
        className="block sm:hidden text-slate-900 hover:text-red-700 focus:outline-none"
        onClick={isOpen ? closeMenu : toggleMenu}
        aria-expanded={isOpen}
      >
        <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
        {isOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
      </button>

      {/* روابط التصفح */}
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
      {/* الشعار */}
      <div className="hidden sm:flex justify-start items-center">
        <img src={logo} alt="شعار" className="h-12" /> {/* استخدام شعار PNG */}
      </div>
    </div>
  );
}

export default Navbar;
