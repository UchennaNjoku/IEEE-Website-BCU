'use client'
import { useState, useEffect, useRef, FC } from 'react';
import Image from 'next/image';
import bcuLogo from '../../public/bcu_logo.svg'; // Ensure the image is in the public directory

const Navbar: FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    }

    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const onMenuClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <nav className="bg-[#222121] rounded-b-3xl h-fit w-screen p-4 lg:p-7 lg:px-4 xl:px-12">
      <div className="flex justify-between items-center ml-4" ref={menuRef}>
        <a href="/">
          <Image src={bcuLogo} alt="BCU Logo" width={38} height={40} />
        </a>

        {/* MOBILE MENU */}
        <div className="flex font-inter md:hidden w-9 mr-3" onClick={toggleMenu}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="stroke-current text-gray-400 hover:text-gray-300">
            <g id="Menu / Menu_Alt_02">
              <path d="M11 17H19M5 12H19M11 7H19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
          </svg>

          {showMenu && (
            <div className="absolute top-8 right-4 w-fit h-fit px-5 py-3 rounded-md bg-gray-600 z-50" onClick={onMenuClick}>
              <div className="flex flex-col justify-center items-center">
                <a href="/" className="p-2 text-gray-400 hover:text-gray-300">OUR PLAN</a>
                <a href="/" className="p-2 text-gray-400 hover:text-gray-300">ABOUT US</a>
                <a href="/" className="p-2 text-gray-400 hover:text-gray-300">CONTACT</a>
              </div>
            </div>
          )}
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex text-sm lg:text-base font-inter items-center">
          <a href="/" className="px-4 lg:px-7 text-gray-300 hover:text-gray-400">OUR PLAN</a>
          <a href="/" className="px-4 lg:px-7 text-gray-300 hover:text-gray-400">ABOUT US</a>
          <a href="/" className="px-4 lg:px-7 text-gray-300 hover:text-gray-400">CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
