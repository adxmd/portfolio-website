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

import { MotionConfig, motion } from "framer-motion";

import NavLinks from './nav-links';
import MenuOverlay from './menu-overlay';


import clsx from 'clsx';

const links = [
    { name: 'Home', href: '#home', id:'home', icon: HomeIcon },
    { name: 'About', href: '#about', id:'about', icon: InformationCircleIcon },
    { name: 'Projects', href: '#projects', id:'projects', icon: CodeBracketIcon },
    { name: 'Contact', href: '#contact', id:'contact', icon: DevicePhoneMobileIcon }
];

// const AnimatedHamburgerButton = () => {
//     const [active, setActive] = useState(false);
//     return (
//       <MotionConfig
//         transition={{
//           duration: 0.5,
//           ease: "easeInOut",
//         }}
//       >
//         <motion.button
//           initial={false}
//           animate={active ? "open" : "closed"}
//           onClick={() => setActive((pv) => !pv)}
//           className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20"
//         >
//           <motion.span
//             variants={VARIANTS.top}
//             className="absolute h-1 w-10 bg-white"
//             style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
//           />
//           <motion.span
//             variants={VARIANTS.middle}
//             className="absolute h-1 w-10 bg-white"
//             style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
//           />
//           <motion.span
//             variants={VARIANTS.bottom}
//             className="absolute h-1 w-5 bg-white"
//             style={{
//               x: "-50%",
//               y: "50%",
//               bottom: "35%",
//               left: "50%",
//             }}
//           />
//         </motion.button>
//       </MotionConfig>
//     );
// };
  
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
        <div className={"fixed w-[90%] mt-5 left-[50%] translate-x-[-50%] bg-[#121415]/70 backdrop-blur-sm rounded-3xl border-[1px] border-slate-500"}>
            <div className="lg:p-6 px-6 py-2 flex flex-wrap justify-between items-center">
            {/* text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-900 */}
                <div onClick={() => scrollToSection('home')} className="text-2xl text-transparent bg-clip-text bg-gradient-to-tr from-green-700 to-lime-500 font-semibold hover:text-white hover:cursor-pointer">
                    Adam.dev
                </div>

                {/* <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div> */}
                <div id="mobileMenu" className="h-block lg:hidden">

                    <MotionConfig
                        transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                        }}
                    >
                        <motion.button
                        initial={false}
                        animate={navbarOpen ? "open" : "closed"}
                        onClick={() => setNavbarOpen((pv) => !pv)}
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

                    
                    {/* { !navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-1 hover:text-white transition ease-out duration-200 after:translate-x-5 after:transition after:ease-in-out after:duration-500">
                            <Bars3Icon className="h-8 w-8"/>
                        </button> 
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-1 hover:text-white transition ease-out duration-200">
                            <XMarkIcon className="h-8 w-8"/>
                        </button> 
                    )} */}
                </div>

                {/* NavLinks \/ */}
                <div className="hidden lg:flex text-white flex-row font-semibold gap-2">
                    {/* {links.map((link) => {

                    const LinkIcon = link.icon;

                    return (
                        <div
                            onClick={() => scrollToSection(link.id)}
                            key={link.name}
                            className='flex flex-row items-center gap-2 mr-3 border-0 transition ease-out duration-300 hover:text-white hover:cursor-pointer'
                            >
                            <LinkIcon className="w-[30px]" />
                            <p className="hidden text-xl md:block">{link.name}</p>
                        </div>
                    );
                    })} */}
                    <NavLinks links={links}/>
                </div>

                {/* <Link href={"/"} className="text-2xl text-black font-semibold hover:text-[#474B4F]">
                    Adam.dev
                </Link> */}
                

                {/* <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div> */}
            </div>
            {navbarOpen ? <MenuOverlay links={links} /> : null}
        </div>
    );
}