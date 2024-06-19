//used for redirecting to github
import Link from 'next/link';
import { Metadata } from 'next';

import HeroSection from './ui/hero-section';

import AboutSection from './ui/about-section';
import PortfolioSection from './ui/portfolio-section';

export const metadata: Metadata = {
    title: 'Landing Page',
};

export default function Page() {


    return (
        <>
            <div id="home" className="flex flex-col">

                <div className="text-gray-100">
                    {/* <section id="home" className="h-[500px]"> Home </section> */}
                    <HeroSection />
                    <section id="about" className="" > 
                        {/* About */}
                        <AboutSection /> 
                    </section>

                    <section id="projects" className=""> 
                        <PortfolioSection />
                    </section>

                    <section id="contact" className="h-[100vh] bg-[rgb(224,224,224)]"> 
                        Contact 
                    </section>


                </div>
            </div>
        </>
    );
}

