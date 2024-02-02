"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Sentinelogo from "../resources/SentinelLogo.svg";

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setShowMenu(false);
            }
        }

        if (showMenu) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showMenu]);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const onMenuClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    return (
        <nav className="bg-background h-fit w-screen p-4 lg:p-7 lg:px-4 xl:px-12">
            <div className="flex justify-between items-center ml-4" ref={menuRef}>
                <Link href={"/"}>
                    <Image src={Sentinelogo} alt="Sentinel Logo" width={38} height={40} />
                    
                </Link>


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
                                <Link href={"/"} className="p-2 text-gray-400 hover:text-gray-300">contact</Link>
                                <Link href={"/"} className="p-2 text-gray-400 hover:text-gray-300">about us</Link>
                                <Link href={"/"} className="p-2 text-gray-400 hover:text-gray-300">request talent</Link>
                                <Link href={"/"} className="p-2 text-gray-400 hover:text-green-950">get hired</Link>
                            </div>
                        </div>
                    )}
                </div>

                {/* DESKTOP MENU */}

                <div className="hidden md:flex text-sm lg:text-base font-inter items-center">
                    <Link href={"/"} className="px-4 lg:px-7 text-gray-300 hover:text-gray-400">CONTACT</Link>
                    <Link href={"/"} className="px-4 lg:px-7 text-gray-300 hover:text-gray-400">ABOUT US</Link>
                    <Link href={"/"} className="px-4 lg:px-7 text-gray-300 hover:text-gray-400">REQUEST TALENT</Link>
                    <div className="bg-sentinel-green hover:bg-slate-500 px-5 lg:ml-2 py-2 rounded-lg">
                        <Link href={"/"} className="text-gray-300 ">GET HIRED</Link>
                    </div>

                </div>
            </div>
        </nav>
    );
};
