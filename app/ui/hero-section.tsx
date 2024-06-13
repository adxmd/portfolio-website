'use client';

import Link from 'next/link';
import Image from 'next/image';


import { 
    PiGithubLogo,
    PiLinkedinLogo
 } from "react-icons/pi";
{/* <PiGithubLogo /> */}
{/* <PiLinkedinLogo /> */}


const links = [
    {name: 'GitHub', href: 'https://github.com/adxmd', icon: PiGithubLogo},
    {name: 'LinkedIn', href: 'https://www.linkedin.com/in/adamdavid54/', icon: PiLinkedinLogo},
]

import { TypeAnimation } from 'react-type-animation';


export default function HeroSection() {

    return (
        <>
            <div id="main" className="flex flex-col-reverse justify-evenly items-center bg-[#222629] h-[100vh] text-gray-50 md:flex-row">
                <div id="hello" className="flex flex-col gap-2">
                    <h1 className="font-bold text-4xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-900">
                            Hello, I&apos;m{" "}
                        </span>
                        <TypeAnimation
                            preRenderFirstString={true}
                            className="text-3xl"
                            sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Adam',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Computer Science\nStudent',
                            1000,
                            'Aspiring Full-Stack\nWeb Developer',
                            1000,
                            'Machine Learning\nEnthusiast',
                            1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ whiteSpace: 'pre-line', display: 'flex' }}
                            repeat={Infinity}
                        />
                    </h1>
                    {/* <h1 className="text-4xl">Hello, I&apos;m</h1>
                    <h1>Adam David</h1> make this typing animation */}

                    <div id="socials" className="flex flex-row text-3xl">
                        {links.map((link) => {
                            const LinkIcon = link.icon;

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="transition ease-in duration-200 hover:text-green-500"
                                    target="_blank"
                                    >
                                        <LinkIcon className=""/>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="flex justify-center ">
                        <button className="mt-6 p-[3px] rounded-[2.0rem] bg-gradient-to-b from-green-700 to-lime-500 ">
                            <div className="p-5 rounded-[1.9rem] transition ease-out duration-500 hover:bg-[#222629]" >
                                <span className="text-lg font-semibold">Download Résumé</span>
                            </div>
                        </button>
                    </div>
                </div>
                <div id="image" className="flex justify-center items-center md:m-0" >
                    <Image
                        src="/profile_pic.jpg"
                        width={200}
                        height={100}
                        alt="Picture of Developer"
                        className="rounded-full border-2 border-white">

                    </Image>
                </div>
            </div>
        </>
    );
}