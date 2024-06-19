//Client Component
'use client';

import '../ui/global.css';

//Icon
import { 
    HomeIcon,               //home
    InformationCircleIcon,  //about
    CodeBracketIcon, CommandLineIcon, CpuChipIcon, //projects
    DevicePhoneMobileIcon, PhoneIcon, //contact
} from '@heroicons/react/24/outline';

import React, { useState, useEffect } from 'react';

import { MotionConfig, motion } from "framer-motion";

import NavLinks from './nav-links';
import MenuOverlay from './menu-overlay';

import { changa } from "./fonts"

const links = [
    { name: 'Home', href: '#home', id:'home', icon: HomeIcon },
    { name: 'About', href: '#about', id:'about', icon: InformationCircleIcon },
    { name: 'Projects', href: '#projects', id:'projects', icon: CodeBracketIcon },
    { name: 'Contact', href: '#contact', id:'contact', icon: DevicePhoneMobileIcon }
];
  
const VARIANTS = {
    top: {
        open: {
        rotate: ["0deg", "0deg", "45deg"],
        top: ["35%", "50%", "50%"],
        },
        closed: {
        rotate: ["45deg", "0deg", "0deg"],
        top: ["50%", "50%", "35%"],
        },
    },
    middle: {
        open: {
        rotate: ["0deg", "0deg", "-45deg"],
        },
        closed: {
        rotate: ["-45deg", "0deg", "0deg"],
        },
    },
    bottom: {
        open: {
        rotate: ["0deg", "0deg", "45deg"],
        bottom: ["35%", "50%", "50%"],
        },
        closed: {
        rotate: ["45deg", "0deg", "0deg"],
        bottom: ["50%", "50%", "35%"],
        },
    },
};

// <>
//     {links.map((link) => {

//     const LinkIcon = link.icon;

//     return (
//         <Link
//             key={link.name}
//             href={link.href}
//             className=''
//             >
//             <LinkIcon className="" />
//             <p className="text-2xl text-sky-400">{link.name}</p>
//         </Link>
//     );
//     })}
// </>

export default function NavBarFull() {
    const [header,setHeader] = useState(false);

    const[navbarOpen, setNavbarOpen] = useState(false);

    // console.log(header);
    // console.log(setHeader);

    const scrollHeader = () => {
        if(window.scrollY >= 20) {
            setHeader(true);
        }else {
            setHeader(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHeader);

        return () => {
            window.addEventListener('scroll', scrollHeader);
        }

    },[])

    const scrollToSection = function (element_id: string) {
        const element = document.getElementById(element_id)
        element?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        

    }

    return (
        <div className="transition ease-in-out duration-500">
            <div id="navBar" className={navbarOpen ? "fixed w-[100%] h-[100%] mt-5 left-[50%] translate-x-[-50%]" : "fixed h-[6.1rem] w-[90%] mt-5 left-[50%] translate-x-[-50%] bg-[#121415]/70 backdrop-blur-sm rounded-3xl border-[1px] border-slate-500"}>
                <div className={navbarOpen ? " px-[4.5rem] py-2 flex justify-between items-center" : "lg:px-6 lg:py-8 px-6 py-2 flex justify-between items-center"}>
                    <div onClick={() => scrollToSection('home')} className={`${changa.className} z-10 text-2xl text-transparent bg-clip-text bg-gradient-to-tr from-green-700 to-lime-500 hover:text-white hover:cursor-pointer`}>
                        Adam.dev
                    </div>

                    <div id="hamburger_button" className={navbarOpen ? " flex lg:hidden z-10" : "flex lg:hidden z-10" }>
                        <MotionConfig
                            transition={{
                            duration: 0.35,
                            ease: "easeInOut",
            
                            }}
                        >
                            <motion.button
                            initial={false}
                            animate={navbarOpen ? "open" : "closed"}
                            onClick={() => {
                                setNavbarOpen((pv) => !pv);
                                // navbarOpen ? openMenu() : closeMenu();
                            }}
                            className="relative h-20 w-20 rounded-full bg-black/0 transition-colors hover:bg-black/20"
                            >
                            <motion.span
                                variants={VARIANTS.top}
                                className="absolute h-1 w-10 bg-gradient-to-tr from-green-700 to-lime-500 rounded-full"
                                style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
                            />
                            <motion.span
                                variants={VARIANTS.middle}
                                className="absolute h-1 w-10 bg-gradient-to-r from-green-700 to-lime-500 rounded-full"
                                style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
                            />
                            <motion.span
                                variants={VARIANTS.bottom}
                                className="absolute h-1 w-10 bg-gradient-to-br from-green-700 to-lime-500 rounded-full"
                                style={{
                                x: "-50%",
                                y: "50%",
                                bottom: "35%",
                                left: "50%",
                                }}
                            />
                            </motion.button>
                        </MotionConfig>
                    </div>

                    {/* NavLinks \/ */}
                    <div className="hidden lg:flex text-white flex-row font-semibold gap-2 mr-10">
                        <NavLinks links={links}/>
                    </div>
                
                    
                </div>
                {navbarOpen ? <MenuOverlay setNavbarOpen = {setNavbarOpen} links={links} /> : null}
            </div>

        </div>
    );
}