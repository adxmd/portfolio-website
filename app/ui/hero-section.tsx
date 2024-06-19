'use client';

import Link from 'next/link';
import Image from 'next/image';


import { 
    PiGithubLogo,
    PiLinkedinLogo
 } from "react-icons/pi";
{/* <PiGithubLogo /> */}
{/* <PiLinkedinLogo /> */}

import './global.css'


const links = [
    {name: 'GitHub', href: 'https://github.com/adxmd', icon: PiGithubLogo},
    {name: 'LinkedIn', href: 'https://www.linkedin.com/in/adamdavid54/', icon: PiLinkedinLogo},
]

import { TypeAnimation } from 'react-type-animation';
import GradientBorder from './buttons/gradientBorder';

import GradientBorderModal from './buttons/gradientBorderModal';


export default function HeroSection() {

    return (
        <>
            <div id="main" className="flex flex-col-reverse justify-evenly md:justify-center items-center bg-[#222629] h-[100vh] text-gray-50 md:flex-row">
                <div id="hello" className="flex flex-col gap-2">
                    <h1 className="md:text-start text-center flex flex-col items-center md:items-start font-bold text-4xl w-[70vw] md:w-[40vw] h-[12vh] ">
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
                            style={{ whiteSpace: 'pre-line', display: 'flex', }}
                            cursor={false}
                            repeat={Infinity}
                        />
                    </h1>
                    {/* <h1 className="text-4xl">Hello, I&apos;m</h1>
                    <h1>Adam David</h1> make this typing animation */}

                    <div id="socials" className="flex flex-row justify-center md:justify-normal text-3xl">
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
                    <div className="flex justify-center md:justify-normal">
                        <GradientBorderModal/>
                    </div>
                </div>
                <div id="image" className="flex justify-center items-center md:mt-0 mt-12" >
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