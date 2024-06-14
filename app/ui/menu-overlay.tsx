//Client Component
'use client';

import './global.css';



//Icon
import { 
    HomeIcon,               //home
    InformationCircleIcon,  //about
    CodeBracketIcon, CommandLineIcon, CpuChipIcon, //projects
    DevicePhoneMobileIcon, PhoneIcon, //contact
    Bars3Icon, Bars2Icon, XMarkIcon, //mobile menu
} from '@heroicons/react/24/outline';

//Used to get the current pathname
import { usePathname } from 'next/navigation';

//Next.js Link Component
import Link from 'next/link';

import React, { useState, useEffect } from 'react';


import clsx from 'clsx';

export default function MenuOverlay( {
    setNavbarOpen,
    links,
} : {
    setNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>,
    links: {name: string, href: string, id:string, icon: typeof HomeIcon}[]
} ) {

    

    const scrollToSectionAndClose = function (element_id: string) {
        //close the menu overlay

        const element = document.getElementById(element_id)
        element?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        setNavbarOpen(false);
        
    }

    return (
        <div className="FN_Font">
            <div className='fixed top-[-10%] right-0 w-[100%] h-[110%] overflow-x-hidden lg:hidden bg-[#222629] duration-500 font-semibold text-6xl gap-10 flex flex-col justify-center items-center'>
            {links.map((link) => {

                const LinkIcon = link.icon;

                return (
                    <div
                        onClick={() => scrollToSectionAndClose(link.id)}
                        key={link.name}
                        className='flex flex-row justify-center text-white items-center gap-2  transition ease-out duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-500 hover:to-green-900 hover:cursor-pointer'
                        >
                        {/* <div className="hidden lg:flex items-center justify-center w-[60px] h-[60px] rounded-lg border-2">
                            <LinkIcon className="w-[40px]" />
                        </div> */}
                        <p className="block lg:hidden">{link.name}</p>
                    </div>
                );
                })}
            </div>
        </div>
    );
}