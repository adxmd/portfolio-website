//Client Component
'use client';

import '../ui/global.css';

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
    links,
} : {
    links: {name: string, href: string, id:string, icon: typeof HomeIcon}[]
} ) {

    

    const scrollToSectionAndClose = function (element_id: string) {
        //close the menu overlay

        const element = document.getElementById(element_id)
        element?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        
    }

    return (
        <div className='lg:hidden h-[80vh] font-semibold text-3xl gap-8 flex flex-col justify-center items-center'>
          {links.map((link) => {

            const LinkIcon = link.icon;

            return (
                <div
                    onClick={() => scrollToSectionAndClose(link.id)}
                    key={link.name}
                    className='flex flex-row justify-center text-white items-center gap-2  transition ease-out duration-300 hover:text-green-600 hover:cursor-pointer'
                    >
                    <div className="flex items-center justify-center w-[60px] h-[60px] rounded-lg bg-slate-600">
                        <LinkIcon className="w-[40px]" />
                    </div>
                    <p className="block lg:hidden">{link.name}</p>
                </div>
            );
            })}
        </div>
    );
}