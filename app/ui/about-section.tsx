'use client';

import Link from 'next/link';

import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3, FaJava } from "react-icons/fa6";
import { FaNode, FaReact } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiPython, SiCplusplus, SiPytorch, SiPandas, SiScikitlearn } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";


import './global.css'


const skills = [
    {name: 'HTML', href: 'javascript:void(0)', icon: IoLogoHtml5},
    {name: 'CSS', href: 'javascript:void(0)', icon: FaCss3},
    {name: 'JavaScript', href: 'javascript:void(0)', icon: SiJavascript},
    {name: 'Node.js', href: 'javascript:void(0)', icon: FaNode},
    {name: 'TypeScript', href: 'javascript:void(0)', icon: SiTypescript},
    {name: 'React', href: 'javascript:void(0)', icon: FaReact},
    {name: 'TailwindCSS', href: 'javascript:void(0)', icon: RiTailwindCssFill},
    {name: 'Next.js', href: 'javascript:void(0)', icon: RiNextjsFill},

    {name: 'Python', href: 'javascript:void(0)', icon: SiPython},
    {name: 'Java', href: 'javascript:void(0)', icon: FaJava},
    {name: 'C++', href: 'javascript:void(0)', icon: SiCplusplus},
    {name: 'Pandas', href: 'javascript:void(0)', icon: SiPandas},
    {name: 'PyTorch', href: 'javascript:void(0)', icon: SiPytorch},
    {name: 'Scikit-Learn', href: 'javascript:void(0)', icon: SiScikitlearn},
]

import GradientBorderModal from './buttons/gradientBorderModal';


export default function AboutSection() {

    return (
        <>                              {/**bg-[rgb(224,224,224)] bg-[#222629]*/}
            <div className="flex flex-col items-center pt-[9.1rem] pb-[2.5rem] bg-[rgb(224,224,224)] min-h-[100vh] gap-[6rem]">
                <div className="flex flex-col lg:flex-row w-[65vw]">
                    <div>
                        <div id="section_title" className="mx-6 flex justify-left w-[30%]">
                            <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-green-700 to-lime-600 text-2xl font-semibold">BACKGROUND</h1>
                        </div>
                        <span className="mb-10 lg:mb-0 mx-6 flex h-1 w-[4.0rem] bg-gradient-to-tr from-green-700 to-lime-500 rounded-full"></span>
                    </div>
                    
                    <div className="flex flex-col lg:w-[75%] mx-6" >
                        <div className="text-neutral-900">
                            I&apos;m currently pursuing a Bachelor of Computer Science in AI & Machine Learning at <span className="font-semibold">Carleton University</span>. 
                        </div>
                        <div className="text-neutral-900 mt-[2rem]">
                            Ever since I was a kid, 
                        </div>
                        <div className="text-neutral-900 mt-[2rem]">
                            <span className="font-bold">When I&apos;m not in front of a computer screen, </span>I&apos;m probably working on my car, cleaning my car or driving my car
                        </div>
                        <div>
                            <GradientBorderModal />
                        </div>
                    </div>

                </div>

                <div className="flex flex-col lg:flex-row w-[65vw]">
                    <div>
                        <div id="section_title" className="mx-6 flex justify-left lg:w-[30%]">
                            <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-green-700 to-lime-600 text-2xl font-semibold">TECHNICAL SKILLS</h1>
                        </div>
                        <span className="mb-10 lg:mb-0 mx-6 flex h-1 w-[4.0rem] bg-gradient-to-tr from-green-700 to-lime-500 rounded-full"></span>

                    </div>
                    
                    <div className="flex flex-col gap-10 lg:w-[75%] mx-6">

                        <div className="flex flex-row items-center justify-center flex-wrap text-neutral-500 transition ease-in-out duration-200 gap-[4vh]">

                            {skills.map((skill) => {
                                const LinkIcon = skill.icon;

                                return (
                                    <Link
                                        key={skill.name}
                                        href={skill.href}
                                        className="group flex flex-col items-center transition ease-in-out duration-300 hover:text-green-600 hover:cursor-pointer hover:scale-125"
                                        >
                                            <LinkIcon className="text-5xl"/>
                                            <p className="font-semibold text-green-600 transition duration-300 opacity-0 group-hover:opacity-100 text-sm">{skill.name}</p>

                                    </Link>
                                );
                            })}
                        

                        </div>
                        {/* <div className="text-neutral-900">
                            I&apos;m currently pursuing a Bachelor of Computer Science in AI & Machine Learning at Carleton University. 
                        </div>
                        <div className="text-neutral-900">
                            Ever since I was a kid, 
                        </div>
                        <div className="text-neutral-900">
                            <span className="font-bold">When I&apos;m not in front of a computer screen, </span>I&apos;m probably working on my car, cleaning my car or driving my car
                        </div>
                        <div>
                            <GradientBorderModal />
                        </div> */}
                    </div>

                </div>
            </div>
            
        </>
    );
}

// <div id="main" className="flex flex-col-reverse justify-evenly md:justify-center items-center bg-[#222629] h-[100vh] text-gray-50 md:flex-row">
//                 <div id="hello" className="flex flex-col gap-2">
//                     <h1 className="flex flex-col items-center md:items-start font-bold text-4xl w-[70vw] md:w-[40vw] h-[12vh] ">
//                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-900">
//                             Hello, I&apos;m{" "}
//                         </span>
//                         <TypeAnimation
//                             preRenderFirstString={true}
//                             className="text-3xl"
//                             sequence={[
//                             // Same substring at the start will only be typed out once, initially
//                             'Adam',
//                             1000, // wait 1s before replacing "Mice" with "Hamsters"
//                             'Computer Science\nStudent',
//                             1000,
//                             'Aspiring Full-Stack\nWeb Developer',
//                             1000,
//                             'Machine Learning\nEnthusiast',
//                             1000
//                             ]}
//                             wrapper="span"
//                             speed={50}
//                             style={{ whiteSpace: 'pre-line', display: 'flex', }}
//                             cursor={false}
//                             repeat={Infinity}
//                         />
//                     </h1>
//                     {/* <h1 className="text-4xl">Hello, I&apos;m</h1>
//                     <h1>Adam David</h1> make this typing animation */}

//                     <div id="socials" className="flex flex-row justify-center md:justify-normal text-3xl">
//                         {links.map((link) => {
//                             const LinkIcon = link.icon;

//                             return (
//                                 <Link
//                                     key={link.name}
//                                     href={link.href}
//                                     className="transition ease-in duration-200 hover:text-green-500"
//                                     target="_blank"
//                                     >
//                                         <LinkIcon className=""/>
//                                 </Link>
//                             );
//                         })}
//                     </div>
//                     <div className="flex justify-center md:justify-normal">
//                         <GradientBorderModal/>
//                     </div>
//                 </div>
//                 <div id="image" className="flex justify-center items-center md:mt-0 mt-12" >
//                     <Image
//                         src="/profile_pic.jpg"
//                         width={200}
//                         height={100}
//                         alt="Picture of Developer"
//                         className="rounded-full border-2 border-white">

//                     </Image>
//                 </div>
//             </div>